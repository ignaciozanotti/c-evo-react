import React from 'react';
import TonyStark from './components/HOC/TonyStark';
import ClickCounter from './components/HOC/ClickCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import Counter from './components/RenderProps/Counter';

function App() {
  return (
    <div className="App">
        <h2>High Order Components</h2>
        <TonyStark /> 
        <ClickCounter />

        <h2>Render Props</h2>
{/*         <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? 'Slim' : 'Guest'}/> */}
        <Counter
          render={(count, incrementCount) =>(<ClickCounterTwo count={count} incrementCount={incrementCount}/> )}
        />
        <Counter
          render={(count, incrementCount) =>(<HoverCounterTwo count={count} incrementCount={incrementCount}/> )}
        />
    </div>
  );
}

export default App;
