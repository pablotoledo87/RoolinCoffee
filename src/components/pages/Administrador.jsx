import { Button, Table } from "react-bootstrap";
import {Link} from "react-router-dom"


const Administrador = () => {
    return (
      <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Button variant="primary">
            <i className="bi bi-file-earmark-plus"></i>
        </Button>
        <hr/>
      </div>
      <Table responsive striped bordered hover>
      <thead>
        
        <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
            
        </tr>
      </thead>
      <tbody>
        <h2>hola mundo</h2>
      </tbody>
      </Table>
      </section>
    );
};

export default Administrador;