import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/ilmifaizan1112",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/ilmifaizan_/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/icangg05",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/ilmifaizan/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a href={item.path} target="_blank" key={index} className={iconStyles}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
