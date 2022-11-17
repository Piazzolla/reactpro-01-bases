import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap';

const ERROR_STYLE = 'color: red; background-color: black;';
const MAXIMUN_COUNT = 10;

export const CounterEffect = ()   => {

  const [counter, setCounter] = useState(5)

  const counterElement = useRef<HTMLHeadingElement>(null); //no re-renderiza el elemento cuando cambia counterElement

  const handleClick = () => {
    setCounter( prev => Math.min( prev +1 , MAXIMUN_COUNT) );
  }

  useLayoutEffect(() => { // layoutEff se ejecuta despues de que se cargo el html
    if( counter < MAXIMUN_COUNT ) return;
    console.log('%cSe llego al valor maximo', ERROR_STYLE );

    const tl = gsap.timeline();

    tl.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out'} )
      .to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'})


  }, [counter])
  

  return (
    <div>
        <h1> Counter Effect:</h1>
        <h2 ref={ counterElement }>{ counter }</h2>
        <button
            onClick={ handleClick }
        >
            +1
        </button>
    </div>
  )
}
