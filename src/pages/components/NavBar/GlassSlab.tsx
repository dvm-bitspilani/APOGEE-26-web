import React from "react";
import "./GlassSlab.scss";
import titleImg from "/img/apogee26.png";
import { Link } from "react-router-dom";

const GlassSlab: React.FC = () => {
  return (
    <div className="gs-page">
      <div className="gs-scene">
        {/* Back slab */}
        <div className="gs-slab gs-slab--back">
          <div className="gs-slab__face gs-slab__face--front" />
          {/* <div className="gs-slab__edge gs-slab__edge--right" /> */}
          {/* <div className="gs-slab__edge gs-slab__edge--bottom" /> */}
        </div>

        {/* Front slab */}
        <div className="gs-slab gs-slab--front">
          <div className="gs-slab__face gs-slab__face--front" />
          {/* <div className="gs-slab__edge gs-slab__edge--right" /> */}
          {/* <div className="gs-slab__edge gs-slab__edge--bottom" /> */}
        </div>

        {/* Right slab */}
        {/* <div className="gs-slab gs-slab--right">
          <div className="gs-slab__face gs-slab__face--front" /> */}
          {/* <div className="gs-slab__edge gs-slab__edge--right" /> */}
          {/* <div className="gs-slab__edge gs-slab__edge--bottom" /> */}
        {/* </div> */}

        {/* Embedded text layer — sits between the two slabs */}
        <div className="gs-inner-text">
          <img src={titleImg} alt="Apogee 26" />
          <div className="gs-navLinks">
            <div className="gs-link">
              <span>{`[`}</span>
              HOME
              <span>{`]`}</span>
            </div>
            <Link to="/events" className="gs-link">
              <span>{`[`}</span>
              EVENTS
              <span>{`]`}</span>
            </Link>
            <div className="gs-link">
              <span>{`[`}</span>
              SPEAKERS
              <span>{`]`}</span>
            </div>
            <div className="gs-link">
              <span>{`[`}</span>
              ABOUT US
              <span>{`]`}</span>
            </div>
            <div className="gs-link">
              <span>{`[`}</span>
              CONTACT US
              <span>{`]`}</span>
            </div>
          </div>
          {/* <span className="gs-inner-text__tag">SYS_BUILD :: v4.2.0</span>
          <h2 className="gs-inner-text__heading">NEONPULSE</h2>
          <p className="gs-inner-text__sub">ANNUAL TECH FESTIVAL</p>
          <div className="gs-inner-text__divider" />
          <span className="gs-inner-text__date">28 · 29 · 30 NOV 2025</span>
          <span className="gs-inner-text__loc">SILICON CAMPUS — SECTOR 7</span> */}
        </div>
      </div>
    </div>
  );
};

export default GlassSlab;
