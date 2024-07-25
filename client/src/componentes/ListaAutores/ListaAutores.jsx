import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListaAutores = ({ listaAutores, eliminarAutorDeLaLista }) => {
  const navegacion = useNavigate();

  const eliminarAutor = async (autor) => {
    const url = `http://localhost:8080/eliminar/autor/${autor._id}`
    await axios.delete(url);

    eliminarAutorDeLaLista(autor._id);
  }

  return (
    <>
      <h3>Lista de autores</h3>
      <table>
        <thead>
          <tr>
            <th>Autores</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaAutores.map((autor, index) => (
            <tr key={index}>
              <td>{autor.nombre}</td>
              <td>
                <button onClick={() => eliminarAutor(autor)}>Eliminar</button>
                <button onClick={() => navegacion(`/editar/autor/${autor._id}`)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </>
  )
}

export default ListaAutores;