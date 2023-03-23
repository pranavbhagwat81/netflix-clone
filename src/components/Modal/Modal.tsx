import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#101010",
  border: "2px solid #000",
  boxShadow: 48,
  outline: 0,
};

interface Props {
  children: JSX.Element;
  isVisible: boolean;
  handleModalClose: Function;
}

const BaseModal = ({
  children,
  isVisible,
  handleModalClose,
}: Props): JSX.Element => {
  const handleClose = (event: any, reason: any) => {
    console.log(event, reason);

    if (reason && reason == "backdropClick") {
      handleModalClose();
    }
  };

  return (
    <div>
      <Modal
        open={isVisible}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
        hideBackdrop={!isVisible}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

function moviePropsAreEqual(prevMovie: any, nextMovie: any) {
  console.log(prevMovie, nextMovie);

  return (
    prevMovie.title === nextMovie.title &&
    prevMovie.releaseDate === nextMovie.releaseDate
  );
}

export default React.memo(BaseModal, moviePropsAreEqual);
