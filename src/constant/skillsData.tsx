interface Skill {
    name: string;
    icon: string;
    color: string;
}

const skills: Skill[] = [
    { name: "Figma", icon: "🎨", color: "bg-pink-100 text-pink-600" },
    { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-600" },
    { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-600" },
    { name: "TypeScript", icon: "📘", color: "bg-blue-100 text-blue-600" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-100 text-green-600" },
    { name: "Next.js", icon: "▲", color: "bg-gray-100 text-gray-600" },
    { name: "Tailwind", icon: "💨", color: "bg-cyan-100 text-cyan-600" },
    { name: "Docker", icon: "🐳", color: "bg-blue-100 text-blue-600" },
    { name: "Git", icon: "🔀", color: "bg-orange-100 text-orange-600" },
    { name: "AWS", icon: "☁️", color: "bg-yellow-100 text-yellow-600" },
    { name: "GraphQL", icon: "◈", color: "bg-pink-100 text-pink-600" },
    { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-600" },
];


export default skills;