import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import {render, fireEvent} from '@testing-library/react';

describe('<Display /> Components tests', () => {
    it('renders without crashing', () => {
        render(<Display />)
    })

    it('should display closed if the closed prop is true', async () => {
        const {getByText, findByText} = render(<Display closed={true} locked={true} />)
        expect(await findByText(/closed/i))
    })

    it('should display lock if the lock prop is true', async () => {
        const {getByTest, findByText} = render(<Display closed={true} locked={true} />) 
        expect(await findByText(/locked/i)) 
    })

    it('should display open if the closed prop is false', async () => {
        const {getByText, findByText} = render(<Display closed={false} locked={true} />)
        expect(await findByText(/open/i))
    })

    it('should display unlocked if the locked prop is false', async () => {
        const {findByText} = render(<Display closed={false} locked={false} />) 
        expect(await findByText(/unlocked/i))
    })

    it('should use red-led class if locked or closed is true', () => {
        const wrapper = render(<Display closed={false} locked={false} />)
        const buttonList = wrapper.getAllByTestId('led green-led');
        expect(buttonList.length).toBe(2);
    })
})