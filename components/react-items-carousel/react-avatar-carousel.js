import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import TestimonialClient from "../../components/TestimonialClient/TestimonailClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { Hidden } from "@material-ui/core";

class Carousel extends React.Component {
  state = {
    activeItemIndex: 0
  };

  render() {
    // const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div className="bg-info" style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={v => this.setState({ activeItemIndex: v })}
          activeItemIndex={this.state.activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={<FontAwesomeIcon color="black" icon={faChevronLeft} />}
          rightChevron={<FontAwesomeIcon color="black" icon={faChevronRight} />}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {/* <div style={{ height: 200, background: "black" }}>First card</div>
        <div style={{ height: 200, background: "black" }}>Second card</div>
        <div style={{ height: 200, background: "black" }}>Third card</div>
        <div style={{ height: 200, background: "black" }}>Fourth card</div>
        <div style={{ height: 200, background: "black" }}>Fourth card</div>
        <div style={{ height: 200, background: "black" }}>Fourth card</div>
        <div style={{ height: 200, background: "black" }}>Fourth card</div> */}

          <Hidden only={["xs", "sm"]}>
            <div
              style={{ color: "white", fontWeight: "bolder", width: "100%" }}
            >
              Our CLients
            </div>
          </Hidden>
          <TestimonialClient />
          <TestimonialClient />
          <TestimonialClient />
          <TestimonialClient />
          <TestimonialClient />
          <TestimonialClient />
        </ItemsCarousel>
      </div>
    );
  }
}

export default Carousel;
