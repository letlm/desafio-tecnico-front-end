import React, { ReactNode } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useModal } from "../../context/ModalProvider";

interface IModal {
  children: ReactNode;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: 500,
  bgcolor: "background.paper",
  border: "8px solid #E87E21",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  p: 4,
  minWidth: 300,
};

function ModalFooter({ children }: IModal) {
  const { open, setOpen } = useModal();
  const handleClose = () => setOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div>{children}</div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalFooter;
