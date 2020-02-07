import React from "react";
import { UsersContext } from "../providers/UsersProvider";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const withUser = Component => {
  const WrappedComponent = props => {
    return (
      <UsersContext.Consumer>
        {user => <Component user={user} {...props} />}
      </UsersContext.Consumer>
    );
  }
  WrappedComponent.displayName = `WithUser(${getDisplayName(WrappedComponent)})`

  return WrappedComponent;
};

export default withUser;