import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comments from 'Comments';
import ThingsToGet from 'ThingsToGet';

export default class Place extends Component {
  constructor(props) {
    super(props);
    // The State
    // -------------------------------------------------------
    this.state = {
      comments: [],
      thingsToGet: []
    };
    this.props.passPlaceId(this.props.placeId);
    // -------------------------------------------------------
    this.fireDB           = this.props.fireDB;
    this.commentsRef      = this.props.database.ref('comments');
    this.commentRef       = this.commentsRef.child(this.props.placeId);
    this.thingsToGetRef   = this.props.database.ref('thingsToGet');
    this.thingToGetRef    = this.thingsToGetRef.child(this.props.placeId);

    // Get Firebase Comments
    // -------------------------------------------------------
    this.commentRef.on('child_added', snap => {
      this.setState({
        comments: [...this.state.comments, snap.val().comment]
      });
    });

    // Get Firebase Things To Get
    // -------------------------------------------------------
    this.thingToGetRef.on('child_added', snap => {
      this.setState({
        thingsToGet: [...this.state.thingsToGet, snap.val().thingToGet]
      });
    });
  }

  // -------------------------------------------------------
  componentDidMount() {
    let el = ReactDOM.findDOMNode(this.refs.place);
    el.scrollIntoView({ block: 'end', behavior: 'smooth' });

    // CSS class to visually indicate this is the newly created place
    el.className += ' new-place';
    setTimeout( function() {
      el.classList.remove('new-place');
    }, 3000 );
  }
  // -------------------------------------------------------
  render() {
    return (
      <div className='place' ref='place'>
        <div className='place__header'>
          <h2 className='place-title'>{this.props.name}</h2>
          <p className='place__heading place__distance'>{this.props.distance}</p>
        </div>
        <div className='place__body'>
          <ThingsToGet
            thingsToGet={this.state.thingsToGet}
            database=   {this.props.database}
            placeId=    {this.props.placeId}
          />
          <Comments
            fireDB=     {this.props.fireDB}
            database=   {this.props.database}
            placeId=    {this.props.placeId}
            comments=   {this.state.comments}
          />
        </div>
      </div>
    );
  }
}
