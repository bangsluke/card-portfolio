import ProfilePicture from "../../src/images/OnlineProfilePicture.png";
import ButtonSection from "./ButtonSection.js";
import DetailsSection from "./DetailsSection.js";
import FooterComponent from "./FooterComponent";

// Define a card component that holds all content.
export default function CardComponent() {
	return (
		<a href='https://bangsluke-portfolio.netlify.app/' rel='noreferrer' className='card'>
			<img src={ProfilePicture} className='profile-picture' alt='Profile' />
			<h1>Luke Bangs</h1>
			<h2>Automotive web developer</h2>
			<div>
				<ButtonSection />
			</div>
			<DetailsSection />
			<FooterComponent />
		</a>
	);
}
