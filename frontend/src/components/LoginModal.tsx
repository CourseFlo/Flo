import React from 'react';
import { Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearModals } from '../redux/actions/modal';
import LoginForm from './LoginForm';

interface Props {
  open: boolean,
  clearModals: Function,
}

const LoginModal = (props: any) => {
  const { open, clearModals }: Props = props;

  const handleClose = () => {
    clearModals();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <div>
        <LoginForm />
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ open: state.modal.login });

export default connect(mapStateToProps, { clearModals })(LoginModal);
