import React from 'react';
import { Fade, Link, Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { clearModals, openSignupModal } from '../redux/actions/modal';
import LoginForm from './LoginForm';
import { clearErrors } from '../redux/actions/error';

interface Props {
  open: boolean,
  clearErrors: Function,
  clearModals: Function,
  openSignupModal: Function,
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '80%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginModal = (props: any) => {
  const { open, clearErrors, clearModals, openSignupModal }: Props = props;
  const classes = useStyles();

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
          <Typography>
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
