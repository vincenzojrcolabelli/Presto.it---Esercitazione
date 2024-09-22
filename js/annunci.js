let cont_annunci = document.querySelector('#cont_annunci');

let filtra_city = document.querySelector('#filtra_city');

let filtra_prezzo = document.querySelector('#filtra_prezzo');

fetch('./dati/elenco_immobili.json')
    .then(response => response.json())
    .then(data =>{

        function creaCardAnnunci(array_annunci) {

            cont_annunci.innerHTML = '';
            
            array_annunci.forEach(annuncio => {
                
                let colonna = document.createElement('div');
                
                colonna.classList.add('col-12','col-md-6', 'mb-4');

                colonna.innerHTML = `
                <div class="card">
                        <img class="img-fluid mh-100" src="${annuncio.immagine}">
                        <div class="card-body">
                            <a href="#" class="card-title titoli-card">${annuncio.city}</a>
                        <h5 class="my-3 fw-light">${annuncio.prezzo} €</h5>
                        <p class="fw-lighter mb-3">${annuncio.metri_quadrati}m2 - ${annuncio.numero_camere} locali</p>
                        <a href="#" class="btn button-color">Contatta</a>
                        </div>
                    </div>         
                `;
                cont_annunci.appendChild(colonna);
            });
        }

        creaCardAnnunci(data);



        function creaRadioAnnunci() {

            let elencoUnicheCity = [];

            data.forEach((annuncio) => {

                if (!elencoUnicheCity.includes(annuncio.city)){
                    elencoUnicheCity.push(annuncio.city)
                }
            })

            elencoUnicheCity.forEach((singola_city) =>{

                let div = document.createElement('div');
                div.classList.add('form-check');

                div.innerHTML = `
                <input class="form-check-input" type="radio" name="sel_citta" id="${singola_city}">
                <label class="form-check-label" for="${singola_city}">${singola_city}
                </label>
                
                `;

                filtra_city.appendChild(div);

            })
            
        }

        creaRadioAnnunci();

        function filtraCity(city) {

            if (city == 'all') {
                creaCardAnnunci(data)
            } else {
                let annunciFiltrati = data.filter(annuncio => annuncio.city == city);
                creaCardAnnunci(annunciFiltrati);
            }
            
        }

        let radioCity = document.querySelectorAll('.form-check-input');

        radioCity.forEach(singola_radio =>{

            singola_radio.addEventListener('click', () => {
                let city_selezionata = singola_radio.id;

                filtraCity(city_selezionata);
            })
        })



    });



        

 
