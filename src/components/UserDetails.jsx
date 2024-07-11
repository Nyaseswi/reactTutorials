// UserDetails.js

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers, getSingleUser, addUser, editUser, deleteUserAction } from '../redux/actions/userActions';

const UserDetails = ({ noOfUser, user, getAllUsers, getSingleUser, addUser, editUser, deleteUserAction }) => {
  return (
    <div>
      <h1>Users: {noOfUser.length} and User name is {user.name}</h1>
      <button onClick={() => addUser({ name: 'New User' })}>Add user</button>
      <button onClick={() => editUser({ name: 'yaseswi' }, 1)}>Edit user</button>
      <button onClick={() => getAllUsers()}>Get All users</button>
      <button onClick={() => getSingleUser(1)}>Get Single user</button>
      <button onClick={() => deleteUserAction(1)}>Delete user</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  noOfUser: state.user.noOfUser,
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllUsers,
  getSingleUser,
  addUser,
  editUser,
  deleteUserAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
