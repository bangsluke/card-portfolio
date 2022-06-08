import ProfilePicture from "../../src/images/OnlineProfilePicture.png";
import DetailsSection from "./DetailsSection.js";
import FooterComponent from "./FooterComponent";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Define a card component that holds all content.
export default function CardComponent() {
	return (
		<div className='card'>
			<a href='https://bangsluke-portfolio.netlify.app/' rel='noreferrer' className='portfolio-link'>
				<img src={ProfilePicture} className='profile-picture' alt='Profile' />
				<h1>Luke Bangs</h1>
				<h2>Automotive web developer</h2>
				<div className='separator'></div>
			</a>
			<div className='button-section'>
				<Button variant='outlined' startIcon={<EmailIcon />} className='button-component'>
					Email
				</Button>
				<Button variant='contained' endIcon={<LinkedInIcon />} className='button-component'>
					Connect
				</Button>
			</div>
			<DetailsSection />
			<FooterComponent />
		</div>
	);
}
