import { useState, useRef } from "react";

function Header(props) {
  const [hamburg, setHamburg] = useState("icon-hamburger");
  const [ariaToggle, setAriaToggle] = useState(false);
  const [mobileNav, setMobileNav] = useState("pNav-invisible");

  const navToggle = () => {
    if (ariaToggle === true) {
      setAriaToggle(false);
      setMobileNav("pNav-invisible");
      setHamburg("icon-hamburger");
    } else {
      setAriaToggle(true);
      setMobileNav("pNav-visible");
      setHamburg("icon-hamburger-rotate");
    }
  };

  return (
    <header>
      <nav>
        <p>{props.homeTag}</p>
        <p class={`primary-navigation ${mobileNav}`}>{props.aboutTag}</p>
        <button
          class="mobile-nav-toggle"
          aria-control="primary-navigation"
          aria-expanded={ariaToggle}
          onClick={navToggle}
        >
          <img
            class={hamburg}
            src="https://res.cloudinary.com/dxrfj6vel/image/upload/v1684439364/hamburger_cjd0lp.png"
            alt="hamburger icon"
            aria-controls="true"
          />
          <span class="visually-hidden">Menu</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
