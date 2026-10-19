import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGnubash,
  SiGo,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiStripe,
  SiVuedotjs,
} from "react-icons/si";
import { TbClockHour4 } from "react-icons/tb";

const skillIconMap: Record<string, IconType> = {
  Java: SiOpenjdk,
  "C#": SiDotnet,
  Python: SiPython,
  Dart: SiDart,
  Golang: SiGo,
  "C++": SiCplusplus,
  "JavaScript (Node.js)": SiNodedotjs,
  PHP: SiPhp,
  "Next.js": SiNextdotjs,
  "ASP.NET Core": SiDotnet,
  "React.js": SiReact,
  "Vue.js": SiVuedotjs,
  "Nest.js": SiNestjs,
  Flutter: SiFlutter,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  "Hangfire (Background Jobs)": TbClockHour4,
  GitLab: SiGitlab,
  GitHub: SiGithub,
  Docker: SiDocker,
  "CI/CD Pipelines": SiGithubactions,
  "WSL (Ubuntu)": SiLinux,
  "Bash Script": SiGnubash,
  "Stripe Payment Gateway": SiStripe,
};

export function getSkillIcon(skillName: string): IconType {
  return skillIconMap[skillName] ?? SiJavascript;
}
