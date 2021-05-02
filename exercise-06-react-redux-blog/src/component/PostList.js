import React from "react";
import { connect } from "react-redux";
//import { fetchPosts } from "../actions";
import { fetchPostsAndUsers } from "../actions";
import UserHolder from "./UserHolder";
class PostList extends React.Component {
  componentDidMount() {
    //  this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="description">
              <h1> {post.title}</h1>
              <p>{post.body}</p>
              <UserHolder userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProp = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProp, { fetchPostsAndUsers })(PostList);
