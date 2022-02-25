//Form
//Validálja a megadott mennyiséget és kiszámolja a rendelés a végső árát
function calcAmount(pricePerProduct, quantityNum) {
    let sauceInput = document.querySelector("select[name='sauce']");
    let extraInput = document.querySelector("input[name='extra']:checked");

    amount = (pricePerProduct + parseInt(extraInput.value) + parseInt(sauceInput.value)) * quantityNum;

    if (quantityNum > 10 || quantityNum < 1 || isNaN(quantityNum)) {
        alert("A megadott menniység nem megfelelő, a darabszámnak 1 és 10 közé kell esnie.");
        amount=0;
    } else if (amount <= 5000) {
        amount = amount + 500;
    }
    return amount;
}

//Validálja a formon bevitt Név mező értékét
function validateFormUserName() {
    let nameInputValue = document.querySelector("input[name='name']").value.trim();

    if (nameInputValue.length <= 0) {
        alert("A Név megadása kötelező!");
        return;
    } else if (nameInputValue.indexOf(" ") <= 0) {
        alert("Kérem adja meg a teljes nevét (Vezetéknékv + Keresztnév)!");
        return;
    }

}

//Validálja a formon bevitt Email mező értékét
function validateFormUserEmail() {
    let emailInputValue = document.querySelector("input[name='email']").value.trim();

    if (emailInputValue.length <= 0) {
        alert("A Email cím megadása kötelező!");
        return;
    } else if (emailInputValue.indexOf("@") <= 0 || emailInputValue.indexOf(".") <= 0) {
        alert("A Email cím formátuma nem megfelelő!");
        return;
    }
}

//Validálja a formon bevitt Szállítási cím mező értékét
function validateFormUserAddress() {
    let addressInputValue = document.querySelector("input[name='address']").value.trim();

    if (addressInputValue.length <= 0) {
        alert("A Szállítási cím megadása kötelező!");
        return;
    } else if (addressInputValue.length <= 10) {
        alert("A Szállítási cím formátuma nem megfelelő!");
        return;
    }
}

//Validálja a formon bevitt Megjegyzés mező értékét
function validateFormUserComment() {
    let commentInputValue = document.querySelector("textarea[name='comment']").value.trim();

    if (commentInputValue.indexOf(">") >= 0 || commentInputValue.indexOf("<") >= 0 || commentInputValue.indexOf("#") >= 0) {
        alert("A megjegyzés nem tartalmazhat bizonyos speciális karaktereket (<, >, #)!")
        return;
    }
}


//Lefuttatja a validációkat és kiírja a felületre a végső árat
function showSumPrice() {
    let price = 1200;
    let showAmount = document.querySelector("span.showAmount");
    let quantityNum = parseInt(document.querySelector("input.quantity").value);

    validateFormUserName()
    validateFormUserEmail()
    validateFormUserAddress()
    validateFormUserComment()
    calcAmount(price, quantityNum)
    showAmount.innerHTML = amount;

}


//Időjárás panel

let dayWeather;
let weatherSale;
let weatherMatrix = [["monday", 0], ["tuesday", 15], ["wednesday", 14], ["thursday", 20], ["friday", 38], ["saturday", 45], ["sunday", 52]];
let saleMatrix = [[0, "Ma forró csokit is árusítunk!"],[15, "Melegedj át egy teával nálunk!"],[20, "Ma finom sütivel várunk!"],[25, "Ma fagyit is kínálunk!"],[50, "Hűsítsd le magad egy jéghideg limonádéval!"]];

function getDayWeather(){
    let selectedDay = document.querySelector("select[name='days']");
    let showWeather = document.querySelector("span.weather");

    weatherMatrix.forEach(element => {
        dayWeather = element[0] == selectedDay.value ? element[1] : dayWeather;
    showWeather.innerHTML = dayWeather; 
    });


}

function getWeatherSale (){
    let showSale = document.querySelector("span.weatherSale");

    saleMatrix.forEach(element => {
        weatherSale= element[0]<=dayWeather ? element[1] : weatherSale;
    showSale.innerHTML = weatherSale; 
    })
}

function getWeatherAndSale(){
    getDayWeather()
    getWeatherSale ()
}