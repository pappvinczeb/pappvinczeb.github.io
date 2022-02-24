function calcAmont() {
    let price = 1200;
    let extraInput = document.querySelector("input[name='extra']:checked");
    let quantityInput = document.querySelector("input.quantity");
    let sauceInput = document.querySelector("select[name='sauce']")
    let showAmount = document.querySelector("span.showAmount");
    let amount = 0;
    let quantityNum = parseInt(quantityInput.value);
    let nameInputValue = document.querySelector("input[name='name']").value.trim();
    let emailInputValue = document.querySelector("input[name='email']").value.trim();
    let addressInputValue = document.querySelector("input[name='address']").value.trim();
    let commentInputValue = document.querySelector("textarea[name='comment']").value.trim();

    if (nameInputValue.length <= 0) {
        alert("A Név megadása kötelező!");
        return;
    }

    if (nameInputValue.indexOf(" ")<= 0) {
        alert("Kérem adja meg a teljes nevét (Vezetéknékv + Keresztnév)!");
        return;
    }

    if (emailInputValue.length <= 0) {
        alert("A Email cím megadása kötelező!");
        return;
    } else if (emailInputValue.indexOf("@") <= 0 || emailInputValue.indexOf(".") <= 0) {
        alert("A Email cím formátuma nem megfelelő!");
        return;
    }

    if (addressInputValue.length <= 0) {
        alert("A Szállítási cím megadása kötelező!");
        return;
    } else if (addressInputValue.length <= 10) {
        alert("A Szállítási cím formátuma nem megfelelő!");
        return;
    }

    if (commentInputValue.indexOf(">") >= 0 || commentInputValue.indexOf("<") >= 0 || commentInputValue.indexOf("#") >= 0) {
        alert("A megjegyzés nem tartalmazhat bizonyos speciális karaktereket (<, >, #)!")
        return;
    }

    if (quantityNum > 10 || quantityNum < 1 || isNaN(quantityNum)) {
        alert("A megadott menniység nem megfelelő, a darabszámnak 1 és 10 közé kell esnie.");
    } else {
        amount = (price + parseInt(extraInput.value) + parseInt(sauceInput.value)) * quantityNum;
    }

    showAmount.innerHTML = amount;
}