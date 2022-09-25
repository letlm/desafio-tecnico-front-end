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
  width: "310",
  height: 400,
  bgcolor: "background.paper",
  border: "8px solid #E87E21",
  borderRadius: "0.1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
  minWidth: 300,
};

function ModalRestrictedArea({ children }: IModal) {
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
          <div className="children">{children}</div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalRestrictedArea;
