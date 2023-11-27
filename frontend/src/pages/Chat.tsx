import { Box, Typography, Avatar, Stack } from "@mui/material";
import { StyledBadge } from "../styles/StyledBadge";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CHAT_SIDERBAR_MESSAGES } from "../utils/texts";
import { CustomTypography } from "../components/chat/CustomTypography";

const Chat = () => {
  const auth = useContext(AuthContext);

  return (
    <Box  //outermost flex container
      sx={{
        display: "flex",
        flex: 1,  //fill all available space
        width: "100%",
        height: "100%",
        //mt: 3,
        gap: 3, //gap between flex items of this container
      }}
    >
      <Box  //sidebar
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },  //not visible on smaller screens
          flex: 0.22, //takes 20% of space on the left
          flexDirection: "column",
          width: "100%",
          height: "60vh", //takes 60% of viewport height
          bgcolor: "rgb(17,29,39)",
          borderRadius: 5,
          margin: 3,
          padding: 3
        }}
      >
        <Stack direction="row" spacing={2}>
          <StyledBadge  //adds a green online circle to Avatar
            overlap="circular"  //overlaps content
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  //position of badge
            variant="dot"
          >
            <Avatar //user's name initial capitalized
              sx={{
                //mx: "auto", 
                bgcolor: "white",
                color: "black",
                fontWeight: 700,
              }}
            >
              {auth?.user?.name[0].toUpperCase()}
            </Avatar>
          </StyledBadge>
        </Stack>

        <CustomTypography>
          {CHAT_SIDERBAR_MESSAGES[0]}
        </CustomTypography>
        <CustomTypography>
          {CHAT_SIDERBAR_MESSAGES[1]}
        </CustomTypography>
        <CustomTypography>
          {CHAT_SIDERBAR_MESSAGES[2]}
        </CustomTypography>
      </Box>
    </Box>
  );
};

export default Chat;