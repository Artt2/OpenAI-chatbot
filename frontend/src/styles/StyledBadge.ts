import { styled } from "@mui/system";
import { Badge } from "@mui/material";

//source: https://mui.com/material-ui/react-avatar/ 
export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {  //targets elements inside the Badge component
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': { //defines a CSS pseudo-element, adds this after the actual content
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',  //circular shape
      animation: 'ripple 1.2s infinite ease-in-out',  //1.2 s long animation
      border: '1px solid currentColor', //border
      content: '""',  //needed to display element
    },
  },
  '@keyframes ripple': {  //ripple animation
    '0%': { //animation starts at 0%
      transform: 'scale(.8)', //minimum size of circle
      opacity: 1,
    },
    '100%': { //ends at 100%
      transform: 'scale(2.4)',  //maximum size of circle
      opacity: 0, //invisible
    },
  },
}));