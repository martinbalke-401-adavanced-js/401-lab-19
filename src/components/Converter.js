import React from 'react';
import '../styles/styles.scss';

/**
 * Converter is a react component class that allows us to use event handlers and 
 * the render function to dynamically display HMTL to the page
 * @class
 */
class Converter extends React.Component {
    /**
     * @constructor
     * @param {Object} props - Props are passed to this component constructor to control the rate
     * @param {Object} this.state = X and Y properties used to control the rate of change
     */
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.x ? this.props.x : '',
            y: this.props.y ? this.props.y : '',
            rate: this.props.rate ? this.props.rate : 1,
        };
    }
    /**
     * Roundit tkes in a number and rounds it
     * @param {Number} num - The number we are trying to round
     */
    roundIt(num) {
        return Math.round(num * 1000) / 1000;
    }
    /**
     * HandleChange is an event handler that allows us to dynamically display the conversion information based on a user's input
     * @param {Object} e - The event object. Used in this case to grab ID and Value from an input field
     */
    handleChange(e) {
        if (!e.target.value) {
            this.setState({ x: '', y: '' });
            return;
        }

        let value = parseFloat(e.target.value);
        if (e.target.id === 'x')
            this.setState({
                x: value,
                y: this.roundIt(value * this.state.rate),
            });
        else if (e.target.id === 'y')
            this.setState({
                x: this.roundIt(value / this.state.rate),
                y: value,
            });
    }
    /**
     * Render allows us to render our JSX to the page dynamically
     * @returns {HTML}
     */
    render() {
        let xLabel = this.props.xLabel ? this.props.xLabel : '1';
        let yLabel = this.props.yLabel || '1';
        return (
            <div className='converter'>
                <h4 className='converter-heading'>
                    Converting {xLabel} to/from {yLabel}
                </h4>

                <label className='x-label'>
                    <input
                        type='number'
                        step='any'
                        id='x'
                        value={this.state.x}
                        onChange={this.handleChange.bind(this)}
                    />
                    {xLabel}
                </label>
                <span className='mid-label'> is equal to </span>
                <label className='y-label'>
                    <input
                        type='number'
                        step='any'
                        id='y'
                        value={this.state.y}
                        onChange={this.handleChange.bind(this)}
                    />

                    {yLabel}
                </label>
            </div>
        );
    }
}

export default Converter;
