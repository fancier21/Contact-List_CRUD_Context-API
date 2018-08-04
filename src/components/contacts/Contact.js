import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Consumer } from '../../context';

class Contact extends React.Component {

	state = {
		showContactInfo: false
	};

	onDeleteClick = async (id, dispatch) => {

		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			
			dispatch({
				type: 'DELETE_CONTACT',
				payload: id
			})	
			
		} catch(e) {

			dispatch({
				type: 'DELETE_CONTACT',
				payload: id
			})	
		}
	}


	// onDeleteClick = (id, dispatch) => {
	// 	axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
	// 		.then(res => dispatch({
	// 			type: 'DELETE_CONTACT',
	// 			payload: id
	// 		})
	// 	)
	// }


	render() {
		const { id, name, email, phone} = this.props;
		const { showContactInfo } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #eee' }}>
				    	<h4 style={{ display: 'flex' }}>
				    		{name}
				    		<i onClick={() => 
				    			this.setState({ showContactInfo: !showContactInfo })} 
				    			className="fas fa-sort-down"
				    			style={{ cursor: 'pointer', paddingLeft: '5px', marginRight: 'auto' }}
				    		/>
				    		<Link to={`/contact/edit/${id}`}>
									<i 
				    				className="fas fa-pencil-alt"
										style={{ cursor: 'pointer', color: '#000', paddingRight: '10px' }}
				    			/>
				    		</Link>
				    		<i 
				    			onClick={this.onDeleteClick.bind(this, id, dispatch)}
				    			className="fas fa-times"
									style={{ cursor: 'pointer', color: 'red' }}
				    		/>
				    	</h4>
				    	{showContactInfo && (
					    	<ul>
					    		<li style={{ border: '1px solid #eee', padding: '5px' }}>
					    			Email: {email}
					    		</li>
					    		<li style={{ border: '1px solid #eee', padding: '5px' }}>
					    			Phone: {phone}
					    		</li>
					    	</ul>
					    	)
				    	}
				    </div>
					)
				}}
			</Consumer>			
		);
	}
}


Contact.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired
}

export default Contact;
