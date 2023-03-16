import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        
        <div>
            <Spinner animation="border" variant="success" ></Spinner>
            <h1>Cargando...</h1>
        </div>
    );
}

export default Loader;