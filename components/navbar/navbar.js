import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./navbar.module.scss";

export const NavigationBar = (props) => {
  return (
    <Navbar
      className={styles.navbar}
      sticky="top"
      expand="lg"
      variant="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="">
              <a href="" className={`${styles.navLink} nav-link`}>
                Home
              </a>
            </Link>
            <Link className={`${styles.navLink} nav-link`} href="/archive">
              <a href="/archive" className={`${styles.navLink} nav-link`}>
                Archive
              </a>
            </Link>
            <Link className={`${styles.navLink} nav-link`} href="/about">
              <a href="/about" className={`${styles.navLink} nav-link`}>
                About Me
              </a>
            </Link>
            <Link className={`${styles.navLink} nav-link`} href="/contact">
              <a href="/contact" className={`${styles.navLink} nav-link`}>
                Contact
              </a>
            </Link>
          </Nav>
          {false && (
            <Nav>
              <Link href="#home">
                <Nav.Link className={styles.navLinkRight} href="#home">
                  Sign In/Sign Up
                </Nav.Link>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
