import React from 'react';

import { Consumer } from '../../context';

import Contact from './Contact';


class Contacts extends React.Component {

	render() {
		return (
			<Consumer>
				{value => {
					const { contacts } = value;
					return (
						<React.Fragment>
							<h1>Contacts List</h1>
							{contacts.map(contact => (
								<Contact 
									key={contact.id} 
									{...contact}
								/>
							))}
						</React.Fragment>
					)
				}}
			</Consumer>
		)
	}
}

export default Contacts;
