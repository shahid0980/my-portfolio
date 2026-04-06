export interface Skill {
  name: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: "React", icon: "\u269B\uFE0F", category: "Frontend" },
  { name: "Next.js", icon: "\u25B2", category: "Frontend" },
  { name: "TypeScript", icon: "\uD83D\uDCD8", category: "Languages" },
  { name: "Tailwind CSS", icon: "\uD83D\uDCA8", category: "Frontend" },
  { name: "Node.js", icon: "\uD83D\uDFE2", category: "Backend" },
  { name: "MongoDB", icon: "\uD83C\uDF43", category: "Database" },
  { name: "PostgreSQL", icon: "\uD83D\uDC18", category: "Database" },
  { name: "Docker", icon: "\uD83D\uDC33", category: "DevOps" },
  { name: "AWS", icon: "\u2601\uFE0F", category: "DevOps" },
  { name: "Git", icon: "\uD83D\uDD00", category: "Tools" },
  { name: "GraphQL", icon: "\u25C8", category: "Backend" },
  { name: "Figma", icon: "\uD83C\uDFA8", category: "Design" },
];

export default skills;
