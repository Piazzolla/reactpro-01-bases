import { useState } from "react"
import { Counter } from "./Counter"

interface Props {
  initialValue?: number
}


interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: Props) => {

  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  })




  const handleClick = (val: number) => {

    setCounterState( ({ clicks, counter}) => ({
        // ...prev, 
        counter: counter + val,
        clicks: clicks + 1
      })
    );
  }

  const { counter, clicks } = counterState;

  return (
    <div>
      <h1> CounterBy: {counterState.counter}</h1>
      <h1> Clicks: {counterState.clicks}</h1>
      <button
        onClick={() => handleClick(1)}
      >
        +1
      </button>
      <button
        onClick={() => handleClick(5)}
      >
        +5
      </button>
    </div>
  )
}
