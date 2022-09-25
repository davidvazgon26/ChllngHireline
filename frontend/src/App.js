import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

let url = 'http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg'

function App() {

  const[libros, setLibros]= useState([]);
  const[tablaLibros, setTablaLibros] = useState([]);
  const[busqueda, setBusqueda] = useState("");

  const peticionGet = async() => {
    await axios.get("http://localhost:3001/api/libros")
    .then(response =>{
      setLibros(Object.values(response.data)[0]);
      setTablaLibros(Object.values(response.data)[0]);
    }).catch(error=>console.log(error));
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaLibros.filter((elemento)=>{
      if(elemento["Book\-Author"].toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento["Book\-Title"].toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento["Year\-Of\-Publication"].toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.Publisher.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setLibros(resultadosBusqueda);
  }




  useEffect(()=>{
    peticionGet();
  },[])

  return (
    <div className="App" >
          {/* style={{ width:"90%"}} */}
      <div className='containerInput'>
        <input
          className='form-control inputBuscar'
          value={busqueda}
          placeholder="Busqueda por Titulo, Autor, Año de publicacion o Editor "
          onChange={handleChange}
        />
        <button className='btn btn-info'>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>

      <div className='table-responsive'>
      <table className='table table-sm table-bordered'>
      <thead className='thead-dark' style={{background:"#212529", color:"white"}}>
        <tr>
          <th>ISBN</th>
          <th>Book Title</th>
          <th>Book Author</th>
          <th>Year of Publication</th>
          <th>Publisher</th>
          <th>Image</th>
        </tr>
      </thead>
      {/* {console.log(libros)} */}
      <tbody>
        {
          
          libros&&
          libros.map(libro=>(
           
            <tr key={libro._id}>
              <td>{libro.ISBN}</td>
              <td>{libro['Book\-Title']}</td>
              <td>{libro['Book\-Author']}</td>
              <td>{libro["Year\-Of\-Publication"]}</td>
              <td>{libro.Publisher}</td>
              <td><img src={libro["Image\-URL\-S"]} alt={libro["Image\-URL\-S"]}/></td>
            </tr>
          ))
        }
      </tbody>

      </table>

      </div>

    
    </div>
  );
}

export default App;
