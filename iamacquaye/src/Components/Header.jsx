function Header(props) {
  return (
    <header>
      <nav>
        <p>{props.homeTag}</p>
        <p class="primary-navigation">{props.aboutTag}</p>
        <button
          class="mobile-nav-toggle"
          aria-control="primary-navigation"
          aria-expanded="false"
        >
          <img
            class="icon-hamburger"
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
