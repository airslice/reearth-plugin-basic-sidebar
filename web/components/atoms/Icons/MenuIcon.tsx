import { Icon, type IconProps } from "@chakra-ui/react";

const MenuIcon = (props: IconProps) => (
  <Icon viewBox="0 0 32 32" {...props}>
    <path
      d="M5 16H27"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 8H27"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 24H27"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default MenuIcon;
