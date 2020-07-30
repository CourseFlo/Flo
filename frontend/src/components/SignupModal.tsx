import React from 'react';
import { Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearModals, openLoginModal } from '../redux/actions/modal';
import SignupForm from './SignupForm';
import { clearErrors } from '../redux/actions/error';

interface Props {
  open: boolean,
  clearErrors: Function,
  clearModals: Function,
  openLoginModal: Function,
}

const SignupModal = (props: any) => {
  const { open, clearErrors, clearModals, openLoginModal }: Props = props;

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
    >
      <div>
        <Typography variant="h5" align="center">
          Sign up here
        </Typography>
        <SignupForm />
        <button onClick={handleModalSwitch}>Log in</button>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ open: state.modal.signup });

export default connect(mapStateToProps, { clearErrors, clearModals, openLoginModal })(SignupModal);
