const key = "5dc27c8e82c6c2407fd14cd3ca45ba15";

const butao = document.querySelector(".lupa-pai");

async function buscarCidade(input) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  addTela(dados);
}
function addTela(dados) {
  document.querySelector(".Cidade").innerHTML = dados.name;
  document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp);
  document.querySelector(".previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".Umidade-filha").innerHTML =
    dados.main.humidity + "%";
    document.querySelector(".nuvem").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  console.log(dados);
}

function cliqueiButon() {
  // oa clicar no botão ele pega o valor do input e jogar no busca
  const input = document.querySelector(".input-cidade").value;
  buscarCidade(input);
}

butao.addEventListener("click", cliqueiButon);
