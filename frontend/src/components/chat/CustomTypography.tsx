import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface CustomTypographyProps extends TypographyProps {
  children: ReactNode;
}

export const CustomTypography = ({ children, ...rest }: CustomTypographyProps) => {
  return (
    <Typography sx={{ 
      fontFamily: "work sans", 
      marginY: 2,
      textAlign: "justify",
    }}
    {...rest}
    >
      {children}
    </Typography>
  );
};