import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function FooterComponent() {
	return (
		<div className='footer'>
			<a href='https://twitter.com/bangsluke'>
				<TwitterIcon className='social-icon' />
			</a>
			<a href='https://www.facebook.com/bangsluke'>
				<FacebookIcon className='social-icon' />
			</a>
			<a href='https://www.instagram.com/bangsluke/'>
				<InstagramIcon className='social-icon' />
			</a>
			<a href='https://github.com/bangsluke'>
				<GitHubIcon className='social-icon' />
			</a>
		</div>
	);
}

export default FooterComponent;
