import React from 'react';
import ContactForm from './ContactForm';
import SocialMediaSection from './SocialMediaSection';

function ContactFormAndMedia() {
	return (
		<div className="contactFormAndMedia">
			<div className="topRow row">
				<div className="imgSection" />
				<ContactForm />
			</div>
			<div className="bottomRow row">
				<SocialMediaSection />
				<div className="imgSection" />
			</div>
		</div>
	);
}

export default ContactFormAndMedia;
