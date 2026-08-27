import { skill } from "@/lib/data/skill";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiVercel,
  SiRender,
} from "react-icons/si";
import {
  Cpu,
  ShieldCheck,
  Database,
  Server,
  Code,
  Sparkles,
  Lock,
  MonitorCog,
} from "lucide-react";

// Mapping tech names to specific React Icons
const techIconMap: Record<string, React.ReactNode> = {
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS3: <SiCss className="text-blue-500" />,
  "JavaScript (ES6+)": <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  "shadcn/ui": <SiShadcnui className="text-white" />,
  Bootstrap: <SiBootstrap className="text-purple-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-400" />,
  "RESTful APIs": <Server className="text-indigo-400" />,
  "Serverless Functions": <Cpu className="text-amber-400" />,
  "LLMs (Groq, Gemini, OpenAI)": <Sparkles className="text-emerald-400" />,
  "RAG Architecture": <Database className="text-teal-400" />,
  "Context-Aware Prompting": <Code className="text-violet-400" />,
  "AI Model Integration": <Cpu className="text-purple-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  MySQL: <SiMysql className="text-blue-400" />,
  Firebase: <SiFirebase className="text-amber-500" />,
  Supabase: <SiSupabase className="text-emerald-500" />,
  "NextAuth.js / Auth.js": <Lock className="text-emerald-400" />,
  "Google OAuth": <ShieldCheck className="text-blue-400" />,
  "Server-side API Routing & Secrets Management": (
    <ShieldCheck className="text-rose-400" />
  ),
  Git: <SiGit className="text-orange-600" />,
  GitHub: <SiGithub className="text-white" />,
  "GitHub Copilot": <SiGithubcopilot className="text-indigo-400" />,
  "VS Code": <MonitorCog className="text-blue-500" />,
  Vercel: <SiVercel className="text-white" />,
  Render: <SiRender className="text-cyan-300" />,
};

const SkillsPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Skills</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Technologies, frameworks, and tools I use to build scalable web
          applications and AI integration workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skill.map((categoryGroup, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">
              {categoryGroup.category}
            </h2>

            <div className="flex flex-wrap gap-3">
              {categoryGroup.skills.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-3 py-2 bg-neutral-800/80 rounded-lg text-sm font-medium border border-neutral-700/50 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-lg">
                    {techIconMap[item] || <Code className="text-gray-400" />}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SkillsPage;
