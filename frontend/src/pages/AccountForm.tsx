import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import { User } from '../type-interfaces/User';
import { FieldEditState } from '../type-interfaces/FieldEditState';
import { setField } from '../redux/actions/Profile';
import { getUsers, updateUser } from '../redux/actions/User';
// import { getUsers } from '../redux/actions/User';

interface Props {
  isEditingField: FieldEditState,
  currentUser: User,
  setField: Function,
  getUsers: Function,
  updateUser: Function
}

const initialState: User = {
  name: 'Sam Ip',
  email: 'samip@email.com',
  major: 'Computer Science',
  courses: [
    'CPSC 110', 'CPSC 121', 'CPSC 210', 'CPSC 213', 'CPSC 221', 'CPSC 310',
  ],
  _id: '5f080b5a1ad963c82c07f475',
};

function AccountForm(props: any) {
  const { isEditingField, currentUser, setField, getUsers, updateUser } : Props = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/users')
      .then((response) => {
        const user = response.data[0];
        setName(user.name);
        setEmail(user.email);
        setMajor(user.major);
        setCourses(user.courses);
      }); // TODO: WE SHOULD NOT BE CALLING THE API TWICE, THIS IS TEMP

    getUsers();
  }, []);

  const handleEditName = () => {
    setField('name', true);
  };

  const handleEditEmail = () => {
    setField('email', true);
  };
  const handleEditMajor = () => {
    setField('major', true);
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
    setField('name', false);
    setField('email', false);
    setField('major', false);
  };

  return (
    <div>
      <List>
        {/* Name Field */}
        {isEditingField.name
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
        {isEditingField.email
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
        {isEditingField.major
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

interface UserState {
  setEditName: boolean,
  setEditEmail: boolean,
  setEditMajor: boolean,
  setProfileState: User,
}

const mapStateToProps = (state: any) => {
  const { isEditingField, currentUser } = state;
  return { isEditingField, currentUser };
};

export default connect(mapStateToProps, { setField, getUsers, updateUser })(AccountForm);
// TODO: change get users to get specific user. this is placeholder before we implement new action
