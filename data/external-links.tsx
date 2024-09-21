import { Github, Linkedin } from "lucide-react"

const style =
  "h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
const externalLinks = [
  {
    title: "Github",
    icon: <Github className={style} />,
    link: "https://github.com",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className={style} />,
    link: "https://linkedin.com",
  },
]

export default externalLinks
