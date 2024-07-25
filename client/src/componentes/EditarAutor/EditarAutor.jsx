import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const EditarAutor = ({ actualizarAutorDeLaLista, listaAutores }) => {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    const autorSeleccionado = listaAutores.find((autor) => autor._id === id);
    if (autorSeleccionado) {
      setNombre(autorSeleccionado.nombre);
    }
  }, [id, listaAutores]);


  const actualizar = async (e) => {
    e.preventDefault();
    try {
      const nuevoAutor = { nombre }
      const url = `http://localhost:8080/actualizar/autor/${id}`
      const respuesta = await axios.put(url, nuevoAutor);

      actualizarAutorDeLaLista(respuesta.data)
      navegacion('/')
    }
    catch (error) {
      console.log('Algo salio mal', error)
      setError(error.response.statusText);
    }
  }

  return (
    <>
      <Link to='/'> Home </Link>
      <h2>Editar autor</h2>
      <form onSubmit={actualizar} >
        <div>
          <label htmlFor="nombre">Nombre de autor </label>
          <input type="text" name="nombre" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <button type="button" onClick={() => navegacion(`/`)}>Cancelar</button>
        <button type="submit">Agregar</button>
        <p>{error}</p>
      </form>
    </>
  )
}

export default EditarAutor;