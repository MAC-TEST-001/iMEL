import React from "react";
import { Container} from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>400</h2>
        <h3>Authentication Failed!</h3>
        <p>Please request the Required role in IMDL</p>
        {/* <Button pill></Button> */}
      </div>
    </div>
  </Container>
);

export default Errors;
