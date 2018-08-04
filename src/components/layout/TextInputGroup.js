import React from 'react';
import PropTypes from 'prop-types';


const TextInputGroup = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	error
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px'}}>
			<label htmlFor="{name}">{label}</label>
			<input 
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <div style={{ color: 'red'}}>{error}</div>}
		</div>
  )
}

TextInputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
}

TextInputGroup.defaultProps = {
	type: 'text'
}

export default TextInputGroup;