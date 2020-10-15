import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { connect } from "react-redux";
import { getPost } from "../../actions/post";

const Post = ({ getPost, match, post: { loading, post } }) => {
  useEffect(() => {
    getPost(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <React.Fragment>
      <Link to="/posts" className="btn">
        Back to posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
