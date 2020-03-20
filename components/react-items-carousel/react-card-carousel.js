import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

class Carousel extends React.Component {
  state = {
    activeItemIndex: 0
  };
  componentDidMount() {
    window.addEventListener("resize", this._resize_mixin_callback);
  }
  _resize_mixin_callback = () => {
    this.setState({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this._resize_mixin_callback);
  }

  render() {
    var cardsCount = 3;
    if (this.state.viewport)
      if (this.state.viewport.width <= 900) {
        cardsCount = 1;
      }

    // const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={v => this.setState({ activeItemIndex: v })}
          activeItemIndex={this.state.activeItemIndex}
          numberOfCards={cardsCount}
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
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </ItemsCarousel>
      </div>
    );
  }
}

export default Carousel;
