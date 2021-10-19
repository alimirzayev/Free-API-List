let row = document.getElementById("row")

async function freeApi() {
    const dataFetch = await fetch("./api.json", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            mode: 'no-cors',
        }
    })

    const data = await dataFetch.json()
    console.log(data);
    data.entries.forEach(element => {
        console.log(element);
        const cards = document.createElement('div')
        cards.classList.add('col-lg-4')
        cards.innerHTML = `
        <div class="card text-white bg-success mb-3" col-lg-4 col-md-4 col-sm-12 col-xs-12 style="max-width: 18rem;">
            <div class="card-header">API's Name: ${element.API}</div>
                <div class="card-body">
                    <h5 class="card-title">Category: ${element.Category}</h5>
                        <p class="card-text">Description: ${element.Description}</p>
                        <a target="_blank" href="${element.Link}"><button class="btn btn-dark">GET API</button></a>
            </div>
        </div>
        `
        row.appendChild(cards)

    });
}

freeApi()