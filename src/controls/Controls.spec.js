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
    });

    it('should display "Open Gate" and "Unlock Gate" when closed and locked are true', () => {
        const closed = true;
        const locked = true;
        const {queryByText} = render(<Controls 
                                    locked={locked}
                                    closed={closed}
                                    />)
        expect(queryByText('Open Gate')).toBeTruthy();
        expect(queryByText('Unlock Gate')).toBeTruthy();
        
    })

    it('should display "Close Gate" and "Lock Gate" when closed and locked are false', () => {
        const closed = false;
        const locked = false;
        const {queryByText} = render(<Controls 
                                    locked={locked}
                                    closed={closed}
                                    />)
        expect(queryByText('Close Gate')).toBeTruthy();
        expect(queryByText('Lock Gate')).toBeTruthy();
        
    })

    it('locked button should be disabled when close is false', () => {
        const closed = false;
        const locked = false;
        const lockedMock = jest.fn();

        const {getByText} = render(<Controls
                                    locked={locked}
                                    closed={closed} 
                                    toggleLocked={lockedMock} 
                                    />)
        fireEvent.click(getByText('Lock Gate'));
        
        expect(lockedMock).not.toHaveBeenCalled();
    })

    it('Open Gate button should be disabled when locked is true', () => {
        const closed = true;
        const locked = true;
        const closedMock = jest.fn();

        const {getByText} = render(<Controls
                                    locked={locked}
                                    closed={closed} 
                                    toggleClosed={closedMock} 
                                    />)
        fireEvent.click(getByText('Open Gate'));
        
        expect(closedMock).not.toHaveBeenCalled();
    })
})