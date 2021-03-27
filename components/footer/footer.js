import classes from './footer.module.scss';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <Container className={classes.container}>
        <p>2021 &#169; All Rights Reserved. Shivam Singh</p>
      </Container>
    </div>
  );
};