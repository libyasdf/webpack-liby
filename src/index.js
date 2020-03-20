// import FormContainer from "./js/components/container/FormContainer";
import React from "react";
import ReactDOM from "react-dom";

import App from "./routes/Router";

const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
wrapper ? ReactDOM.render( <App />, wrapper ) : false;
