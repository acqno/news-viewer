import React from 'react';
import '../css/story.css';

import { Select } from 'antd';


const Option  = Select.Option;

class Selector extends React.Component {
    constructor() {
        super();
        const Option = Select.Option;
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

	render() {
		return (
			<div>
				<Select
					defaultValue=""
					style={{ width: 200 }}
					onChange={this.handleChange}
				>
					<Option value="New York Times">New York Times</Option>
					<Option value="Globe and Mail">The Globe and Mail</Option>
					<Option value="Bleacher Report">Bleacher Report</Option>
					<Option value="National Geographic">National Geographic</Option>
                    <Option value="Polygon">Polygon</Option>
				</Select>
			</div>
		);
	}
}

export default Selector;
