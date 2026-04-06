import { useState, useEffect } from 'react';

// types/github.ts

export interface GitHubProfile {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    location: string | null;
    created_at: string;
}

export interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    updated_at: string;
}

export interface GitHubEvent {
    id: string;
    type: string;
    created_at: string;
    payload: {
        commits?: { message: string }[];
        size?: number;
    };
}

// Generate a contribution-style grid from events
function buildContributionGrid(events: GitHubEvent[]): number[][] {
    // Build 7 rows (days) x 20 columns (weeks) = ~140 days of activity
    const rows = 7;
    const cols = 20;
    const grid: number[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(0)
    );

    const now = new Date();

    events.forEach((event) => {
        if (event.type === 'PushEvent') {
            const eventDate = new Date(event.created_at);
            const diffMs = now.getTime() - eventDate.getTime();
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            if (diffDays >= 0 && diffDays < rows * cols) {
                const col = cols - 1 - Math.floor(diffDays / rows);
                const row = diffDays % rows;
                if (col >= 0 && col < cols && row >= 0 && row < rows) {
                    const commitCount = event.payload?.size || event.payload?.commits?.length || 1;
                    grid[row][col] += commitCount;
                }
            }
        }
    });

    return grid;
}

export const useGitHubData = (username: string) => {
    const [profile, setProfile] = useState<GitHubProfile | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [totalCommits, setTotalCommits] = useState<number>(0);
    const [contributionGrid, setContributionGrid] = useState<number[][]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // Fetch profile, repos, and events concurrently
                const [profileRes, reposRes, eventsRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`, {
                        signal: controller.signal
                    }),
                    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
                        signal: controller.signal
                    }),
                    fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, {
                        signal: controller.signal
                    })
                ]);

                if (!profileRes.ok || !reposRes.ok) {
                    throw new Error(`API Error: Profile (${profileRes.status}), Repos (${reposRes.status})`);
                }

                const profileData: GitHubProfile = await profileRes.json();
                const reposData: GitHubRepo[] = await reposRes.json();

                let eventsData: GitHubEvent[] = [];
                if (eventsRes.ok) {
                    eventsData = await eventsRes.json();
                }

                // Count total commits from push events
                const commits = eventsData
                    .filter((e) => e.type === 'PushEvent')
                    .reduce((sum, e) => sum + (e.payload?.size || e.payload?.commits?.length || 1), 0);

                setProfile(profileData);
                setRepos(reposData);
                setTotalCommits(commits);
                setContributionGrid(buildContributionGrid(eventsData));
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Failed to fetch GitHub data');
                }
            } finally {
                setIsLoading(false);
            }
        };

        if (username) {
            fetchData();
        }

        return () => controller.abort();
    }, [username]);

    return { profile, repos, totalCommits, contributionGrid, isLoading, error };
};