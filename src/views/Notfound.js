import React from "react";
import { Container } from "shards-react";

const Notfound = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>The request page is not available .Please check the URL !!</p>
        {/* <Button pill></Button> */}
      </div>
    </div>
  </Container>
);

export default Notfound;
