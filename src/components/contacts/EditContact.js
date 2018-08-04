import React from 'react';
import axios from 'axios';

import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';

class EditContact extends React.Component {

	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
	  
	  const contact = res.data;

	  this.setState({
	  	name: contact.name,
			email: contact.email,
			phone: contact.phone
	  })
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

		const updContact = {
			name,
			email,
			phone
		}

		const { id } = this.props.match.params;

		const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact)
			
		dispatch({
			type: 'UPDATE_CONTACT',
			payload: res.data
		})

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
							<div>Edit Contact</div>
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
									<input type="submit" value="Update Contact"/>
								</form>
							</div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default EditContact;

