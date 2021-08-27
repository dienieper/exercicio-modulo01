//Exercício 01

var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

console.log(
  `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com o nº ${endereco.numero}`
);

//Exercício 02

function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
pares(32, 321);

//Exercício 03

function temHabilidade(skills) {
  if (skills.indexOf("Javascript") !== 1) {
    return console.log("Tem a skill");
  } else {
    console.log("Não tem a skill");
  }
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

//Esercício 04

function experiencia(anos) {
  switch (true) {
    case anos >= 0 && anos <= 1:
      console.log(`Você tem ${anos} anos de exp, seu nível é: Iniciante`);
      break;
    case anos >= 1 && anos <= 3:
      console.log(`Você tem ${anos} anos de exp, seu nível é: Intermediário`);
      break;
    case anos >= 3 && anos <= 6:
      console.log(`Você tem ${anos} anos de exp, seu nível é: Avançado`);
      break;
    default:
      console.log(`Você tem ${anos} anos de exp, seu nível é: Jedi Master `);
      break;
  }
}

var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

//Exercício 05

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

for (var usuario of usuarios) {
  console.log(
    "O " +
      usuario.nome +
      " possui as habilidades: " +
      usuario.habilidades.join(", ")
  );
}
