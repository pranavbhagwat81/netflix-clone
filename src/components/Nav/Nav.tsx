import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = (): JSX.Element => {
  const [show, handleShow] = useState<boolean>(false);

  useEffect(() => {

    const cb = ()=>{
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    }
    window.addEventListener("scroll", cb);
    return () => {
      window.removeEventListener("scroll",cb);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
        alt="TMDB Logo"
      ></img>
    </div>
  );
}

export default Nav;
