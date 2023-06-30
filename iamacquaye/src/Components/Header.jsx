function Header() {
  return (
    <header>
      <nav>
        <p>
          <a href="#">EMEKA ACQUAYE</a>
        </p>
        <p class="primary-navigation">
          <a href="about/info.html">INFO</a>
        </p>
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
