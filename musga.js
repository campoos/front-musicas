"use strict"

export async function getMusicas() {
    const url = "http://localhost:8080/v1/controle-musicas/musica"
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    return data.musics
}

