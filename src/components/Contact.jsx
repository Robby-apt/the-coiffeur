import React from 'react'
import Footer from './Footer'
import ContactFormAndMedia from './contact-components/ContactFormAndMedia';

function Contact() {
  return (
		<div id="contact" className="section">
			<h1 className="sectionTitle">Contact</h1>
			<h3 className="sectionSubTitle">Feel free to contact us</h3>
            <ContactFormAndMedia/>
			<Footer />
		</div>
  );
}

export default Contact