import { Box, Stack, Avatar, Button, Typography } from '@mui/material';
import { StyledBadge } from '../../styles/StyledBadge';
import { CustomTypography } from './CustomTypography';
import { CHAT_SIDERBAR_MESSAGES } from '../../utils/texts';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import red from "@mui/material/colors/red";

/*
  SideBar containing Avatar, introduction text and "clear text" button.
  Invisible on smaller screens.
*/
const SideBar = () => {
  const auth = useContext(AuthContext);

  const handleDeleteChats = async () => {
    console.log("Delete chats here");
  };

  return (
    <Box  //sidebar
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },  //not visible on smaller screens
        flex: 0.22, //takes 20% of space on the left
        flexDirection: "column",
        width: "100%",
        height: "100%", //takes 84.5% of viewport height
        bgcolor: "rgb(17,29,39)",
        borderRadius: 5,
        margin: 3,
        padding: 3
      }}
    >
      <Box  //Avatar and text.
        sx={{
          display: "flex",
          gap: 2
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
        <Typography variant={"h6"}sx={{marginTop: 0.55}}>You're online!</Typography>
      </Box>

      <CustomTypography>{CHAT_SIDERBAR_MESSAGES[0]}</CustomTypography>
      <CustomTypography>{CHAT_SIDERBAR_MESSAGES[1]}</CustomTypography>
      <CustomTypography>{CHAT_SIDERBAR_MESSAGES[2]}</CustomTypography>
      
      <Button
        onClick={handleDeleteChats}
        sx={{
          color: "white",
          fontWeight: "700",
          borderRadius: 3,
          bgcolor: "#ba000d",
          marginTop: 20,
          ":hover": {
            bgcolor: "white",
            color: "black",
            boxShadow: "0 0 0 4px #ba000d",
          }
        }}>
        Clear Conversation
      </Button>

    </Box>
  );
};

export default SideBar;