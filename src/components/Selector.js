import React from 'react';
import '../css/story.css';

import { Select } from 'antd';


const Option  = Select.Option;

class Selector extends React.Component {

    state = { news: null };

    handleChange = (value) => {
        this.setState({ news: value });
        this.props.onSourceSelected(value);
    }

	render() {
		return (
			<div>
				<Select
                    className="news__selector"
					defaultValue=""
					style={{ width: 200 }}
					onChange={this.handleChange}
				>
					<Option value="bbc-news">BBC News</Option>
					<Option value="the-globe-and-mail">The Globe and Mail</Option>
					<Option value="bleacher-report">Bleacher Report</Option>
					<Option value="national-geographic">National Geographic</Option>
                    <Option value="polygon">Polygon</Option>
				</Select>
			</div>
		);
	}
}

export default Selector;
