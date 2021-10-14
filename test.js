
let tabPers = [
  {
    nom: "Brusel",
    sex: "h",
    born: 1980,
    n: "fr"
  },
  {
    nom: "Charles",
    sex: "h",
    born: 2001,
    n: "fr"
  },
  {
    nom: "Dupont",
    sex: "f",
    born: 2000,
    n: "fr"
  },
  {
    nom: "Toto",
    sex: "f",
    born: 1991,
    n: "fr"
  },
  {
    nom: "Dupont",
    sex: "h",
    born: 2002,
    n: "fr"
  },
];

let annee = new Date().getFullYear();

function setAge( { nom, born } ) {
  let age = annee - born;
  return { nom, age };
}


function transf(array, fx) {
  let passed = [];
  for(i=0; i<array.length; i++) {
    passed.push(fx(array[i],i,array));
  }
  return passed;

}

let T = transf(tabPers, setAge);
console.log(T)