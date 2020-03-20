import { Avatar } from "antd";
import { Card } from "@material-ui/core";
import "./TestimonialCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = () => {
  return (
    <div>
      <Card className="fullCard">
        <div className="cardText">
          <div style={{ textAlign: "left", marginLeft: "4rem" }}>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <p>
            "well it was a super good <br /> product that was delivered <br />
            in a very short period of time"
          </p>
          <div style={{ textAlign: "right", marginRight: "4rem" }}>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
        </div>

        <div className="bg-info">
          <div className="avatarHolder">
            <Avatar size={80} />
          </div>
          <div className="avatarInfoHandler">
            <h5>John Doe</h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TestimonialCard;
