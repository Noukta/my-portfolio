import { Github, Linkedin, FileText } from "lucide-react"

const style =
  "h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
const externalLinks = [
  {
    title: "Github",
    icon: <Github className={style} />,
    link: "https://github.com/Noukta",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className={style} />,
    link: "https://www.linkedin.com/in/ahmed-noukta/",
  },
  {
    title: "Resume",
    icon: <FileText className={style} />,
    link: "https://drive.google.com/file/d/1cVb-zAMdDj_7F5de7DMlMcKsqT2udKvd/view",
  },
]

export default externalLinks
