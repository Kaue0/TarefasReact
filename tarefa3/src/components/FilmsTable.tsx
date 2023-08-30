import { useState } from 'react';
import {Film} from '../interface/Film';
import '../css/App.css'
import React from 'react';
import Message from './Message';

interface Props {
    films: Film[];
}

function FilmsTable({films}: Props) {
    const [search, setSearch] = useState('');
    const searchResult = films.filter((film) =>
        film.title.toLowerCase().includes(search.toLowerCase())
    );
    const checkedFilms = films.filter(film => film.checked);
    const [message, setMessage] = useState('')
    const [messageFlag, setMessageFlag] = useState<boolean>(false)

    const messageWhenChecked = (title: string, checked: boolean) => {
        (checked) ? setMessage(`Você marcou o filme ${title}`) : setMessage(`Você desmarcou o filme ${title}`)
        
        setMessageFlag(true);
      
        setTimeout(() => {
            setMessageFlag(false);
        }, 3500);
    }

    return (
        <div className='main'>
            <h1>Filmes em cartaz: </h1>
            {messageFlag && (
                <Message message={message} />
            )}
            <label htmlFor="filmsearch">Qual filme você procura:</label>
            <input id='filmsearch' type="text" value={search} onChange={e => setSearch(e.target.value)}  placeholder="Digite o filme que você deseja encontrar" />
            {searchResult.length == 0
                ? (<h4>Não obtivemos resultados da sua busca, tente novamente em outro momento</h4>) 
                : (
                    <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Banner</th>
                            <th>Marcar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {searchResult.map((film: Film) => (
                            <tr key={film.id}>
                                <td>{film.id}</td>
                                <td>{film.title}</td>
                                <td>{film.genre}</td>
                                <td><img src={film.image} alt={film.title} width="72" height='128'/></td>
                                <td>
                                    <input type="checkbox"
                                    checked={film.checked} onChange={(e) => {
                                        film.checked = !film.checked
                                        messageWhenChecked(film.title, film.checked)
                                    }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                    
                )}
        </div>
    );
}

export default FilmsTable;