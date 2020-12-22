import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHolder extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    return <div>{user.name}</div>;
  }
}
// This can take ownProps = this.props of Component
// we can take parameter of this.props to the following function
const mapStateToProp = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProp, { fetchUser })(UserHolder);
