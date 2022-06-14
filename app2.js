const allTotal = document.querySelector(".g_total p");
console.log(allTotal);


document.querySelectorAll('.op').forEach(e => e.addEventListener("click", islem));

function islem(e) {

    if (e.target.classList.contains('plus')) {
        let amount = e.target.previousElementSibling;
        amount.innerText = Number(amount.innerText) + 1;
        const price1 = e.target.closest(".container_items").querySelector(".price").innerText.slice(1);
        let cost = e.target.parentElement.nextElementSibling.lastElementChild;
        cost.innerText = "$" + (parseFloat(price1) * parseFloat(amount.innerText)).toFixed(2)
        console.log(cost);
        allTotal.innerText = "$" + (parseFloat(allTotal.innerText.slice(1)) + parseFloat(price1)).toFixed(2)

    } else {
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
}