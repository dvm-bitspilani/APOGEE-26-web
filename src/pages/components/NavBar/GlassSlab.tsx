import React from "react";
import "./GlassSlab.scss";
import titleImg from "/img/apogee26_theme.webp";
import { prefetchRoute } from "../../../routeLoaders";
import { Link } from "react-router-dom";
import { useScrollToSectionStore } from "../../../utils/store";

const GlassSlab: React.FC = () => {
  return (
    <div className="gs-page">
       {/* <div className="gs-blur-layer" /> */}
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
            <div className="gs-link" role="button" tabIndex={0} onPointerEnter={() => prefetchRoute("/")} onFocus={() => prefetchRoute("/")} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); useScrollToSectionStore.getState().scrollToSection("home"); } }} onClick={() => { prefetchRoute("/"); useScrollToSectionStore.getState().scrollToSection("home"); }}>
              <span>{`[`}</span>
              HOME
              <span>{`]`}</span>
            </div>
            <Link to="/events" className="gs-link">
              <span>{`[`}</span>
              EVENTS
              <span>{`]`}</span>
            </Link>
            <Link to="/speakers" className="gs-link">
              <span>{`[`}</span>
              SPEAKERS
              <span>{`]`}</span>
            </Link>
            <div className="gs-link" role="button" tabIndex={0} onPointerEnter={() => prefetchRoute("/about")} onFocus={() => prefetchRoute("/about")} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); useScrollToSectionStore.getState().scrollToSection("about"); } }} onClick={() => { prefetchRoute("/about"); useScrollToSectionStore.getState().scrollToSection("about"); }}>
              <span>{`[`}</span>
              ABOUT US
              <span>{`]`}</span>
            </div>
            <div className="gs-link" role="button" tabIndex={0} onPointerEnter={() => prefetchRoute("/contact")} onFocus={() => prefetchRoute("/contact")} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); useScrollToSectionStore.getState().scrollToSection("contact"); } }} onClick={() => { prefetchRoute("/contact"); useScrollToSectionStore.getState().scrollToSection("contact"); }}>
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
