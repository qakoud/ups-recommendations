import React, { Component } from 'react';
import AddThingToGet from 'AddThingToGet';
import RemoveThingToGet from 'RemoveThingToGet';

export default class ThingsToGet extends Component {
  constructor(props) {
    super(props);

    this.database         = this.props.database;
    this.thingsToGetRef   = this.database.ref('thingsToGet');
    this.thingToGetRef    = this.thingsToGetRef.child(this.props.placeId);
  }

  // Add the new text to the Things To Get list
  postThingToGet = (newThingToGet) => {
    this.thingToGetRef.push().set({ thingToGet: newThingToGet });
  }

  render() {
    const thingsToGet = this.props.thingsToGet.map((thingToGet, index) => {
      return (
          <li className='thing-to-get list-item' key={index}>
            {thingToGet}
            <RemoveThingToGet database={this.props.database} thingToRemove={this.thingToGetRef} />
          </li>
        );
    });

    return (
      <div className='things-to-get'>
        <h3 className='place__heading'><span>{thingsToGet.length}</span> Things to get</h3>
        <ul className='things-list list'>
          {thingsToGet}
        </ul>
        <AddThingToGet postThingToGet={this.postThingToGet} />
      </div>
    );
  }
}
