import React from 'react';
import { Fade, Modal, Typography, IconButton, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { clearModals, openSignupModal } from '../redux/actions/modal';
import LoginForm from './LoginForm';
import { clearErrors } from '../redux/actions/error';
import modalStyles from '../styles/modalStyles';
import { LOGIN_MS } from '../redux/constants';

interface Props {
  modalState: string,
  clearErrors: Function,
  clearModals: Function,
  openSignupModal: Function,
}

const LoginModal = (props: any) => {
  const { modalState, clearErrors, clearModals, openSignupModal }: Props = props;
  const classes = modalStyles();
  const open = modalState === LOGIN_MS;

  const handleClose = () => {
    clearModals();
  };

  const handleModalSwitch = () => {
    clearErrors();
    openSignupModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
      aria-label="Login modal"
      aria-describedby="modal-desc"
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography id="modal-desc" variant="h5" align="center">
            Log in to continue
          </Typography>
          <IconButton aria-label="close modal window" className={classes.close} onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
          <LoginForm />
          <Typography className={classes.modalSwitchText}>
            Don&apos;t have an account?
            {' '}
            <Button onClick={handleModalSwitch}>Sign up</Button>
          </Typography>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ modalState: state.modal.state });

export default connect(mapStateToProps, { clearErrors, clearModals, openSignupModal })(LoginModal);
