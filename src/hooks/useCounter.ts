import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';


const ERROR_STYLE = 'color: red; background-color: black;';

export const useCounter = ({ maxCount = 1}) => {


  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<any>(null); //no re-renderiza el elemento cuando cambia counterElement

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter( prev => Math.min( prev +1 , maxCount) );
  }

  useLayoutEffect(() => {

      if( !elementToAnimate.current) return;

      tl.current.to( elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out'} )
                .to( elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out'})
                .pause();

  }, [])

  useEffect(() => { 
    if( counter < maxCount ) return;
    tl.current.play(0);
  }, [counter])

    return {
        counter,
        elementToAnimate,

        handleClick,

    }

}