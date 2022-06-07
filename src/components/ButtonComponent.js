import * as React from "react";

const ButtonComponent = (props) => {
	const { icon, buttonText, url } = props.link;
	return (
		<a href={url} target='_blank' rel='noreferrer' className='button-component'>
			<img src={icon} alt={buttonText} className='button-icon'></img>
			<h3 className='button-text'>{buttonText}</h3>
		</a>
	);
};

export default ButtonComponent;
