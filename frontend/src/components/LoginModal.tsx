import React from 'react';
import { Fade, Link, Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearModals, openSignupModal } from '../redux/actions/modal';
import LoginForm from './LoginForm';
import { clearErrors } from '../redux/actions/error';
import modalStyles from '../util/modalStyles';

interface Props {
  open: boolean,
  clearErrors: Function,
  clearModals: Function,
  openSignupModal: Function,
}

const LoginModal = (props: any) => {
  const { open, clearErrors, clearModals, openSignupModal }: Props = props;
  const classes = modalStyles();

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
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h5" align="center">
            Log in to continue
          </Typography>
          <LoginForm />
          <Typography className={classes.modalSwitchText}>
            Don&apos;t have an account?
            {' '}
            <Link onClick={handleModalSwitch}>Sign up</Link>
          </Typography>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ open: state.modal.login });

export default connect(mapStateToProps, { clearErrors, clearModals, openSignupModal })(LoginModal);
