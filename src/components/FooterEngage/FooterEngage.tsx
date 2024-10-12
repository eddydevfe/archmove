import "./FooterEngage.scss";
import buildingIlus from "../../assets/illustrations/building.png";
import Button from "../UI/Button/Button";

const FooterEngage = () => {
  return (
    <section className="footer-engage">
      <div className="container">
        <div className="footer-cta">
          <div>
            <img src={buildingIlus} alt="Illustration of a building" />
          </div>
          <div className="footer-cta-text">
            <p>
              Realize your dream project with <span>Archmove</span>
            </p>
            <Button>Free consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterEngage;
