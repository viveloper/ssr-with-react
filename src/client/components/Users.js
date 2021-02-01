import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchUsers } from '../modules/users';

class Users extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h1>Hear's a big list of users:</h1>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

export function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
