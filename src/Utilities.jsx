import React from 'react';

export default class Utilities extends React.Component {
  render() {
    return (
      <div>
        <div className='places__utils flex-baseline'>
          <div className='places__views flex-baseline'>
            <p className='view-type padding padding--lg font-style-1 active-view'>☰ List</p>
            <p className='view-type padding padding--lg font-style-1'>☉ Map</p>
          </div>
          <div className='places__sort'>
            <div className='sort-by-label'>Sort by <span className="sort-by asc"> Distance</span></div>
          </div>
        </div>
      </div>
    );
  }
}
