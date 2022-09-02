import React from 'react';

function ServiceTableItem(props) {
	let { serviceName, servicePrice } = props.service;
	return (
		<tr>
			<td>{serviceName}</td>
			<td>{servicePrice}</td>
		</tr>
	);
}

export default ServiceTableItem;
