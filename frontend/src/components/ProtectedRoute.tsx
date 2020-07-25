import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

function ProtectedRoute(props: any) {
  const { auth, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => (
        auth.user
          ? <Component />
          : <Redirect exact to="/login" />
      )}
    />
  );
}

const mapStateToProps = (state: any) => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps)(ProtectedRoute);
