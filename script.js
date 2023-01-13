const filter = document.querySelector('#movie')
const options = filter.querySelectorAll('option')
const list = document.querySelector('.cards__list')


const createCards = (item) => {
    const bDay = item.birthDay ? item.birthDay : 'N/A'
    const deathDay = item.deathDay ? item.deathDay : 'N/A'
    const species = item.species ? item.species[0].toUpperCase() + item.species.slice(1) : 'N/A'
    const gender = item.gender ? item.gender[0].toUpperCase() + item.gender.slice(1) : 'N/A'
    const status = item.status ? item.status[0].toUpperCase() + item.status.slice(1) : 'N/A'
    const card = document.createElement('div')

    list.append(card)
    card.classList.add('card')
    card.innerHTML = `
            <div class=marvels>
            <img class="hero-img" src="${item.photo}" alt="">
            </div>
            <div class="descriptions">
            <h1><span class="hero__name">${item.name}</span></h1>
            <div class="other__info">
            <div>
            <p>Species: <span class="charac__info"><b>${species}</b></span></p>
            <p>Gender: <span class="charac__info"><b>${gender}</b></span></p>
            <p>Actor: <span class="charac__info"><b>${item.actors}</b></span></p>
            </div>
            <div>
            <p>Birthday: <span class="charac__info"><b>${bDay}</b></span></p>
            <p>Deathday: <span class="charac__info"><b>${deathDay}</b></span></p>
            <p>Status: <span class="charac__info"><b>${status}</b></span></p>
            </div>
            </div>
            <div>
            <p>movies:</p> <ul class="movies-list"></ul>
            </div>
            </div>`

    const descriptions = card.querySelector('.descriptions')
    const moviesList = descriptions.querySelector('.movies-list')

    if (item.movies) {
        item.movies?.forEach((item) => {
            const li = document.createElement('li')
            li.textContent = item
            moviesList.append(li)
        })
    } else {
        const li = document.createElement('li')
        li.textContent = 'N/A'
        moviesList.append(li)
    }
}

const getData = () => {
    return fetch('dbHeroes.json')
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
}

getData()
    .then(data => {
        const moviesArr = data.filter(data => data.movies);
        const set = new Set()

        moviesArr?.forEach((card) => {
            set.add(...card.movies)
            console.log(set.add(...card.movies));
        })



        set.forEach((movie) => {
            const option = document.createElement('option')
            option.textContent = movie
            filter.append(option)
        })

        data?.forEach((item) => {
            createCards(item)
        })
    })

filter.addEventListener('input', () => {
    getData()
        .then(data => {
            const cards = document.querySelectorAll('.card')
            const moviesFilter = data.filter(card => card.movies?.includes(filter.options[filter.selectedIndex].textContent))

            cards.forEach((card) => {
                card.remove()
            })

            if (filter.selectedIndex === 0) {
                data.forEach((hero) => {
                    createCards(hero)
                })
            }

            moviesFilter.forEach((hero) => {
                createCards(hero)
            })


        })
})
