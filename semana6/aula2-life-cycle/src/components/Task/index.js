import React from 'react'

class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			complete: false
		}
	}

	alternate = () => {
		this.setState({
			complete: !this.state.complete
		})
	}

	render() {
		return (
			<li onClick={this.alternate}>
				{this.props.exidindo && this.props.content}
				{this.state.complete && ' (feita)'}
			</li>
		)
	}
}

export default Task