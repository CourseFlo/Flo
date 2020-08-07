import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles((theme) => ({
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
  modalSwitchText: {
    paddingTop: '10px',
  },
  close: {
    cursor: 'pointer',
    float: 'right',
    marginTop: '-38px',
    marginRight: '-18px',
  },
}));

export default modalStyles;
