import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('<Dashboard /> renders without crashing', () => {
        render(<Dashboard />)
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />); // generates a DOM tree
    
        // snapshots are a JSON representation of the DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
    });
})

// According to snapshot the Display and controls components 
// all render to Dashboard.