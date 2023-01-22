import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';
//import { add } from 'cypress/types/lodash';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

//add 1 to 4 and get 5
  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
  
    const addButton = container.getByTestId("operator_add");
    fireEvent.click(addButton);

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);

    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);

    const runningTotal = container.getByTestId('running-total');
    
    expect (runningTotal.textContent).toEqual('5');
  })

//subtract 4 from 7 and get 3
  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtractButton = container.getByTestId("operator-subtract");
    fireEvent.click(subtractButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    const runningTotal = container.getByTestId('running-total');
    expect (runningTotal.textContent).toEqual('3');
  })

//multiply 3 by 5 and get 15
  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);

    const multiplyButton = container.getByTestId("operator-multiply");
    fireEvent.click(multiplyButton);

    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);

    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);

    const runningTotal = container.getByTestId('running-total');
    
    expect (runningTotal.textContent).toEqual('15');
  })

//divide 21 by 7 and get 3
  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);

    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);

    const divideButton = container.getByTestId("operator-divide");
    fireEvent.click(divideButton);

    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    const runningTotal = container.getByTestId('running-total');
    expect (runningTotal.textContent).toEqual('3');
  })

//concatenate multiple number button clicks
it('should concatenate multiple number button clicks', () => {
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1);
  const button7 = container.getByTestId('number7');
  fireEvent.click(button7);
  const runningTotal = container.getByTestId('running-total');
  
  expect (runningTotal.textContent).toEqual('217');
})

// chain multiple operations together

it('chain multiple operations together', () => {
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const multiplyButton = container.getByTestId("operator-multiply");
  fireEvent.click(multiplyButton);
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1);
  const addButton = container.getByTestId("operator_add");
  fireEvent.click(addButton);
  const button7 = container.getByTestId('number7');
  fireEvent.click(button7);
  const equalsButton = container.getByTestId('operator-equals');
  fireEvent.click(equalsButton);
  const runningTotal = container.getByTestId('running-total');
  
  expect (runningTotal.textContent).toEqual('9');
})

//clear the running total without affecting the calculation
it('clear the running total without affecting the calculation', () => {
  const button5 = container.getByTestId('number5');
  fireEvent.click(button5);
  const addButton = container.getByTestId("operator_add");
  fireEvent.click(addButton);
  fireEvent.click(button5);
  const equalsButton = container.getByTestId('operator-equals');
  fireEvent.click(equalsButton);
  const clearButton = container.getByTestId('clear');
  fireEvent.click(clearButton);
  fireEvent.click(addButton);
  fireEvent.click(button5);
  fireEvent.click(equalsButton);

  const runningTotal = container.getByTestId('running-total');
 
  expect (runningTotal.textContent).toEqual('15');
})
})