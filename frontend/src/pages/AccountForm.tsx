import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import { User } from '../type-interfaces/User';
import { updateUser } from '../redux/actions/User';
import { getVisualizedCourses } from '../redux/actions/courses';
import { loadUser } from '../redux/actions/auth';

interface Props {
  currentUser: User,
  loadUser: Function,
  updateUser: Function,
  getVisualizedCourses: Function,
}

function AccountForm(props: any) {
  const { currentUser, loadUser, updateUser, getVisualizedCourses } : Props = props;
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [major, setMajor] = useState(currentUser.major);
  const [courses, setCourses] = useState(currentUser.courses);
  const [starredCourses, setStarredCourses] = useState(currentUser.starredCourses);
  const [editingName, toggleEditingName] = useState(false);
  const [editingEmail, toggleEditingEmail] = useState(false);
  const [editingMajor, toggleEditingMajor] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const history = useHistory();
  function handleViewCourse(course: any) {
    getVisualizedCourses(course);
    history.push('/VisualCourse');
  }

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
    updateUser(changedFields);
    toggleEditingName(false);
    toggleEditingEmail(false);
    toggleEditingMajor(false);
  };

  return (
    <div>
      <List>
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
              <Tooltip title="Edit Name">
                <Button onClick={handleEditName} startIcon={<EditIcon />} />
              </Tooltip>
            </ListItem>
          )}
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
              <Tooltip title="Edit Email">
                <Button onClick={handleEditEmail} startIcon={<EditIcon />} />
              </Tooltip>
            </ListItem>
          )}
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
              <Tooltip title="Edit Major">
                <Button onClick={handleEditMajor} startIcon={<EditIcon />} />
              </Tooltip>
            </ListItem>
          )}
        <ListItem>
          <Typography variant="subtitle1">Courses:</Typography>
          <List>
            {courses.map((course) => (
              <Tooltip title="Learn More">
                <ListItem button key={course} onClick={() => handleViewCourse(course)}>{course}</ListItem>
              </Tooltip>
            ))}
          </List>
        </ListItem>
        <ListItem>
          <Typography variant="subtitle1">Starred Courses:</Typography>
          <List>
            {starredCourses.map((course) => (
              <Tooltip title="Learn More">
                <ListItem button key={course} onClick={() => handleViewCourse(course)}>{course}</ListItem>
              </Tooltip>
            ))}
          </List>
        </ListItem>
      </List>
    </div>
  );
}

const mapStateToProps = (state: any) => ({ currentUser: state.auth.user });

export default connect(mapStateToProps, { loadUser, updateUser, getVisualizedCourses })(AccountForm);
