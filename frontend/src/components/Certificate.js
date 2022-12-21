import React from "react";
import certificate from '../images/certificate.jpg';
import "../styles/certificate.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import JsPDF from 'jspdf';
export const Certificate = () => {

    const generatePDF = () => {

    const report = new JsPDF('p','px',[1700, 500],'false','false','5');
    report.html(document.querySelector('#MyCertificate')).then(() => {
    report.save('report.pdf');
        });
    }


  return (
<div class="row gutters">
 <div class="card h-100">
    <div class="card-body">
     <div className="Cert">
        <div id="myC"><p>My Certificate</p></div>
        <h3>CONGRATULATIONS! you've Passed this MF Course</h3>
          <div className="mainC">
              <img id="MyCertificate"
             src={certificate} />
           </div>
        </div>
        <button onClick={generatePDF}> Save as PDF</button>
    </div>
  </div>
</div>
  );
};