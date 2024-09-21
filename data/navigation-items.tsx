import { Home, Smartphone, Monitor, Award, Mail } from "lucide-react"

const style =
  "h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
const navigationItems = [
  {
    title: "About Me",
    icon: <Home className={style} />,
    link: "#home",
  },
  {
    title: "Mobile Projects",
    icon: <Smartphone className={style} />,
    link: "#mobile",
  },
  {
    title: "Web Projects",
    icon: <Monitor className={style} />,
    link: "#web",
  },
  {
    title: "Grades & Achievements",
    icon: <Award className={style} />,
    link: "#grades",
  },
  {
    title: "Contact Me",
    icon: <Mail className={style} />,
    link: "#contact",
  },
]

export default navigationItems
