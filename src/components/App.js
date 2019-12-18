import React from 'react';
import Converter from './Converter';

/**
 * App allows us to render JSX to the DOM
 * @returns {HTML} - The html we are rendering to the DOM
 */
function App() {
    return (
        <div className='App'>
            <h1>Multi-Purpose Converter</h1>
            {/* the rate prop here represents the rate at which X is converted to Y */}
            <Converter xLabel='Miles' yLabel='Kilometers' rate={1.61} />
            <Converter xLabel='Cups' yLabel='Fluid Ounces' rate={8} />
            <Converter xLabel='Inches' yLabel='Centimeters' rate={2.54} />
        </div>
    );
}

export default App;
