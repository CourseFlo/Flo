import React from 'react';
import {Fade, IconButton, Link, Modal, Typography} from '@material-ui/core';
import { connect } from 'react-redux';
import { clearModals, openLoginModal } from '../redux/actions/modal';
import SignupForm from './SignupForm';
import { clearErrors } from '../redux/actions/error';
import modalStyles from '../styles/modalStyles';
import { SIGNUP_MS } from '../redux/constants';
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  modalState: string,
  clearErrors: Function,
  clearModals: Function,
  openLoginModal: Function,
}

const SignupModal = (props: any) => {
  const { modalState, clearErrors, clearModals, openLoginModal }: Props = props;
  const classes = modalStyles();
  const open = modalState === SIGNUP_MS;

  const handleClose = () => {
    clearModals();
  };

  const handleModalSwitch = () => {
    clearErrors();
    openLoginModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h5" align="center">
            Sign up here
          </Typography>
          <IconButton aria-label="close modal window" className={classes.close} onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
          <SignupForm />
          <Typography className={classes.modalSwitchText}>
            Already have an account?
            {' '}
            <Link onClick={handleModalSwitch}>Log in</Link>
          </Typography>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ modalState: state.modal.state });

export default connect(mapStateToProps, { clearErrors, clearModals, openLoginModal })(SignupModal);
