import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllUsers} from '../redux/actions/userActions';

const UserDetails = ({ noOfUser, getAllUsers }) => {
  return (
    <div>
      <h1>Users: {noOfUser.length}</h1>
      <button>Add user</button>
      <button>Edit user</button>
      <button onClick={() => getAllUsers()}>Get All users</button>
      <button>Delete user</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  noOfUser: state.user.noOfUser
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllUsers
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
