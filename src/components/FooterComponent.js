import * as React from "react";
import twitterIcon from "../images/twitter.png";
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";
import githubIcon from "../images/github.png";

function FooterComponent() {
	return (
		<div className='footer'>
			<a href='https://twitter.com/bangsluke'>
				<img src={twitterIcon} alt='Twitter Logo' className='social-icon'></img>
			</a>
			<a href='https://www.facebook.com/bangsluke'>
				<img src={facebookIcon} alt='Facebook Logo' className='social-icon'></img>
			</a>
			<a href='https://www.instagram.com/bangsluke/'>
				<img src={instagramIcon} alt='Instagram Logo' className='social-icon'></img>
			</a>
			<a href='https://github.com/bangsluke'>
				<img src={githubIcon} alt='GitHub Logo' className='social-icon'></img>
			</a>
		</div>
	);
}

export default FooterComponent;
