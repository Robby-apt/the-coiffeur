import React from 'react';
import ServiceTableItem from './ServiceTableItem';
import serviceAndPrice from '../../services';

function ServiceList() {
	return (
		<div className="serviceOverlay">
			<table>
				<thead>
					<tr>
						<th>Service</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{serviceAndPrice.map((item, index) => {
						return <ServiceTableItem key={index} service={item} />;
					})}
				</tbody>
			</table>
		</div>
	);
}

export default ServiceList;
