import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import {render, fireEvent} from '@testing-library/react';

describe('<Display /> Components tests', () => {
    it('renders without crashing', () => {
        render(<Display />)
    })
})