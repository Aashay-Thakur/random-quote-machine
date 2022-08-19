import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitterSquare,
	faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Test = ({ author, content, newQuote }) => {
	return (
		<div>
			<div className="main-container" id="quote-box">
				<div className="quoteBox">
					<blockquote id="text">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="quoteIcon quoteLeft"
						/>
						{content}
					</blockquote>
					<div className="author" id="author">
						-{author}
					</div>
				</div>
				<div className="button-bar">
					<button
						id="new-quote"
						className="button"
						onClick={newQuote}>
						New Quote
					</button>
					<div className="icons">
						<a
							id="tweet-quote"
							target="_blank"
							rel="noreferrer"
							href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
								'"' + content + '" -' + author
							)}`}>
							<div className="twitter">
								<FontAwesomeIcon
									icon={faTwitterSquare}
									className="twitter-icon icon"
								/>
							</div>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Aashay-Thakur">
							<div className="github icon">
								<FontAwesomeIcon
									icon={faGithubSquare}
									className="github-icon"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
