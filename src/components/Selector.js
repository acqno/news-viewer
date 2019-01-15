import React from 'react';
import '../css/story.css';

import { Select } from 'antd';

// This is the selector component
// It renders the select input - prompting user to choose which news source they want to use

class Selector extends React.Component {

    // states
    // news - currently selected news source
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

const Option  = Select.Option;

export default Selector;
