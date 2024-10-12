import "./WhyChooseUs.scss";
import Button from "../UI/Button/Button";
import photo from "../../assets/photos/why-choose-us-photo.png";

import shield from "../../assets/icons/shield-icon.svg";
import bill from "../../assets/icons/bill-icon.svg";
import house from "../../assets/icons/house-icon.svg";

const WhyChooseUs = () => {
  return (
    <section>
      <div className="container">
        <div className="why-choose-us">
          <div>
            <img src={photo} alt="Photo of people having a meeting" />
            <div className="key-points">
              <h3>Build your needs <br /> with Archmove</h3>
              <div className="point">
                <img src={shield} alt="Shield icon" />
                <div>
                  <h4>100% guaranteed project completion</h4>
                  <p>
                    Build safe, comfortable and transparent with a project
                    management application with a joint account.
                  </p>
                </div>
              </div>
              <div className="point">
                <img src={bill} alt="Bill icon" />
                <div>
                  <h4>No additional fees</h4>
                  <p>
                    There are no hidden costs. The value of the offer you get is
                    the value you paid.
                  </p>
                </div>
              </div>
              <div className="point">
                <img src={house} alt="House icon" />
                <div>
                  <h4>Get escort from the Team</h4>
                  <p>
                    Monitor reports from the Arsitag team who check directly in
                    the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button>Free Consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
