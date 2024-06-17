import React, { useEffect, useState } from "react";
import style from "./GenshinMainPageFooter.module.css";
import { Link } from "react-router-dom";

function GenshinMainPageFooter() {
  const [footerPosition, setFooterPosition] = useState("fixed");

  useEffect(() => {
    function handleScroll() {
      const footer = document.getElementById("footer");
      const content = document.querySelector(".content");

      
      const isShorterThanViewport = content.clientHeight < window.innerHeight;

      if (!isShorterThanViewport) {
       
        const scrollableHeight = content.scrollHeight - window.innerHeight;
        const scrolledRatio = window.scrollY / scrollableHeight;
        const footerHeight = footer.offsetHeight;

    
        const newPosition = Math.min(
          scrolledRatio * scrollableHeight,
          scrollableHeight - footerHeight
        );
        setFooterPosition(newPosition + "px");
      } else {
    
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
       

        <footer
          id="footer"
          className={style.genshinFooterText}
          style={{ position: footerPosition }}
        >
          <div className={style.artifactsLink}>
            <Link to="/artifacts">All-Artifacts</Link>&nbsp;
            <Link to="/weapons">All-Weapons</Link> &nbsp;
            
          </div>
          <br />
        </footer>
      </div>
    </>
  );
}

export default GenshinMainPageFooter;
