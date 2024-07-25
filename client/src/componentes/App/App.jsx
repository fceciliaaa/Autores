
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'
import ListaAutores from '../ListaAutores/ListaAutores'
import FormAutor from '../FormAutor/FormAutor'
import EditarAutor from '../EditarAutor/EditarAutor'


const App = () => {

  const [listaAutores, setListaAutores] = useState([]);

  useEffect(() => {
    const verLista = async () => {
      const url = 'http://localhost:8080/autores'
      const respuesta = await axios.get(url);
      setListaAutores(respuesta.data)
    }
    verLista();
  }, []);

  const agregarNuevoAListaDeAutor = (nuevoAutor) => {
    setListaAutores([...listaAutores, nuevoAutor])
  }

  const eliminarAutorDeLaLista = (_id) => {
    const listaTemporal = listaAutores.filter(autor => autor._id !== _id);
    setListaAutores(listaTemporal);
  }

  const actualizarAutorDeLaLista = (autorActualizado) => {
    const listaActualizada = listaAutores.map((autor) =>
      autor._id === autorActualizado._id ? autorActualizado : autor
    );
    setListaAutores(listaActualizada);
  }

  return (
    <>

      <h1>Autores favoritos</h1>


      <Routes>
        <Route path='/' element={
          <>
            <Link to='/nuevo/autor'> Agregar nuevo autor </Link>
            <ListaAutores listaAutores={listaAutores} eliminarAutorDeLaLista={eliminarAutorDeLaLista} />
          </>
        }
        />
        <Route path='/nuevo/autor' element={<FormAutor agregarNuevoAListaDeAutor={agregarNuevoAListaDeAutor} />} />
        <Route path='/editar/autor/:id' element={<EditarAutor actualizarAutorDeLaLista={actualizarAutorDeLaLista} listaAutores={listaAutores} />} />

      </Routes>

    </>
  )
}

export default App
