import { Film } from "../interface/Film"

export async function getFilmData(): Promise<Film[]> { 

    return fetch("/json/filmes.json")
        .then(res => res.json())
        .then((films: Film[]) => {
            return films.map((film: any) => ({
                id: film.id,
                title: film.nome,
                genre: film.genero,
                image: film.imagem
            }))
        })
}