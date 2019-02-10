import React from 'react';
import { mount } from 'enzyme';

import Overview from './Overview';

test('Overview', () => {
    const output = mount(<Overview />);

    expect(output).toMatchSnapshot();
});
