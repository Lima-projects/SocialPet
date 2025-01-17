const main = document.querySelector('main');
let currentPage = 1;


function createCard(article) {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('strong');
    const descriptionElement = document.createElement('p');
    const imageElement = document.createElement('img');
    titleElement.textContent = article.title;
    descriptionElement.textContent = article.description;
    imageElement.src = article.social_image;
    articleElement.appendChild(imageElement)
    articleElement.appendChild(titleElement)
    articleElement.appendChild(descriptionElement)
    return articleElement;
}

function createCards(articles) {
    return articles.Map((article) => createCards(article))
}

async function getPosts() {
    const response = await fetch(`https://dev.to/api/articles?per_page=10&page=${currentPage}`);
    const data = await response.json();
    const cards = createCards(data);
    cards.forEach((card) => {
    main.appendChild(card)

    })


}
getPosts()
