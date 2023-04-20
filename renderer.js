const axios = require('axios');

const add_favorite = document.getElementById("add_favorite");

const analyse = document.getElementById("1");

const analyse2 = document.getElementById("2");

let open_data = 100;
let mydata = 'TSLA';

function get_data(){

    console.log("get_data");

    var data_output = document.getElementById("value");

    var data_input = document.getElementById("name");

    console.log(data_input.value);

    const params = {
        access_key: 'ee30eae1ceb8137ea826a3c560eac5fa'
      }

    //https://marketstack.com/search
    axios.get('http://api.marketstack.com/v1/tickers/'+ data_input.value +'/eod', {params})
        .then(response => {

            const apiResponse = response.data.data.eod[0].open;
            console.log(apiResponse);
            data_output.innerHTML = apiResponse;

        }).catch(error => {

            console.log("error :" + error);
            data_output.innerHTML = error;

    });
}

function add_data(){
    console.log("add_data");
}

function set_favorite(){

    for (var i = 0; i < 10; i++){

        add_favorite.innerHTML += '<button class = "data_favorite" onclick = "add_data()">'

        +'nom : '+ mydata
        +'<br>'
        +'open :' + open_data

        +'</button>'

    }

}

function turn(){

    if (analyse.style.transform === "rotateY(180deg)"){
        analyse.style.transform = "rotateY(0deg)";
    }else{
        analyse.style.transform = "rotateY(180deg)";
    }

}

function turn2(){

    if (analyse2.style.transform === "rotateY(180deg)"){
        analyse2.style.transform = "rotateY(0deg)";
    }else{
        analyse2.style.transform = "rotateY(180deg)";
    }

}