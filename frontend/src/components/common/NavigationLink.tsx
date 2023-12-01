import { Link } from "react-router-dom";
import { NavigationLinkProps } from "../../types";

const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <Link 
      onClick={props.onClick}
      className="nav-link"
      to={props.to}
      style={{
        background: props.bg,
        color: props.textColor
      }}
    >
      {props.text}
    </Link>
  )
};

export default NavigationLink;