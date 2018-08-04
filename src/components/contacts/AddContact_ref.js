import React from 'react';

class AddContact extends React.Component {
	constructor(props) {
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}
	

	static defaultProps = {
		name: 'Fred Dann',
		email: 'fred@email.com',
		phone: '777-77-7777'
	}

	onSubmit = e => {
		e.preventDefault();
		
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value,
		}

		console.log(contact);
	}

	render() {
		const { name, email, phone } = this.props;
		return (
			<div>
				<div>Add Contact</div>
				<div>
					<form onSubmit={this.onSubmit}>
						<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px'}}>
							<label htmlFor="name">Name</label>
							<input 
								type="text"
								name="name"
								placeholder="Enter Name.."
								defaultValue={name}
								ref={this.nameInput}
							/>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px'}}>
							<label htmlFor="email">Email</label>
							<input 
								type="email"
								name="email"
								placeholder="Enter Email.."
								defaultValue={email}
								ref={this.emailInput}
							/>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px'}}>
							<label htmlFor="phone">Phone</label>
							<input 
								type="text"
								name="phone"
								placeholder="Enter Phone.."
								defaultValue={phone}
								ref={this.phoneInput}
							/>
						</div>
						<input type="submit" value="Add Contact"/>
					</form>
				</div>
			</div>
		);
	}
}

export default AddContact;