import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

function ProtectedRoute(props: any) {
  const { currentUser, component: Component, ...rest } = props;
  // if (!currentUser) {
  //   return (
  //     <Route path='/login' component={Login}></Route>
  //   );
  // } else {
  //   return (
  //     <Component  />
  //   );
  // }
  return (
    <Route
      {...rest}
      render={(props) => (
        currentUser.name
          ? <Component />
          : <Redirect exact to="/login" />
      )}
    />
  );
}

const mapStateToProps = (state: any) => {
  const { currentUser } = state;
  return { currentUser };
};

export default connect(mapStateToProps)(ProtectedRoute);
