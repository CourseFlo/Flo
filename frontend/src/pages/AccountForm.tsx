import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
// import { blue } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

// const emails = ['username@gmail.com', 'user02@gmail.com'];

const initialState = {
  name: 'Sam Ip',
  email: 'samip@email.com',
  Major: 'Computer Science',
  courses: [
    'CPSC 110', 'CPSC 121', 'CPSC 210', 'CPSC 213', 'CPSC 221', 'CPSC 310',
  ],
};

export default function AccountForm() {
//   const [open, setOpen] = React.useState(false);
  const [profile, setProfile] = React.useState(initialState);
  const [editName, toggleEdit] = React.useState(false);
  const [editEmail, toggleEmail] = React.useState(false);
  const [editMajor, toggleMajor] = React.useState(false);
  //   const [inputs, setInputs] = React.useState({});
  const [profileName, setProfileName] = React.useState(initialState.name);
  const [profileEmail, setProfileEmail] = React.useState(initialState.email);
  const [profileMajor, setProfileMajor] = React.useState(initialState.Major);

  useEffect(() => {
    axios
      .get('http://localhost:9000/users')
      .then(({ data }) => {
        setProfile({
          name: data[0].name,
          email: data[0].email,
          Major: data[0].major,
          courses: data[0].courses,
        });
        console.log(data);
      });
  }, []);

  const handleEditName = () => {
    toggleEdit(!editName);
  };

  const handleEditEmail = () => {
    toggleEmail(!editEmail);
  };
  const handleEditMajor = () => {
    toggleMajor(!editMajor);
  };

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleNameChange = (e: any) => setProfileName(e.target.value);

  const handleEmailChange = (e: any) => setProfileEmail(e.target.value);

  const handleMajorChange = (e: any) => setProfileMajor(e.target.value);

  const submitNameChange = () => {
    const newProfile = {
      name: profileName,
      email: profile.email,
      Major: profile.Major,
      courses: profile.courses,
    };
    setProfile(newProfile);
    axios.post('http://localhost:9000/users/add')
    toggleEdit(!editName);
  };

  const submitEmailChange = () => {
    const newProfile = {
      name: profile.name,
      email: profileEmail,
      Major: profile.Major,
      courses: profile.courses,
    };
    setProfile(newProfile);
    toggleEmail(!editEmail);
  };
  const submitMajorChange = () => {
    const newProfile = {
      name: profile.name,
      email: profile.email,
      Major: profileMajor,
      courses: profile.courses,
    };
    setProfile(newProfile);
    toggleMajor(!editMajor);
  };

  // eslint-disable-next-line react/no-array-index-key
  const mappedCourses = profile.courses.map((course, i: any) => <ListItem button key={i}>{course}</ListItem>);

  return (
    <div>
      <List>
        {/* Name Field */}
        {editName && (
          <ListItem>
            <form>
              <TextField label="Name" onChange={handleNameChange} />
              <Button onClick={submitNameChange} onSubmit={handleSubmit}>Submit</Button>
            </form>
          </ListItem>
        )}
        {!editName && (
          <ListItem>
            <Typography display="inline" variant="subtitle1">
              Name:
              {profileName}
            </Typography>
            <Button onClick={handleEditName} startIcon={<EditIcon />}> </Button>
          </ListItem>
        )}
        {/* Email Field */}
        {editEmail && (
          <ListItem>
            <form>
              <TextField label="Email" onChange={handleEmailChange} />
              <Button onClick={submitEmailChange} onSubmit={handleSubmit}>Submit</Button>
            </form>
          </ListItem>
        )}
        {!editEmail && (
          <ListItem>
            <Typography variant="subtitle1">
              Email:
              {profile.email}
            </Typography>
            <Button onClick={handleEditEmail} startIcon={<EditIcon />}>  </Button>
          </ListItem>
        )}
        {/* Major Field */}
        {editMajor && (
          <ListItem>
            <form>
              <TextField label="Major" onChange={handleMajorChange} />
              <Button onClick={submitMajorChange} onSubmit={handleSubmit}>Submit</Button>
            </form>
          </ListItem>
        )}
        {!editMajor && (
          <ListItem>
            <Typography variant="subtitle1">
              Major:
              {profile.Major}
            </Typography>
            <Button onClick={handleEditMajor} startIcon={<EditIcon />}>  </Button>
          </ListItem>
        )}
        <ListItem>
          <Typography variant="subtitle1">Courses:</Typography>
          <List>{mappedCourses}</List>
        </ListItem>
      </List>
    </div>
  );
}
