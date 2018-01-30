import React from 'react';
import Comments from 'Comments';
import ThingsToGet from 'ThingsToGet';

export default class Place extends React.Component {

  render() {
    return (
      <div className='place'>
        <div className='place__header'>
          <h2 className='place-title'>{this.props.name}</h2>
          <p className='place__heading place__distance'>{this.props.distance}</p>
        </div>
        <div className='place__body'>
          <ThingsToGet thingsToGet={this.props.thingsToGet} />
          <Comments comments={this.props.comments} />
        </div>
      </div>
    );
  }
}
