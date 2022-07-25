const ratingState = document.querySelector(".rating-state");
const thankYouSate = document.querySelector(".thank-you-state");
const submitBtn = document.getElementById("submit-rating");
const rateAgain = document.getElementById("submit-rating-again");
const rateState = document.getElementById("rating-star");
const rate = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thankYouSate.classList.remove("hidden")
    ratingState.style.display = "none"
});

rateAgain.addEventListener("click", () => {
    ratingState.style.display = "block"
    thankYouSate.classList.add("hidden")
});

rate.forEach((rates) =>{
    rates.addEventListener("click", () => {
        rateState.innerHTML = rates.innerHTML
    })
});