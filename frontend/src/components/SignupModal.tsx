import React from 'react';
import { Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearModals } from '../redux/actions/modal';

interface Props {
  open: boolean,
  clearModals: Function,
}

const SignupModal = (props: any) => {
  const { open, clearModals }: Props = props;

  const handleClose = () => {
    clearModals();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <div>this the signup</div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ open: state.modal.signup });

export default connect(mapStateToProps, { clearModals })(SignupModal);
