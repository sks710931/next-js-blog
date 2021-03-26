import { Container, Jumbotron, Media } from "react-bootstrap";
import styles from './header.module.scss';
import Icon from "@material-ui/core/Icon";

export const Header = (props) => {
  return (
    <Jumbotron className={styles.jumbotron}>
      <Container>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src="/images/profile.png"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h3 className={styles.heading}>Shivam Singh</h3>
            <p className={styles.text}>
              A Fullstack Engineer from Bengaluru, India
            </p>
            <a target="_blank" href="https://www.linkedin.com/in/sks71093/">
              <Icon className={`fab fa-linkedin ${styles.icon}`} />
            </a>

            <a target="_blank" href="https://github.com/sks710931">
              <Icon className={`fab fa-github ${styles.icon}`} />
            </a>
            <a target="_blank" href="https://twitter.com/sks71093">
              <Icon className={`fab fa-twitter ${styles.icon}`} />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCgn9Vr0m5hRHCJd6IReuhzw">
              <Icon className={`fab fa-youtube ${styles.icon}`} />
            </a>
            <a target="_blank" href="https://www.instagram.com/sks71093/">
              <Icon className={`fab fa-instagram ${styles.icon}`} />
            </a>
          </Media.Body>
        </Media>
      </Container>
    </Jumbotron>
  );
};