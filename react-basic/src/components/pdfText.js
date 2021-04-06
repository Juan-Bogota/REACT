import React from "react";
//mport ReactDOM from "react-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Invoice from "./Invoice";

const Pdf2 = () => {
  const genPdf = () => {
    //const { jsPDF } = window.jspdf;
    html2canvas(document.getElementById("content-22"), {
      scale: 2,
    }).then((canvas) => {
      let pdf = canvas.toDataURL("image/png");
      let doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "letter", //[alto, ancho]
      });
      let width = doc.internal.pageSize.getWidth();
      let height = doc.internal.pageSize.getHeight();
      console.log(width, height);
      doc.addImage(pdf, "PNG", 0, 0, width, height, undefined, "SLOW");
      window.open(
        doc.output("bloburl"),
        "_blank",
        "toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,modal=yes,top=200,left=350,width=1000,height=800"
      );
      doc.save("test.pdf");
    });
  };

  return (
    <>
      <div className="App content-22" id="content-22">
        <Invoice />
      </div>
      <button onClick={genPdf}>save</button>
    </>
  );
};
export default Pdf2;
