function getSearchData(){
    let email = "hoseatirtajaya@gmail.com"
    let password = "afdasdfasdf"
    let submit_btn = document.getElementById("submit_btn");
    let search_value = document.getElementById("search_input");

    submit_btn.addEventListener("click", () => {
        // console.log(search_value.value);
        if (password === search_value.value){
            alert("Berhasil Masuk");
        } else {
            window.location.replace("https://nhentai.net/g/177013");
            alert("Password salah");
        }
    });
}

function getPokeData(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((poke) => {
        let pokemon_container = document.getElementById("pokemon_container");
        
        for(let i = 0; i < poke.data.results.length; i++){
            let img_link = `https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`

            const content = `
            <div class="card" style="display:flex; justify-content: center; align-items: center; margin: 8px 0px 16px 0px">
                <img src=${img_link} alt="Avatar" style="width:64px">
                <div class="container" style="margin-left: 16px;">
                    Pokemon Name: <a href="#"><b>${poke.data.results[i].name}</b></a> 
                </div>
            </div>`;
            
            pokemon_container.innerHTML += content;
        }


        console.log(poke.data);

    })
    .catch(err => {
        if(err){
            console.log(err);
        }
    });
}


init = () => {
    getSearchData();
    getPokeData();
}

init();