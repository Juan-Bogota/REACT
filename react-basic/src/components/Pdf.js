import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";

import jsPDF from "jspdf";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const Prints = () => (
  <div>
    <ul>
      <li>line 1</li>
      <li>line 2</li>
      <li>line 3</li>
    </ul>
  </div>
);

const print = () => {
  const string = renderToString(<Prints />);
  console.log(string);
  const pdf = new jsPDF();
  pdf.fromHTML(string);
  pdf.autoPrint();
  window.open(
    pdf.output("bloburl"),
    "_blank",
    "toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,modal=yes,top=200,left=350,width=1000,height=800"
  );
  //pdf.save('pdf')
};

const Pdf = () => (
  <div style={styles}>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <button onClick={print}>print</button>
  </div>
);

render(<Pdf />, document.getElementById("root"));

export default Pdf;
