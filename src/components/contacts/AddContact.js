import React from 'react';
// import uuid from 'uuid';
import axios from 'axios';

import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';

class AddContact extends React.Component {

	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}

	onSubmit = async (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		if (name === '') {
			this.setState({errors: {name: 'Name is required'} })
			return;
		}
		if (email === '') {
			this.setState({errors: {email: 'Email is required'} })
			return;
		}
		if (phone === '') {
			this.setState({errors: {phone: 'Phone is required'} })
			return;
		}

		const newContact = {
			name,
			email,
			phone
		}

		const res = await axios.post(`https://jsonplaceholder.typicode.com/users/`, newContact)
			
		dispatch({
			type: 'ADD_CONTACT',
			payload: res.data
		})
		

		// axios.post(`https://jsonplaceholder.typicode.com/users/`, newContact)
		// 	.then(res => dispatch({
		// 		type: 'ADD_CONTACT',
		// 		payload: res.data
		// 	})
		// )

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		})

		this.props.history.push('/');
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value })

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div>
							<div>Add Contact</div>
							<div>
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup 
										label="Name"
										type="text"
										name="name"
										placeholder="Enter Name.."
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup 
										label="Email"
										type="email"
										name="email"
										placeholder="Enter Email.."
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup 
										label="Phone"
										type="text"
										name="phone"
										placeholder="Enter Phone.."
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input type="submit" value="Add Contact"/>
								</form>
							</div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default AddContact;

