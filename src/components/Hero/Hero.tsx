import "./Hero.scss";
import Button from "../UI/Button/Button";
import heroPhoto from "../../assets/photos/hero-photo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Build Your <br /> Dream <span>House</span>
          </h1>
          <div>
            <div>
              <p>
                100% guaranteed built safe, <br /> comfortable and transparent
                with a <br />
                project management for the best result
              </p>
              <Button>Free consultation</Button>
            </div>
            <img src={heroPhoto} alt="Photo of a home office" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
