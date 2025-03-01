import { useState, memo } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// What memo does is that it looks at the props of the component function and check if the value 
// of initialCount has not changed (exactly the same in memory), it would prevent the component function 
// to run again just because the parent is being re-rendered - External changes
// So this component will only be re-rendered when either
// 1. an internal state changes
// 2. the props( initialCount) value changes

 const MemoWrappedCounter = memo(function Counter({ initialCount }) {
       log('<Counter /> rendered', 1);
       const initialCountIsPrime = isPrime(initialCount);

       const [counter, setCounter] = useState(initialCount);

       function handleDecrement() {
         setCounter((prevCounter) => prevCounter - 1);
       }

       function handleIncrement() {
         setCounter((prevCounter) => prevCounter + 1);
       }
       return (
           <section className="counter">
             <p className="counter-info">
               The initial counter value was <strong>{initialCount}</strong>. It{' '}
               <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
             </p>
             <p>
               <IconButton icon={MinusIcon} onClick={handleDecrement}>
                 Decrement
               </IconButton>
               <CounterOutput value={counter} />
               <IconButton icon={PlusIcon} onClick={handleIncrement}>
                 Increment
               </IconButton>
             </p>
           </section>
       );
     }
 );
export default MemoWrappedCounter;