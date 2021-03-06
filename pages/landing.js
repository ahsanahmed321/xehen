import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import TestimonialSection from "../pages-sections/LandingPage-Sections/TestimonialSection/TestimonialSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Xehen"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>R&D TEAMS FOR YOUR AI VENTURE.</h2>
              <h4>
                We build AI Teams For Your AI startups to design & build AI
                products
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Services
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
      <div className={classes.container}>
        <ProductSection />
        <TeamSection />
        <WorkSection />
        <TestimonialSection />
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
}
