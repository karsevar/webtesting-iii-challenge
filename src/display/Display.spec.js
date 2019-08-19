import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import {render} from '@testing-library/react';

describe('<Display /> Components tests', () => {
    it('renders without crashing', () => {
        render(<Display />)
    })

    it('should render closed false and locked false by default', () => {
        const {queryByText} = render(<Display />);
        expect(queryByText(/open/i)).toBeTruthy();
        expect(queryByText(/unlocked/i)).toBeTruthy();
    })

    it('should display closed if the closed prop is true', () => {
        const {queryByText} = render(<Display closed={true} locked={true} />)
        expect(queryByText(/closed/i))
    })

    it('should display lock if the lock prop is true', () => {
        const {getByTest, queryByText} = render(<Display closed={true} locked={true} />) 
        expect(queryByText(/locked/i)) 
    })

    it('should display open if the closed prop is false', () => {
        const {queryByText} = render(<Display closed={false} locked={true} />)
        expect(queryByText(/open/i))
    })

    it('should display unlocked if the locked prop is false', () => {
        const {queryByText} = render(<Display closed={false} locked={false} />) 
        expect(queryByText(/unlocked/i))
    })

    it('should use green-led class if locked or closed is false', () => {
        const wrapper = render(<Display closed={false} locked={false} />)
        // const buttonList = wrapper.getAllByTestId('led green-led');
        // expect(buttonList.length).toBe(2);
        const openDiv = wrapper.getByText(/open/i);
        expect(openDiv.className).toBe('led green-led')

        const lockedDiv = wrapper.getByText(/unlocked/i);
        expect(lockedDiv.className).toBe('led green-led')
    })

    it('should use red-led class if locked or closed is true', () => {
        const wrapper = render(<Display closed={true} locked={true} />)
        // const buttonList = wrapper.getAllByTestId('led red-led');
        // expect(buttonList.length).toBe(2);
        const openDiv = wrapper.getByText(/closed/i);
        expect(openDiv.className).toBe('led red-led');

        const lockedDiv = wrapper.getByText(/locked/i);
        expect(lockedDiv.className).toBe('led red-led');
    })
})