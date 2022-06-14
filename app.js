//? Aşağıda yapılan işlem sadece tek div olduğunda div içinde bulanan değerler için geçerli 
// //* plus button is selected with plus 
// const plus = document.querySelector(".plus");
// console.log(plus);

// //* minus button is selected with minus
// const minus = document.querySelector(".minus");
// console.log(minus);

// //* between plus and minus that is 0 or 1 .. etc is selected with quant
// const quant = document.querySelector(".quantitiy_item");
// console.log(quant);

// //* cost kısmındaki miktarı seçtik
// let cost = document.querySelector(".subtotal__amount");
// console.log(cost);

// //* pricee ile ürün fiyat miktarı seçildi
// const pricee = document.querySelector(".price").innerText.slice(1);
// console.log(pricee);

//? Aşağıda yapılan işlem sadece tek div olduğunda div içinde bulanan değerler için geçerli 

// plus.addEventListener("click", () => {
//     quant.innerText = Number(quant.innerText) + 1;
//     cost.innerText = "$" + (parseFloat(pricee) * parseFloat(quant.innerText)).toFixed(2);
// });

// minus.addEventListener("click", () => {
//     if (quant.innerText > 0) {
//         quant.innerText = Number(quant.innerText) - 1;
//         cost.innerText = "$" + (parseFloat(pricee) * parseFloat(quant.innerText)).toFixed(2);
//     }
// });                                   


//* all plus button is selected with plus
const plus = document.querySelectorAll(".plus");
console.log(plus);

//* all minus button is selected with minus
const minus = document.querySelectorAll(".minus");
console.log(minus);
//* between plus and minus that is 0 or 1 .. etc is selected with quant
const quant = document.querySelectorAll(".quantitiy_item");

//* pricee ile ürün fiyat miktarı seçildi
const pricee = document.querySelectorAll(".price");
console.log(pricee);

//* cost kısmındaki miktarı seçtik
// let cost = document.querySelectorAll(".subtotal__amount");
// console.log(cost);

const allTotal = document.querySelector(".g_total p");
console.log(allTotal);


plus.forEach((element) => {
    element.addEventListener("click", add)
});
function add(e) {
    let amount = e.target.previousElementSibling;
    amount.innerText = Number(amount.innerText) + 1;
    const price1 = e.target.closest(".container_items").querySelector(".price").innerText.slice(1);
    let cost = e.target.parentElement.nextElementSibling.lastElementChild;
    cost.innerText = "$" + (parseFloat(price1) * parseFloat(amount.innerText)).toFixed(2)
    console.log(cost);
    allTotal.innerText = "$" + (parseFloat(allTotal.innerText.slice(1)) + parseFloat(price1)).toFixed(2)
}

minus.forEach((element) => {
    element.addEventListener("click", azalt)
})
function azalt(e) {
    let amount = e.target.nextElementSibling;
    if (amount.innerText > 0) {
        amount.innerText = Number(amount.innerText) - 1;
        const price1 = e.target.closest(".container_items").querySelector(".price").innerText.slice(1);
        let cost = e.target.parentElement.nextElementSibling.lastElementChild;
        cost.innerText = "$" + (parseFloat(price1) * parseFloat(amount.innerText)).toFixed(2)
        console.log(cost);
        allTotal.innerText = "$" + (parseFloat(allTotal.innerText.slice(1)) - parseFloat(price1)).toFixed(2)
    }
}



//? herkutunun içinde cost --- yani toplam gözüktüğü için farklı bir algoritma gerekiyor