import * as React from "react";
import ButtonComponent from "./ButtonComponent";
import ButtonDataArray from "../data/ButtonDataArray";

const ButtonSection = () => {
	return (
		<section className='button-section'>
			{ButtonDataArray.map((button) => {
				// Use map to iterate through all of the objects in the above array. Map returns objects from the array.
				//console.log(button); // Logs the object to the console.
				return <ButtonComponent key={button.id} link={button} />; // Call the CarComponent component passing the new object. Pass the Key prop which is a unique value.
			})}
		</section>
	);
};

export default ButtonSection;
