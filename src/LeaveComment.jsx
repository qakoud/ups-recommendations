import React from 'react';

export default class LeaveComment extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    comment: '',
	    active: false
	  }
	}

	handleChange = (e) => {
		this.setState({
			comment: e.target.value
		});

		e.target.value === '' ? this.setState({ active: false }) : this.setState({ active: true });
	}

	handleClick = (e) => {
		e.preventDefault();
		if ( this.state.comment != '' ) {
      // Post comment to <Comments /> component
			this.props.postComment(this.state.comment);
      // Empty the state to update the input field
      this.setState({
        comment: '',
        active: false
      })
		}
	}

	render() {
	return (
		<div className='leave-comment'>
			<form className='form form--leave-comment'>
				<input
					className='input input--comment'
					placeholder='Leave comment...'
          value={this.state.comment}
					onChange={this.handleChange} />
				<span className={this.state.active ? 'post-hint active' : 'post-hint'}>↵</span>
				<button className='submit submit--comment' onClick={this.handleClick}>Post comment</button>
			</form>
		</div>
	);
	}
}
