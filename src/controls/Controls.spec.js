import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    })

    it('should invoke a function when close or open gate is clicked', () => {
        const mockClosed = jest.fn();
        const locked = false;
        const closed = false;

        const {getByText, queryByText} = render(<Controls 
                                                toggleClosed={mockClosed}
                                                locked={locked}
                                                closed={closed}
                                                />)
        fireEvent.click(getByText('Close Gate'));
        
        expect(mockClosed).toHaveBeenCalled();
    });

    it('should invoke a function when unlock or lock gate is clicked', () => {
        const mockLocked = jest.fn();
        const locked = true;
        const closed = true;

        const {getByText, queryByText} = render(<Controls 
                                                toggleLocked={mockLocked}
                                                locked={locked}
                                                closed={closed}
                                                />)
        fireEvent.click(getByText('Unlock Gate'));
        
        expect(mockLocked).toHaveBeenCalled();
    })
})