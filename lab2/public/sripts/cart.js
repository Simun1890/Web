let listL = document.getElementById("lijevalista");
let listR = document.getElementById("desnalista");

let brojac_proizvoda = {};

const url = "/cart/getAll";
fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Neuspješan zahtjev");
        }
    })
    .then(data => {
        console.log(data);
        brojac_proizvoda = data;
        updateKosaricaUI();
    })
    .catch(error => {
        console.log(error.message);
    });

let broj_u_kosarici = document.getElementById("brojukosarici");
let suma = 0;

function updateKosarica(proizvod, kolicina) {
    brojac_proizvoda[proizvod] = kolicina;
    suma = Object.values(brojac_proizvoda).reduce((acc, curr) => acc + curr, 0);
    broj_u_kosarici.textContent = suma;
}

function obrisiProizvod(proizvod) {
    delete brojac_proizvoda[proizvod];
}

function updateKosaricaUI() {
    let i = 1;
    for (const proizvod in brojac_proizvoda) {
        let li = document.createElement("li");
        li.className = "proizvod";
        li.id = "imeeee" + i;
        li.textContent = proizvod;
        listL.appendChild(li);

        let li2 = document.createElement("li");
        li2.className = "proizvod";
        li2.id = "kolicinaaaa" + i;
        listR.appendChild(li2);

        let kolicina = brojac_proizvoda[proizvod];

        let span = document.createElement("span");
        span.textContent = kolicina;
        li2.appendChild(span);

        let b2 = document.createElement("button");
        b2.className = "gumb";
        b2.id = "gumbminus" + i;
        b2.textContent = '-';
        li2.appendChild(b2);

        let b1 = document.createElement("button");
        b1.className = "gumb";
        b1.id = "gumbplus" + i;
        b1.textContent = '+';
        li2.appendChild(b1);

        b1.addEventListener('click', () => {
            const url1 = '/cart/add/' + encodeURIComponent(proizvod);
            fetch(url1)
                .then(response => {
                    if (response.ok) {
                        brojac_proizvoda[proizvod]++;
                        span.textContent = brojac_proizvoda[proizvod];
                        updateKosarica(proizvod, brojac_proizvoda[proizvod]);
                    } else {
                        throw new Error("Neuspješan zahtjev");
                    }
                })
                .catch(error => {
                    console.log(error.message);
                });
        });

        b2.addEventListener('click', () => {
            const url1 = '/cart/remove/' + encodeURIComponent(proizvod);
            fetch(url1)
                .then(response => {
                    if (response.ok) {
                        brojac_proizvoda[proizvod]--;
                        span.textContent = brojac_proizvoda[proizvod];
                        if (brojac_proizvoda[proizvod] === 0) {
                            obrisiProizvod(proizvod);
                        }
                        updateKosarica(proizvod, brojac_proizvoda[proizvod]);
                    } else {
                        throw new Error("Neuspješan zahtjev");
                    }
                })
                .catch(error => {
                    console.log(error.message);
                });
        });

        i++;
    }
}
