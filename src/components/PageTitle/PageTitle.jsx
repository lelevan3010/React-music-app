import React from 'react';
import './PageTitle.css';

function PageTitle(props) {
	return (
		<div className="PageTitle">
            {props.track}
		</div>
	);
}

export default PageTitle;
