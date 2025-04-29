"use strict"

import { getMusicas } from "./musga.js"

function criarCard(musica) {
    const container = document.getElementById("container")

    // Formatar data de lançamento
    const data = new Date(musica.data_lancamento)
    const dataFormatada = data.toLocaleDateString('pt-BR', {
        timeZone: 'UTC' // evita problemas com fuso horário
    })

    // Formatar duração no formato mm:ss
    const duracao = new Date(musica.duracao)
    const minutos = String(duracao.getUTCMinutes()).padStart(2, '0')
    const segundos = String(duracao.getUTCSeconds()).padStart(2, '0')
    const duracaoFormatada = `${minutos}:${segundos}`

    const card = document.createElement("div")
    card.classList.add("cardMusica")
    card.innerHTML = `
        <h1>${musica.nome}</h1>
        <div class="details">
            <p><strong>Data de Lançamento:</strong> ${dataFormatada}</p>
            <p><strong>Duração:</strong> ${duracaoFormatada}</p>
            <a href="${musica.link}" target="_blank">Ouça a música</a>
        </div>
    `
    container.appendChild(card)
}

async function carregarmusicas() {
    const musicas = await getMusicas()
    musicas.forEach(criarCard)
}

carregarmusicas()
