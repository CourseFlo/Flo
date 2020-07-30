import React from 'react';
import { Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearModals, openSignupModal } from '../redux/actions/modal';
import LoginForm from './LoginForm';
import { clearErrors } from '../redux/actions/error';

interface Props {
  open: boolean,
  clearErrors: Function,
  clearModals: Function,
  openSignupModal: Function,
}

const LoginModal = (props: any) => {
  const { open, clearErrors, clearModals, openSignupModal }: Props = props;

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
    >
      <div>
        <Typography variant="h5" align="center">
          Log in to continue
        </Typography>
        <LoginForm />
        <button onClick={handleModalSwitch}>Sign up</button>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ open: state.modal.login });

export default connect(mapStateToProps, { clearErrors, clearModals, openSignupModal })(LoginModal);
