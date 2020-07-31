import React from 'react';
import { Fade, Link, Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { clearModals, openLoginModal } from '../redux/actions/modal';
import SignupForm from './SignupForm';
import { clearErrors } from '../redux/actions/error';

interface Props {
  open: boolean,
  clearErrors: Function,
  clearModals: Function,
  openLoginModal: Function,
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

const SignupModal = (props: any) => {
  const { open, clearErrors, clearModals, openLoginModal }: Props = props;
  const classes = useStyles();

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
          <Typography>
            Already have an account?
            {' '}
            <Link onClick={handleModalSwitch}>Log in</Link>
          </Typography>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({ open: state.modal.signup });

export default connect(mapStateToProps, { clearErrors, clearModals, openLoginModal })(SignupModal);
