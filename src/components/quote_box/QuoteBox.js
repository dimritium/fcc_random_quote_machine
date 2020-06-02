import React from 'react';
import quotes from '../../quotes';
import './QuoteBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const allQuotes = quotes.quotes;
const randomMC = require('random-material-color');

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currQuote: {},
            color: ""
        }
        this.refreshQuote = this.refreshQuote.bind(this);
    }

    componentDidMount() {
        this.refreshQuote();
    }

    refreshQuote() {
        this.setState(({
            currQuote: allQuotes[Math.ceil(Math.random() * allQuotes.length) - 1],
            color: randomMC.getColor(),
        }));
    }

    render() {
        const quoteIcon = <FontAwesomeIcon icon={faQuoteLeft} />
        const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />
        return (
            <div id="env" style={{
                backgroundColor: this.state.color,
                color: this.state.color
            }}>
                <div id="quote-box">
                    <div className="text">
                        <div id="quoteIcon">
                            <span>{quoteIcon}</span>
                        </div>
                        <span key={this.state.currQuote["quote"]} id="text">{this.state.currQuote["quote"]}</span>
                    </div>
                    <div id="author">
                        <span>{this.state.currQuote["author"]}</span>
                    </div>
                    <div id="button-section">
                        <div class="socialButton">
                            <a href="twitter.com/intent/tweet" id="tweet-quote" style={{color: this.state.color}}>{twitterIcon}</a>
                        </div>
                        <button id="new-quote" onClick={this.refreshQuote}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteBox;