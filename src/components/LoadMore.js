import React from 'react';

class LoadMore extends React.Component {
	render() {
		return(
			<button onClick={this.props.searchMore}>Load More</button>
		);
	}
}


export default LoadMore; 

