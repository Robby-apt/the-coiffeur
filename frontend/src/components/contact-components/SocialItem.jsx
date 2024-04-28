import React from 'react'

function SocialItem(props) {
  return (
		<a href={props.socialLink} target="_blank">
			<i className={props.socialIcon} />
		</a>
  );
}

export default SocialItem