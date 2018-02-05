import React from 'react';
import Comment from 'Comment';
import LeaveComment from 'LeaveComment';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
    };
  }

  componentDidMount() {
    const commentsRef = firebase.database().ref('places/place/comments/');
    // commentsRef.on('value', (snapshot) => {
    //   let comments = snapshot.val();
    //   console.log('comments: ' + commentsRef);
    //   let newState = [];
    //   for ( let comment in comments ) {
    //     newState.push({
    //       comment: comments[comment].comment
    //     })
    //   }
    //   this.setState({
    //     comments: newState
    //   })
    // });
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
