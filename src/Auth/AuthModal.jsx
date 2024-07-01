import React from "react";
import { Box, Modal, Typography, outlinedInputClasses } from "@mui/material";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router";
import LoginForm from "./LoginForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ close, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? (
            <LoginForm handleClose={close} />
          ) : (
            <RegisterForm handleClose={close} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
