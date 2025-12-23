import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "We are committed to provide you the best tattoo experience",
  desc: "The Ink Room offers a unique blend of creativity, hygiene, and customer satisfaction. Our skilled artists work closely with you to bring your tattoo ideas to life in a safe and welcoming environment.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Skilled & Professional Artists",
      desc: "Our team of talented tattoo artists are dedicated to creating stunning designs tailored to your vision.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Hygiene & Safety First",
      desc: "We maintain the highest standards of cleanliness and safety to ensure a worry-free tattooing experience.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Custom Designs & Creativity",
      desc: "We work closely with you to craft unique, personalized tattoo designs that reflect your style and personality.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Best Female Tattoo Artist in Kolkata",
  desc: "Soniya is renowned for her exceptional tattoo artistry and commitment to client satisfaction. With a keen eye for detail and a passion for creativity, she has established herself as one of the leading female tattoo artists in Kolkata.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Private & Comfortable Studio",
      desc: "Our studio offers a cozy and private setting where you can relax and enjoy the tattooing process.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Best Female Tattoo Artist",
      desc: "Soniya is renowned for her exceptional tattoo artistry and commitment to client satisfaction.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "At home services",
      desc: "We provide convenient at-home tattoo services, bringing our expertise directly to your doorstep.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
