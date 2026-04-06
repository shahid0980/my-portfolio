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
}

export interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}


export const useGitHubData = (username: string) => {
    const [profile, setProfile] = useState<GitHubProfile | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // Fetch both profile and repos at the exact same time
                const [profileRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`, {
                        signal: controller.signal
                    }),
                    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
                        signal: controller.signal
                    })
                ]);

                if (!profileRes.ok || !reposRes.ok) {
                    throw new Error(`API Error: Profile (${profileRes.status}), Repos (${reposRes.status})`);
                }

                const profileData: GitHubProfile = await profileRes.json();
                const reposData: GitHubRepo[] = await reposRes.json();

                setProfile(profileData);
                setRepos(reposData);
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

    return { profile, repos, isLoading, error };
};