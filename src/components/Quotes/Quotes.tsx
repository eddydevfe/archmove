import "./Quotes.scss";
import quoteIcon from "../../assets/icons/quote.svg";

import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";

const Quotes = () => {
  return (
    <section>
      <div className="container">
        <div className="quote-wrap">
          <p>Sound Too Good <br /> To Be True?</p>
          <div className="quote-details">
            <img src={quoteIcon} alt="Quote" />
            <div className="quote-text-wrap">
              <p className="quote-text">
                “We just wanted to thank you for this fantastic website! We are
                so grateful for being able to advertise our Petite cabin and
                receive feedback from people from all over the U.S. and even
                further.”
              </p>
              <div className="quote-author-wrap">
                <p className="quote-author">Adam Morph — CEO of Alphatech</p>
                <div className="arrow-btns">
                <button>
                <img src={leftArrow} alt="Left arrow icon" />
              </button>
              <button>
                <img src={rightArrow} alt="Right arrow icon" />
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
