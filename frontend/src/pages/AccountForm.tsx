import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

import { User } from '../type-interfaces/User';
import { getUsers, updateUser } from '../redux/actions/User';

interface Props {
  currentUser: User,
  getUsers: Function,
  updateUser: Function,
}

function AccountForm(props: any) {
  const { currentUser, getUsers, updateUser } : Props = props;
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [major, setMajor] = useState(currentUser.major);
  const [courses, setCourses] = useState(currentUser.courses);
  const [editingName, toggleEditingName] = useState(false);
  const [editingEmail, toggleEditingEmail] = useState(false);
  const [editingMajor, toggleEditingMajor] = useState(false);

  useEffect(() => {
    // TODO: make this a specific get current user action
    getUsers();
  }, []);

  const handleEditName = () => {
    toggleEditingName(true);
  };
  const handleEditEmail = () => {
    toggleEditingEmail(true);
  };
  const handleEditMajor = () => {
    toggleEditingMajor(true);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleMajorChange = (e: any) => {
    setMajor(e.target.value);
  };

  const handleSubmitChange = (event: any) => {
    event.preventDefault();
    const changedFields = {
      name,
      email,
      major,
    };
    // eslint-disable-next-line no-underscore-dangle
    updateUser(currentUser._id, changedFields);
    toggleEditingName(false);
    toggleEditingEmail(false);
    toggleEditingMajor(false);
  };

  return (
    <div>
      <List>
        {/* Name Field */}
        {editingName
          ? (
            <ListItem>
              <form>
                <TextField label="Name" value={name} onChange={handleNameChange} />
                <Button onClick={handleSubmitChange}>Submit</Button>
              </form>
            </ListItem>
          )
          : (
            <ListItem>
              <Typography variant="subtitle1">
                Name:
                {currentUser.name}
              </Typography>
              <Button onClick={handleEditName} startIcon={<EditIcon />} />
            </ListItem>
          )}
        {/* Email Field */}
        {editingEmail
          ? (
            <ListItem>
              <form>
                <TextField label="Email" value={email} onChange={handleEmailChange} />
                <Button onClick={handleSubmitChange}>Submit</Button>
              </form>
            </ListItem>
          )
          : (
            <ListItem>
              <Typography variant="subtitle1">
                Email:
                {currentUser.email}
              </Typography>
              <Button onClick={handleEditEmail} startIcon={<EditIcon />} />
            </ListItem>
          )}
        {/* Major Field */}
        {editingMajor
          ? (
            <ListItem>
              <form>
                <TextField label="Major" value={major} onChange={handleMajorChange} />
                <Button onClick={handleSubmitChange}>Submit</Button>
              </form>
            </ListItem>
          )
          : (
            <ListItem>
              <Typography variant="subtitle1">
                Major:
                {currentUser.major}
              </Typography>
              <Button onClick={handleEditMajor} startIcon={<EditIcon />} />
            </ListItem>
          )}
        <ListItem>
          <Typography variant="subtitle1">Courses:</Typography>
          <List>
            {courses.map((course) => (
              <ListItem button key={course}>{course}</ListItem>
            ))}
          </List>
        </ListItem>
      </List>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const { currentUser } = state;
  return { currentUser };
};

export default connect(mapStateToProps, { getUsers, updateUser })(AccountForm);
// TODO: change get users to get specific user. this is placeholder before we implement new action
