let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
plus.addEventListener("click", () =>
{
    let myElement = document.querySelector(".count");
    let val = parseInt(myElement.innerText);
    val = val+1;
    myElement.innerText = val;
});
minus.addEventListener("click", () =>
{
    let myElement = document.querySelector(".count");
    let val = parseInt(myElement.innerText);
    val = val-1;
    myElement.innerText = val;
});