class CardComponente extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build() {
        //criação dos elementos HTML
        const article = document.createElement('article');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const span = document.createElement('p');
        const paragrafo = document.createElement('p');
        const botao = document.createElement('a');

        //Setando atributos.
        article.className = 'content__card';
        img.className = 'card__imagem';
        div.className = 'card__text';
        title.className = 'card__title';
        span.className = 'card__paragraph card__paragraph--gray';
        paragrafo.className = 'card__paragraph';
        botao.className = 'card__buttom';
        botao.href = '#'  

        //Valores dinamicos
        img.src = this.getAttribute('src');
        img.alt = this.getAttribute('alt');
        title.innerText = this.getAttribute('titulo');
        span.innerText = this.getAttribute('span');
        paragrafo.innerText = this.getAttribute('conteudo')
        botao.innerText = this.getAttribute('botao');

        //Adição dos conponentes.
        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(title);
        div.appendChild(span);
        div.appendChild(paragrafo);
        div.appendChild(botao);

        return article
    }

    style() {
        const style = document.createElement('style');
        style.innerText = `
        .content__card {
            width: 100%;
            background-color: var(--background_heading);
            display: flex;
            flex-direction: column;
        }
        
        .card__imagem {
            width: 100%;
        }
        
        .card__text {
            padding: 1.5em 1em;
            display: flex;
            flex-direction: column;
            gap: .8em;
        }
        
        .card__paragraph--gray {
            color: var(--background_email)
        }
        
        .card__buttom {
            text-decoration: none;
            align-self: flex-start;
            padding: 0.7em 1em;
            border: none;
            background-color: var(--background_heading);
            color: var(--background_main);
            transition: background-color .3s;
        }
        
        .card__buttom:hover {
            background-color: var(--orange);
        }`

        return style
    }
}

customElements.define('card-news', CardComponente);

/* <article class="content__card">
    <img class="card__imagem" src="./assets/img/sea-164989_1280.jpg"
        alt="Imagem de um praia a noitecendo">
        <div class="card__text">
            <h3 class="card__title">Weast Coast, Normay</h3>
            <p class="card__paragraph"><span class="card__paragraph--gray">Roundtrip from $79</span></p>
            <p>Praesent tincidunt sed tellus ut rutruim sed vitae justo</p>
            <a href="" class="card__buttom">Buy Tickets</a>
        </div>
</article> */