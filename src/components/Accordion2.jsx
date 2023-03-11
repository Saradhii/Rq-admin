import React, { useState } from 'react';
import "./AdminStyles.css";

const Accordion = ({ e }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(e);

  return (
    <>
    <div className="accordion-item">
      <div className="accordion2" onClick={() => setIsActive(!isActive)}>
        <div>
        <div className="thead2">
                  <div>{e.firstname}&nbsp;{e.lastname}</div>
                  <div>{e.companyname}</div>
                  <div>{e.jobtitle}</div>
                  <div>{e.email}</div>
                  <div>{e.phone}</div>
                  <div>{e.country}</div>
                  <div>{e.state}</div>
                  <div>{e.city}</div>
        </div>
        </div>
        <div></div>
      </div>
      {isActive && <div className="accordion-content">
      <table id="customers">
                  <tr>
                    <td>Id</td>
                    <td>{e.id}</td>
                  </tr>
                  {/* Product details */}
                  <tr>
                    <td>First Name</td>
                    <td>{e.firstname}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{e.lastname}</td>
                  </tr>
                  <tr>
                    <td>Company Name</td>
                    <td>{e.companyname}</td>
                  </tr>
                  <tr>
                    <td>Job title</td>
                    <td>{e.jobtitle}</td>
                  </tr>
                  <tr>
                    <td>Work Email</td>
                    <td>{e.email}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>{e.phone}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>{e.country}</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>{e.state}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{e.city}</td>
                  </tr>
                  <tr>
                    <td>Annual International Freight Shipment</td>
                    <td>{e.Annual_International_Freight_Shipment}</td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>{e.message}</td>
                  </tr>
                </table>
        </div>}
    </div>
    
    </>
  );
};

export default Accordion;
