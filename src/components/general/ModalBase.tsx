import React from "react";
import { Modal, Fade, Box, Backdrop, IconButton } from "@mui/material";

type Modal = {
  isOpen: boolean
  handleClose: any
  children: string | JSX.Element | JSX.Element[]
}

export default function ModalBase(props: Modal) {
  const { isOpen, handleClose, children } = props

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{
          overflowY: "scroll",
        }}
      >
        <Fade in={isOpen}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                '@media screen and (max-width: 900px)': {
                  maxWidth: 700, minWidth: 550
                },
                '@media screen and (max-width: 750px)': {
                  maxWidth: 550, minWidth: 400
                },
                '@media screen and (max-width: 600px)': {
                  maxWidth: 450, minWidth: 300
                },
                '@media screen and (max-width: 480px)': {
                  maxWidth: 350, minWidth: 200
                },
                '@media screen and (max-width: 370px)': {
                  maxWidth: 250, minWidth: 100
                },
                minWidth: 600,
                maxWidth: 850,
                position: "relative",
                backgroundColor: "white",
                boxShadow: '2em',
                padding: '2em',
                borderRadius: '1em'
              }}
            >
              <Box>
                {children}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}