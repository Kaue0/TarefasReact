import React, { useEffect, useState } from 'react';
import './css/App.css';
import { getFilmData } from './Hooks/getFilmData';
import { Film } from './interface/Film';
import FilmsTable from "./components/FilmsTable"
function App() {

  const [films, setFilms] = useState<Film[]>([])


  useEffect(() => {
      getFilmData().then((res) => {
        setFilms(res)
      })
  }, [])

  return (
    <div className="App">
            {<FilmsTable films={films}/>}
    </div>
  );
}

export default App;
