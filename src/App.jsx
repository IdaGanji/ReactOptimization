import {useState} from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import {log} from './log.js';
import MemoWrappedCounter from "./components/Counter/Counter.jsx";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
    const [chosenCount, setChosenCount] = useState(0);
    log('<App /> rendered');

    function handleSetCount(newCount) {
        setChosenCount(newCount);
    }

    // Since state-changes and re-execution of child components do not trigger 
    // re-rendering of parent components, so it is smart to move the states and JSX code 
    // That change to a child component so that only they change and update not the parent and all other children


    return (
        <>
            <Header/>
            <main>
                <ConfigureCounter onSet={handleSetCount}/>
                <MemoWrappedCounter initialCount={chosenCount}/>
            </main>
        </>
    );
}

export default App;
