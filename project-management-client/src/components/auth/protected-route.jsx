import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute  = ({component: Component, user, getUser, ...rest}) => {
  console.log({component: Component, user, getUser, ...rest})
    return (
      <Route
        {...rest}
        render={ props  => {
            if(user){
              return <Component {...props} loggedInUser={user} getUser={getUser}/>
            } else {
              return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}
export default ProtectedRoute;