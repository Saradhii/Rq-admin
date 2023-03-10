import React, { useState } from 'react';
import "./AdminStyles.css";

const Accordion2 = ({ e }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(e);

  return (
    <>
    <div className="accordion-item">
      <div className="accordion2" onClick={() => setIsActive(!isActive)}>
        <div>
        <div className="thead2">
                  <div>{e.id}</div>
                  <div>{e.firstname}</div>
                  <div>{e.email}</div>
                  <div>{e.phone}</div>
                  <div>{e.companyname}</div>
                  {/* <div>{e.companyurl}</div> */}
                  <div>{e.address}</div>
                  <div>{e.source}</div>
                  <div>{e.created}</div>
                  <div>{e.message}</div>
        </div>
        </div>
        <div></div>
      </div>
      
    </div>
    
    </>
  );
};

export default Accordion2;
