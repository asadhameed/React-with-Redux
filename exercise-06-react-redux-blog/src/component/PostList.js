import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    //console.log(this.props.fetchPosts());
  }
  render() {
    console.log(this.props.posts);
    return <div>Post List</div>;
  }
}
const mapStateToProp = (state) => {
  //console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProp, { fetchPosts })(PostList);
