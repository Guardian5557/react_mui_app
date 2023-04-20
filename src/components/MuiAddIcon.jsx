import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import {
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyleModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const MuiAddIcon = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "80%", md: "10%" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      {/* model box */}

      <StyleModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "400px",
            height: "270px",
            borderRadius: "10px",
            padding: "10px",
          }}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            create post
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              src="https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: "30px", height: "30px" }}
            />
            <Typography variant="span" fontWeight={500}>
              Min Min
            </Typography>
          </Box>
          <TextField
            sx={{ width: "100%", mt: "30px" }}
            id="standard-helperText"
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Stack width={"100%"}>
            <Button variant="contained">post</Button>
          </Stack>
        </Box>
      </StyleModal>
    </>
  );
};

export default MuiAddIcon;
