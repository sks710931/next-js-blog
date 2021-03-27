import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContactForm } from "../components/contact-form/contact-form";
import { Layout } from "../components/layout";
import styles from '../styles/contact.module.scss'

export default function ContactPage(){

  const [showThanks, setShowThanks] = useState(false);
  const successHandler = () => {
    setShowThanks(true);
    alert('success');
  }
  return(
    <Layout>
      <div className={styles.content}>
      <Container className={styles.container}>
        <Row>
          <Col sm={12} md={6}>
            <h2 className={styles.h1}>Contact Me</h2>
            {
              !showThanks ? (<ContactForm onSubmitSuccess={successHandler}/>) : <h4>Thanks for your message :)</h4>
            }
          </Col>
        </Row>
      </Container>
      </div>
      
    </Layout>
  )
}