import FooterStates from "../States/FooterStates";

function Footer() {
  const links = {
    designStd: "https://www.linkedin.com/company/e-a-design-studio/",
    insta: "https://www.instagram.com/iamacquaye/",
    twitter: "https://twitter.com/AcquayeEmeka",
    linkedin: "https://www.linkedin.com/in/emekaacquaye/",
    behance: "https://www.behance.net/iamacquaye",
  };

  const linkName = [
    "E/A Design Studio",
    "Instagram",
    "Twitter",
    "Linkedin",
    "Behance",
  ];

  return (
    <footer class="footer">
      <div class="socials">
        <ul role="list">
          <FooterStates link={links.designStd} linkName={linkName[0]} />
          <FooterStates link={links.insta} linkName={linkName[1]} />
          <FooterStates link={links.twitter} linkName={linkName[2]} />
          <FooterStates link={links.linkedin} linkName={linkName[3]} />
          <FooterStates link={links.behance} linkName={linkName[4]} />
        </ul>
      </div>
      <div class="info">
        <div class="contact">
          <p>
            <a href="mailto:iamacquaye@gmail.com">iamacquaye@gmail.com</a>
          </p>
          <p>+234 706 165 55563</p>
          <p>Abuja, Nigeria</p>
        </div>

        <div class="copyright">
          <p>Emeka Acquaye &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
