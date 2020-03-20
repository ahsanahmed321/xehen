import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import TestimonialClient from "../../../components/TestimonialClient/TestimonailClient";
// import Carousel from "../../components/react-multi-carousel/react-multi-carousel";
//import Carousel from "react-multi-carousel";
import CardCarousel from "../../../components/react-items-carousel/react-card-carousel";
import AvatarCarousel from "../../../components/react-items-carousel/react-avatar-carousel";
import "./TestimonialSection.scss";
import { Grid } from "@material-ui/core";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
export default function TestmonialSection() {
  // const images = [
  //   "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  // ];

  // const responsive1 = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3
  //   }
  // };

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className="sectionHeading">Testimonials</h2>
      <CardCarousel />
      <div className="gap"></div>
      <Hidden only={["lg", "md"]}>
        <div>
          <h2 style={{ color: "black", fontWeight: "bolder" }}>Our Clients</h2>
        </div>
      </Hidden>
      <AvatarCarousel />
      {/* <GridContainer>
        <Hidden only={["xs", "sm"]}>
          <GridItem md={3}>
            <div>
              <h2
                className="bg-info"
                style={{ color: "white", fontWeight: "bolder", width: "100%" }}
              >
                Our Clients
              </h2>
            </div>
          </GridItem>
        </Hidden>
        <GridItem md={9}>
          <AvatarCarousel />
        </GridItem>
      </GridContainer> */}
      {/* <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <TestimonialCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <TestimonialCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <TestimonialCard />
          </GridItem>
        </GridContainer>
      </div> */}

      {/* <div className="bg-info">
        <GridContainer>
          <Hidden only={["xs", "sm"]}>
            <GridItem xs={4} md={3}>
              <div
                style={{
                  justifyContent: "center",
                  verticalAlign: "center",
                  width: "100%"
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Our Clients
                </h3>
              </div>
            </GridItem>
          </Hidden>
          <GridItem xs={4} md={3}>
            <TestimonialClient />
          </GridItem>
          <GridItem xs={4} md={3}>
            <TestimonialClient />
          </GridItem>
          <GridItem xs={4} md={3}>
            <TestimonialClient />
          </GridItem>
        </GridContainer>
      </div> */}
    </div>
  );
}
