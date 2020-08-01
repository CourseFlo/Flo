import React from 'react';
import { Fade, Link, Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearModals, openLoginModal } from '../redux/actions/modal';
import SignupForm from './SignupForm';
import { clearErrors } from '../redux/actions/error';
import modalStyles from '../util/modalStyles';
import { SIGNUP_MS } from '../redux/constants';

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
