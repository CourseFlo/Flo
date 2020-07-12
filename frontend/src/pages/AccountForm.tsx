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

// const emails = ['username@gmail.com', 'user02@gmail.com'];

const initialState = {
  name: 'Sam Ip',
  email: 'samip@email.com',
  major: 'Computer Science',
  courses: [
    'CPSC 110', 'CPSC 121', 'CPSC 210', 'CPSC 213', 'CPSC 221', 'CPSC 310',
  ],
  id: '5f080b5a1ad963c82c07f475',
};

function AccountForm() {
//   const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(initialState);
  const [editName, toggleEdit] = useState(false);
  const [editEmail, toggleEmail] = useState(false);
  const [editMajor, toggleMajor] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:9000/users')
      .then(({ data }) => {
        setProfile({
          name: data[0].name,
          email: data[0].email,
          major: data[0].major,
          courses: data[0].courses,
          id: data[0].id,
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

  const handleNameChange = (e: any) => setProfile({
    name: e.target.value,
    email: profile.email,
    major: profile.major,
    courses: profile.courses,
    id: profile.id,
  });

  const handleEmailChange = (e: any) => setProfile({
    name: profile.name,
    email: e.target.value,
    major: profile.major,
    courses: profile.courses,
    id: profile.id,
  });

  const handleMajorChange = (e: any) => setProfile({
    name: profile.name,
    email: profile.email,
    major: e.target.value,
    courses: profile.courses,
    id: profile.id,
  });

  const submitNameChange = () => {
    const newProfile = {
      name: profile.name,
      email: profile.email,
      major: profile.major,
      courses: profile.courses,
      id: profile.id,
    };
    setProfile(newProfile);
    axios.post('http://localhost:9000/users/add', newProfile);
    toggleEdit(!editName);
  };

  const submitEmailChange = () => {
    const newProfile = {
      name: profile.name,
      email: profile.email,
      major: profile.major,
      courses: profile.courses,
      id: profile.id,
    };
    setProfile(newProfile);
    axios.post('http://localhost:9000/users/add', newProfile);
    toggleEmail(!editEmail);
  };
  const submitMajorChange = () => {
    const newProfile = {
      name: profile.name,
      email: profile.email,
      major: profile.major,
      courses: profile.courses,
      id: profile.id,
    };
    setProfile(newProfile);
    axios.post('http://localhost:9000/users/add', newProfile);
    toggleMajor(!editMajor);
  };

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
              {profile.name}
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
              {profile.major}
            </Typography>
            <Button onClick={handleEditMajor} startIcon={<EditIcon />}>  </Button>
          </ListItem>
        )}
        <ListItem>
          <Typography variant="subtitle1">Courses:</Typography>
          <List>
            {profile.courses.map((course) => (
              <ListItem button key={course}>{course}</ListItem>
            ))}
          </List>
        </ListItem>
      </List>
    </div>
  );
}

export default connect(null, null)(AccountForm);
