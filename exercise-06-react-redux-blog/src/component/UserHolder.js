import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHolder extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    if (!user) return null;
    return <div>{user.name}</div>;
  }
}

const mapStateToProp = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProp, { fetchUser })(UserHolder);
