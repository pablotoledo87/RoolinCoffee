import { Container, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        className="banner img-fluid"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
          <p>hola mundo</p>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
