import { useReducer, useState } from "react"

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}
const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 0,
  changes: 0,
}

type CounterAction = | { type: 'increaseBy', payload: { value: number; } }
  | { type: 'reset' }


const counterReducer = (state: CounterState, action: any): CounterState => {

  switch (action.type) {
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
        previous: state.counter,
      }


    case 'reset':

      return {
        counter: 0,
        changes: 0,
        previous: 0,
      }

    default:
      return state;
  }
}



export const CounterReducerComponent = () => {


  const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: {value}})
  }

  return (
    <div>
      <h1> Counter Reducer:</h1>
      <pre>
        { JSON.stringify( counterState, null, 2 )}
      </pre>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </div>
  )
}
