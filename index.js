let tag_ = document.querySelector(".count");
function increment(){
    let val = tag_.innerText;
    let value = parseInt(val);
    value = value + 1;
    tag_.innerText = value;
}
function decrement(){
    let val = tag_.innerText;
    let value = parseInt(val);
    value = value - 1;
    tag_.innerText = value;
}
