import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container} from "shards-react";

import NavBarMarketDropdown from "./NavBarMarketDropdown";



const MainNavbar = ({ layout, stickyTop }) => {
  

  const classes = classNames(
    "main-navbar",
    "bg-white"
    // ,stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
          <NavBarMarketDropdown  />
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
