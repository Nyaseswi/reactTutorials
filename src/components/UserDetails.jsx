import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllUsers, getSingleUser} from '../redux/actions/userActions';

const UserDetails = ({ noOfUser, getAllUsers, user, getSingleUser }) => {
  return (
    <div>
      <h1>Users: {noOfUser.length} and User name is {user.name}</h1>
      <button>Add user</button>
      <button>Edit user</button>
      <button onClick={() => getAllUsers()}>Get All users</button>
      <button onClick={() => getSingleUser(2)}>Get Single user</button>
      <button>Delete user</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  noOfUser: state.user.noOfUser,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllUsers,
    getSingleUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
