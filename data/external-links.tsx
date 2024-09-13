import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const size = "h-[1rem] w-[1rem]";
const externalLinks = [
  {
    title: "Github",
    icon: <GitHubLogoIcon className={size} />,
    link: "https://github.com",
  },
  {
    title: "LinkedIn",
    icon: <LinkedInLogoIcon className={size} />,
    link: "https://linkedin.com",
  },
];

export default externalLinks;
