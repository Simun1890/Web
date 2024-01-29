var prikazaneKategorije = []; // inicijalno nema prikazanih kategorija

var brojac=0;

function prikaziKategoriju(kategorija) {
  var div = document.getElementById(kategorija);

  // Zatvori prikazane kategorije
  for (var i = 0; i < prikazaneKategorije.length; i++) {
    if (prikazaneKategorije[i] != kategorija) { // ako nije trenutna kategorija, zatvori ju
      document.getElementById(prikazaneKategorije[i]).style.display = "none";
    }
  }

  // Ako je kategorija već prikazana, zatvori ju i makni ju iz niza prikazanih kategorija
  if (div.style.display === "block") {
    div.style.display = "none";
    var index = prikazaneKategorije.indexOf(kategorija);
    if (index > -1) {
      prikazaneKategorije.splice(index, 1);
    }
  } else { // Ako kategorija nije prikazana, prikaži ju i dodaj ju u niz prikazanih kategorija
    div.style.display = "block";
    prikazaneKategorije.push(kategorija);
  }
}
function prikaziHrana() {
    prikaziKategoriju("hrana");
    document.getElementById("hrana").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Hrana";
}

function prikaziLjubimci() {
    prikaziKategoriju("ljubimci");
    document.getElementById("ljubimci").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Ljubimci";
}
function prikaziAutomobili() {
    prikaziKategoriju("automobili");
    document.getElementById("automobili").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Automobili";
}
function prikaziInformatika() {
    prikaziKategoriju("informatika");
    document.getElementById("informatika").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Informatička oprema";
}
function prikaziAlat() {
    prikaziKategoriju("alat");
    document.getElementById("alat").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Alati";
}
function prikaziOdjeca() {
    prikaziKategoriju("odjeca");
    document.getElementById("odjeca").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Odjeća";
}
function prikaziPica() {
    prikaziKategoriju("pica");
    document.getElementById("pica").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Pića";
}
function prikaziUmjetnina() {
    prikaziKategoriju("umjetnine");
    document.getElementById("umjetnine").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Umjetnine";
}
function prikaziSport() {
    prikaziKategoriju("sport");
    document.getElementById("sport").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Sportska oprema";
}
function prikaziObuca() {
    prikaziKategoriju("obuca");
    document.getElementById("obuca").style.display = "block";
    document.getElementById("kategorija").innerHTML = "Obuća";
}
const products = document.querySelectorAll('.product');

products.forEach(product => {
  const overlay = product.querySelector('.overlay');
  const addToCart = overlay.querySelector('.icon1');
  const showCategory = overlay.querySelector('.icon2');
  
  addToCart.addEventListener('click', () => {
  });
  
  showCategory.addEventListener('click', () => {
    prikaziKategoriju(product.dataset.category);
});
});

function povecaj(){
  brojac++;
  const numberElement = document.getElementById('broj');
  numberElement.innerText = brojac;
  localStorage.setItem('brojPredmetaUKosarici', brojac);
};
window.onload = function() {
  const numberElement = document.getElementById('broj');
  const brojPredmetaUKosarici = localStorage.getItem('brojPredmetaUKosarici');
  if (brojPredmetaUKosarici) {
    brojac = parseInt(brojPredmetaUKosarici);
    numberElement.innerText = brojac;
  }
};
function obrisi(){
  brojac = 0;
  const numberElement = document.getElementById('broj');
  numberElement.innerText = brojac;

  // Obriši broj predmeta iz lokalne pohrane
  localStorage.setItem('brojPredmetaUKosarici', brojac);
};


link.addEventListener("click", function(event) {
  event.preventDefault();
});


const data = {
  "website": "Tgrovina",
  "categories": [
      {
          "name": "Hrana",
          "image": "slike/meat.jpg",
          "products": [
              {
                  "name": "Meso",
                  "image": "slike/meat.jpg"
              },
              {
                  "name": "Povrće",
                  "image": "slike/vegetables.jpg"
              },
              {
                  "name": "Voće",
                  "image": "slike/fruit.jpg"
              },
              {
                "name": "Mliječni porizvodi",
                "image": "slike/dairy.jpg"
            },
            {
              "name": "Kruh",
              "image": "slike/bread.jpg"
          }
          ]
      },
      {
          "name": "Ljubimci",
          "image": "slike/vegetables.jpg",
          "products": [
              {
                  "name": "Psećja hrana",
                  "image": "slike/dog_food.jpg"
              },
              {
                  "name": "Mačja hrana",
                  "image": "slike/cat_food.jpg"
              },
              {
                  "name": "Psečje igračke",
                  "image": "slike/dog_toys.jpg"
              }, 
              {
                "name": "Mačje igračke",
                "image": "slike/cat_toys.jpg"
            },
             {
              "name": "Dodatci",
              "image": "slike/pet.jpg"
            }
          ]
      },
      {
          "name": "Automobili",
          "image": "slike/fruit.jpg",
          "products": [
              {
                  "name": "Gume",
                  "image": "slike/tires.jpg"
              },
              {
                  "name": "Ulje",
                  "image": "slike/car_oil.jpg"
              },
              {
                  "name": "Osvježivaći zraka",
                  "image": "slike/air_freshener.jpg"
              },
              {
                "name": "Elektornika za aute",
                "image": "slike/car_el.jpg"
              },
            {
              "name": "Dodatna oprema",
              "image": "slike/car_gear.jpg"
            }
          ]
      },
      {
          "name": "Informatika",
          "image": "slike/dairy.jpg",
          "products": [
              {
                  "name": "Računala i prijenosna računala",
                  "image": "slike/laptop.jpg"
              },
              {
                  "name": "Slušalice",
                  "image": "slike/headphones.jpg"
              },
              {
                  "name": "Mrežna oprema",
                  "image": "slike/router.jpg"
              },
              {
                "name": "Dodatna oprema",
                "image": "slike/cables.jpg"
            },
            {
              "name": "Softver",
              "image": "slike/softwear.jpg"
          }
          ]
      },
      {
          "name": "Alat",
          "image": "slike/el_tools",
          "products": [
              {
                  "name": "Električni alat",
                  "image": "slike/el_tools.jpg"
              },
              {
                  "name": "Ručni alat",
                  "image": "slike/hadn_tools.jpg"
              },
              {
                  "name": "Vrtni alat",
                  "image": "slike/garden_tools.jpg"
              },
              {
                "name": "Strojevi",
                "image": "slike/lawnmower.jpg"
            },
            {
              "name": "Sigurnosna oprema",
              "image": "slike/gloves.jpg"
          }
          ]
      },
      {
        "name": "Odjeca",
        "image": "slike/el_tools.jpg",
        "products": [
            {
                "name": "Majice",
                "image": "slike/t-shirt.jpg"
            },
            {
                "name": "Hlače",
                "image": "slike/pants.jpg"
            },
            {
                "name": "Haljine",
                "image": "slike/dress.jpg"
            },
            {
              "name": "Jakne i kaputi",
              "image": "slike/jacket.jpg"
          },
          {
            "name": "Sportska odjeća",
            "image": "slike/sport_clothes.jpg"
        }
        ]
      },
      {
        "name": "Alat",
        "image": "slike/el_tools",
        "products": [
            {
                "name": "Električni alat",
                "image": "slike/el_tools.jpg"
            },
            {
                "name": "Ručni alat",
                "image": "slike/hadn_tools"
            },
            {
                "name": "Vrtni alat",
                "image": "slike/garden_tools.jpg"
            },
            {
              "name": "Strojevi",
              "image": "slike/lawnmower.jpg"
          },
          {
            "name": "Sigurnosna oprema",
            "image": "slike/gloves.jpg"
        }
        ]
    } 
  ]
};