import React from 'react';
import SocialItem from './SocialItem';
import socialMedia from '../../socialmedia';

function SocialMediaSection() {
	return (
		<div className="socialMedia topOverlay">
			<div className="socialInfo">
				<p className="socialIntro">
					Get in touch with us today.
					<br />
					We love hearing from you.
				</p>
				<div className="socialLinks">
					{socialMedia.map((item, index) => {
						return (
							<SocialItem
								key={index}
								socialLink={item.socialLink}
								socialIcon={item.socialIcon}
							/>
						);
					})}
				</div>
				<p className="phoneText">Phone: +254 7XX XXX XXX</p>
				<p className="emailText">Email: thecoiffeur@gmail.com</p>
				<p className="conclusion">
					Because it's more than just a haircut,{` `}
					<strong>it's about you</strong>
				</p>
			</div>
		</div>
	);
}

export default SocialMediaSection;
