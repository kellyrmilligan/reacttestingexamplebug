import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
		<App />,
		div
	);

	const wrapper = mount(
		<App />
  )

	console.log(wrapper.html())
});
