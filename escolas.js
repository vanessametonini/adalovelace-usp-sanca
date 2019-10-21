fetch('http://localhost:3000/')
.then(
    (respostaEmtexto) => {
        console.log(respostaEmtexto);
        
        return respostaEmtexto.json();
    }
)
.then(
    (respostaEmObjeto) => {

        for (let escola of respostaEmObjeto) {
            document
                .querySelector('.escolas')
                .insertAdjacentHTML('afterbegin', construtorEscola(escola))
        }

    }
)


function construtorEscola ({nome, endereco}) {

    return `<li class="col-sm-2 col-md-4 mb-4">
                <article>
                    <h3>${nome}</h3>
                    <address>
                    ${endereco}
                    </address>
                    <button class="btn btn-primary">Matricular-se!</button>
                </article>
            </li>
            `
}

