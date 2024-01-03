import { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import close from "./../assets/icons/cancel.svg";

import { Dialog, useMediaQuery, DialogTitle, Slide, DialogContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const C_Dialog = styled(Dialog)`
  div.MuiPaper-root {
    border-radius: var(--space-24);
    height: 100%;
    max-height: 900px;
    @media (max-width: ${(props) => props.theme.desktop}) {
      border-radius: var(--space-16);
      max-height: unset;
    }
  }
  div.MuiDialogTitle-root {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-24) var(--space-48);
    img {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
    @media (max-width: ${(props) => props.theme.mobile}) {
      border-radius: var(--space-16);
      padding: var(--space-16) var(--space-16) var(--space-8);
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  div.MuiDialogContent-root {
    padding: var(--space-8) var(--space-48) var(--space-48);
    @media (max-width: ${(props) => props.theme.mobile}) {
      padding: var(--space-8) var(--space-16) var(--space-16);
    }
  }
`;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// 最新活動、政策議題、抖內、信箱使用的dialog元件
const Modal = ({ open, setOpen, title, children }) => {
  const theme = useTheme();
  const isTable = useMediaQuery(theme.breakpoints.down("desktop"));
  const TransitionComponent = isTable ? { TransitionComponent: Transition } : {};
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <C_Dialog fullWidth maxWidth="modal" fullScreen={isTable} open={open} {...TransitionComponent}>
      <DialogTitle component="div">
        <h2>{title}</h2>
        <img onClick={handleClose} src={close}></img>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </C_Dialog>
  );
};

Modal.prototype = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
};

Modal.defaultProps = {
  open: false,
  setOpen: () => {},
  title: "標題",
};

export default Modal;
