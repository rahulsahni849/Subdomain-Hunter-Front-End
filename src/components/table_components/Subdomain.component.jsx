import React from "react";

import "./Subdomain.style.css";
const Subdomain = ({ data }) => {
  const { subdomain, cname, tech_stack_detect, content_type, webserver} =
    data;

  return (
    <>
      <div className="parent-container">
        <div className="subdomain-container">
          <div className="fields">
            <a className="link1" href={subdomain}>
              <h4>{subdomain}</h4>
            </a>

            <div className="cnameContainer">
              <h3 style={{color:"black",fontSize:"25px"}}>CNAME</h3>
              <p>
                <span style={{ color: "#fbb917" }}>&gt;</span> {cname}
              </p>
            </div>

            <div className="boxContainer">
              {tech_stack_detect.map((item,index) => (
                <>
                  <div id={index} className="boxItem">
                    {item.trim().slice(1,-1)}
                  </div>
                </>
              ))}
            </div>
            <div className="boxContainer">
              <div className="boxItem">{content_type}</div>
            </div>
            <div className="boxContainer">
              <div className="boxItem">{webserver}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subdomain;
