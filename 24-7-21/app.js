const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let input_id = document.querySelector('.input_id');
let poke_img = document.querySelector('.poke_img');
let namepoke = document.querySelector('.namepoke');

function getdata(){
    console.log(input_id.value);
    axios.get(apiUrl + input_id.value).then(function(response){
        namepoke.innerHTML = response.data.forms[0].name;
        poke_img.src = response.data.sprites.front_default;
    })
}

let button_submit = document.querySelector('.button-submit');
button_submit.addEventListener('click',getdata); 