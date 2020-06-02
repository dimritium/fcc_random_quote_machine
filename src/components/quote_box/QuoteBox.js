import React from 'react';
import quotes from '../../quotes';
import './QuoteBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// import ReactTransitionGroup from 'react-addons-transition-group';

const allQuotes = quotes.quotes;
const randomMC = require('random-material-color');

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currQuote: {},
            color: randomMC.getColor()
        }
        this.refreshQuote = this.refreshQuote.bind(this);
    }

    componentDidMount() {
        this.refreshQuote();
    }

    componentDidUpdate() {
        let color = randomMC.getColor();
        document.getElementById("env").style.cssText = "background-color:"+ color + "; color: " + color;
    }

    refreshQuote() {
        this.setState(({
            currQuote: allQuotes[Math.ceil(Math.random() * allQuotes.length) - 1]
        }));
    }

    render() {
        const quoteIcon = <FontAwesomeIcon icon={faQuoteLeft} />
        return (
            <div id="env">
                <div id="quote-box">
                    <div className="text">
                        <div id="quoteIcon">
                            <span>{quoteIcon}</span>
                        </div>
                        <span id="text">{this.state.currQuote["quote"]}</span>
                    </div>
                    <div className="author">
                        <span id="author">{this.state.currQuote["author"]}</span>
                    </div>
                    <div id="new-quote-btn">
                        <button id="new-quote" onClick={this.refreshQuote}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteBox;