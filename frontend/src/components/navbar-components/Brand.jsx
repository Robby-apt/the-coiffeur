import React from 'react';

function Brand(props) {
	return (
		<div className="brand" onClick={() => props.disableNav()}>
			<a href="/#home">
				<img
					src="/images/logo.svg"
					alt="Brand Logo"
					className="brandLogo"
				/>
			</a>
			<a href="/#home">
				<p className="brandName">
					The
					<br />
					Coiffeur
				</p>
			</a>
		</div>
	);
}

export default Brand;
