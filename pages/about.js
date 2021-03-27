import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "./../components/layout";
import styles from "../styles/about.module.scss";
import Icon from "@material-ui/core/Icon";
export default function AboutPage() {
  return (
    <Layout>
      <div className="layout-content">
        <Container className={styles.container}>
          <Row>
            <Col className={styles.left} sm={12} md={5}>
              <div className={styles.avatar}>
                <img src="/images/profile.png" alt="Shivam Singh Avatar" />
                <h1>Hi! I am Shivam</h1>
              </div>
            </Col>
            <Col className={styles.right} sm={12} md={7}>
              <p>
                Ever since I was a little kid, programming has been my passion.
                I still remember sitting in front of my Zenith PC, with the
                <b> BASIC</b> loaded in, making it print{" "}
                <b>
                  <i>"Hello, Shivam" </i>
                </b>
                {"  "}
                for the very first time. As I went through the <b>
                  {" "}
                  BASIC
                </b>{" "}
                tutorial, it was almost magic, being able to get the computer to
                do whatever wanted, just by typing in these funny little
                symbols, limited only by my own imagination and ingenuity.
                Throughout middle and high school, i latched on to any ideas for
                projects I could get, moving from <b>"Hello World"</b> to all
                the way to a simple <b>tic tac toe engine</b>, with dozens of
                projects in between. I learned <b>C</b>, then <b>C++</b> then
                tearing through any books I could find on anything remotely
                related to software development. I was insatiable.
              </p>
              <p>
                This passion carried me through my education at{" "}
                <b>Annamalai University</b>. Here there were more resources
                available to me than I ever could have imagined as a kid. I
                studied new{" "}
                <b>languages, algorithms, compilers, higher mathematics</b>, all
                with pretty much the same fascination that drove me as a kid.
                And it was here that I learned truly how much there was yet to
                learn.
              </p>
              <p>
                So, now, in industry, this passion remains with me. There's
                certainly yet more to learn, yet more problems to solve, and yet
                more to build. And for this, I am very grateful.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className={styles.skillset}>
              <h2>My Skillset </h2>
              <div>
                <div>
                  <img src="/images/react.png" alt="React" />
                </div>
                <div>
                  <img src="/images/red.png" alt="Redux" />
                </div>
                <div>
                  <img src="/images/angular.png" alt="Angular" />
                </div>
                <div>
                  <img src="/images/rxjs.png" alt="ReactiveJs" />
                </div>
                <div>
                  <img src="/images/ts.png" alt="Typescript" />
                </div>
                <div>
                  <img src="/images/js.png" alt="Javascript" />
                </div>
                <div>
                  <img src="/images/jquery.png" alt="JQuery" />
                </div>
                <div>
                  <img src="/images/pwa.png" alt="Progressive Web App" />
                </div>
                <div>
                  <img src="/images/html.png" alt="Html" />
                </div>
                <div>
                  <img src="/images/css.png" alt="CSS" />
                </div>
                <div>
                  <img src="/images/bootstrap.png" alt="Bootstrap" />
                </div>

                <div>
                  <img src="/images/aspnetcore.png" alt="ASPNet Core" />
                </div>
                <div>
                  <img src="/images/net.png" alt=".Net" />
                </div>
                <div>
                  <img src="/images/nodejs.png" alt="NodeJs" />
                </div>
                
                <div>
                  <img src="/images/sqlserver.png" alt="Sql Server" />
                </div>
                
                <div>
                  <img src="/images/mongo.png" alt="Mongo DB" />
                </div>
                <div>
                  <img src="/images/firebase.png" alt="Firebase" />
                </div>
                
                <div>
                  <img src="/images/wordpress.png" alt="Wordpress" />
                </div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
