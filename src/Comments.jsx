import React, { Component } from 'react';
import Comment from 'Comment';
import LeaveComment from 'LeaveComment';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    // -------------------------------------------------------
    this.database           = this.props.database;
    this.commentsRef        = this.database.ref('comments');
    this.commentRef         = this.commentsRef.child(this.props.placeId);
    // -------------------------------------------------------
  }

  postComment = (newComment) => {
    this.commentRef.push().set({ comment: newComment });
  }

  render() {
    const commentsList = this.props.comments.map((comment, index) => {
      return (
          <Comment
            comment={comment}
            key={index}
          />
        )
    });

    return (
      <div className='comments'>
        <h3 className='place__heading'><span>{commentsList.length}</span> Comments</h3>
        <ul className='comments-list list'>
          { commentsList }
        </ul>
        <LeaveComment postComment={this.postComment} />
      </div>
    );
  }
}
