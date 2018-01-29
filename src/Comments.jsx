import React from 'react';
import Comment from 'Comment';
import LeaveComment from 'LeaveComment';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }
    

  postComment = (newComment) => {
    this.setState({
      comments: [...this.state.comments, newComment]
    });
  }

  render() {
    const comments = this.state.comments.map((comment, index) => {
      return (
          <Comment
            comment={comment}
            key={index}
          />
        );
    });

    return (
      <div className='comments'>
        <h3 className='place__heading'>Comments</h3>
        <ul className='comments-list list'>
          {comments}
        </ul>
        <LeaveComment postComment={this.postComment} />
      </div>
    );
  }
}
