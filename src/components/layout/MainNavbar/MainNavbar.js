import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container} from "shards-react";

import NavBarMarketDropdown from "./NavBarMarketDropdown";
import UserNavbar from './userNavbar'



const MainNavbar = ({ layout, stickyTop,...rest }) => {
  
  
  const classes = classNames(
    "main-navbar",
    "bg-white"
    // ,stickyTop && "sticky-top"
  );

  return (
    <React.Fragment>
    <UserNavbar></UserNavbar>
    <div className={classes}>
      <Container className="p-0">
 {/* <div align='center' >Hello User</div> */}
          <NavBarMarketDropdown  />
      </Container>
    </div>
    </React.Fragment>
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
