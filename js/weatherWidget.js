
//Időjárás panel

let dayWeather;
let weatherSale;
const weatherMatrix = [["monday", 7], ["tuesday", 12], ["wednesday", 14], ["thursday", 67], ["friday", 38], ["saturday", 45], ["sunday", 52]];
const saleMatrix = [[0, "Ma forró csokit is árusítunk!"],[15, "Melegedj át egy teával nálunk!"],[20, "Ma finom sütivel várunk!"],[25, "Ma fagyit is kínálunk!"],[50, "Hűsítsd le magad egy jéghideg limonádéval!"]];
let smallest=parseInt(weatherMatrix[0].slice(1,2));
let biggest=parseInt(weatherMatrix[0].slice(1,2));
let average=0;

//Adott napi hőmérsékletet adja vissza
function getDayWeather(){
    let selectedDay = document.querySelector("select[name='days']");
    let showWeather = document.querySelector("span.weather");

    weatherMatrix.forEach(element => {
        dayWeather = element[0] == selectedDay.value ? element[1] : dayWeather;
    showWeather.innerHTML = dayWeather; 
    });
}

//Adott hőmérséklethez tartozó napi akciót adja vissza
function getWeatherSale (){
    let showSale = document.querySelector("span.weatherSale");

    saleMatrix.forEach(element => {
        weatherSale= element[0]<=dayWeather ? element[1] : weatherSale;
    showSale.innerHTML = weatherSale; 
    })
}



function getMinTemperature(){
    let showMinTemp = document.querySelector("span.temperatureMin")
    for(let i=0; i < weatherMatrix.length; i++){
        if(parseInt(weatherMatrix[i].slice(1,2)) < smallest){
            smallest = parseInt(weatherMatrix[i].slice(1,2))
        }
    }
    showMinTemp.innerHTML = smallest
}

function getMaxTemperature(){
    let showMinTemp = document.querySelector("span.temperatureMax")
    for(let i=0; i < weatherMatrix.length; i++){
        if(parseInt(weatherMatrix[i].slice(1,2)) > biggest){
            biggest = parseInt(weatherMatrix[i].slice(1,2))
        }
    }
    showMinTemp.innerHTML = biggest
}

function getAverageTemperature(){
    let showAverageTemp = document.querySelector("span.temperatureAverage")
    let sum=0;
    let piece=1;

    for(let i=0; i < weatherMatrix.length; i++){
        sum += parseInt(weatherMatrix[i].slice(1,2));
    }

    for(let i=0; i < weatherMatrix.length; i++){
        piece ++;
    }
    average=sum/(piece-1)
    showAverageTemp.innerHTML = parseInt(average)

}


function getWeatherAndSale(){
    getDayWeather()
    getWeatherSale ()
    getMinTemperature ()
    getMaxTemperature()
    getAverageTemperature()
}