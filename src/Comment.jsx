import React from 'react';

export default class Comment extends React.Component {
  render() {
    const time = new Date(Date.now()).toDateString();

    return (
      <li className='comment list-item'>
        <div className='meta'>
          <div className='author'>Author</div>
          <div className='time'>{time}</div>
        </div>
        <div className='text'>
          <p>{this.props.comment}</p>
        </div>
      </li>
    );
  }
}
