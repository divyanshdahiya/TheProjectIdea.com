import React from "react";
import quoteLogo from "../images/quote.png";
import "./styles/quote.css";
function Quote() {
  return (
    <div>
      <div className="quote-home container">
        <img src={quoteLogo} alt="Quote" className="quote-img" />
        <p>
          <strong>
            "The only way to learn a new programming language is by writing
            programs in it."
          </strong>{" "}
          - Dennis Ritchie
        </p>
      </div>
    </div>
  );
}

export default Quote;
