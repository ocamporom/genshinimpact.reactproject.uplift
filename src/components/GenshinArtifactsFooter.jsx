import React, { useEffect, useState } from "react";
import style from "./GenshinArtifactsFooter.module.css";
import { Link } from "react-router-dom";

function GenshinArtifactsFooter() {
  const [footerPosition, setFooterPosition] = useState("fixed");

  useEffect(() => {
    function handleScroll() {
      const footer = document.getElementById("footer");
      const content = document.querySelector(".content");

      // Calculate if the content height is shorter than the viewport height
      const isShorterThanViewport = content.clientHeight < window.innerHeight;

      if (!isShorterThanViewport) {
        // If content is longer than viewport, make the footer follow scroll
        const scrollableHeight = content.scrollHeight - window.innerHeight;
        const scrolledRatio = window.scrollY / scrollableHeight;
        const footerHeight = footer.offsetHeight;

        // Calculate the position of the footer based on scroll position
        const newPosition = Math.min(
          scrolledRatio * scrollableHeight,
          scrollableHeight - footerHeight
        );
        setFooterPosition(newPosition + "px");
      } else {
        // If content is shorter than viewport, fix footer to bottom
        setFooterPosition("0");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={style.genshinFooter}>
        <div className="content"></div>
        <a id="top" />

        <footer
          id="footer"
          className={style.genshinFooterText}
          style={{ position: footerPosition }}
        >
          <div className={style.artifactsLink}>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/weapons">Weapons</Link> &nbsp;
            <a href="#top">Top</a>
          </div>
          <br />
        </footer>
      </div>
    </>
  );
}

export default GenshinArtifactsFooter;
