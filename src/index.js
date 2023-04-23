// write your code here
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/ramens")
        .then(res => res.json())
        .then(ramens => {
            ramens.forEach(ramen => {
                getAllRamens(ramen);
            });
            addNewRamen();
        });
});

function getAllRamens(ramen) {
    const ramenImgDiv = document.getElementById("ramen-menu");
    const ramenImg = document.createElement("img");
    ramenImg.setAttribute("src", ramen.image);
    ramenImgDiv.appendChild(ramenImg);

    displayRamen(ramenImg, ramen);
}

function displayRamen(selectedRamen, ramen) {
    selectedRamen.addEventListener("click", () => {
        const ramenImgDisplay = document.getElementById("selected-ramen-img");
        const ramenNameDisplay = document.getElementById("selected-ramen-name");
        const ramenRestDisplay = document.getElementById("selected-ramen-restaurant");
        const ramenRatingDisplay = document.getElementById("rating-display");
        const ramenCommentDisplay = document.getElementById("comment-display");

        ramenImgDisplay.setAttribute("src", ramen.image);
        ramenNameDisplay.textContent = ramen.name;
        ramenRestDisplay.textContent = ramen.restaurant;
        ramenRatingDisplay.textContent = ramen.rating;
        ramenCommentDisplay.textContent = ramen.comment;
    })
}

function addNewRamen() {
    const newRamen = document.getElementById("new-ramen");
    newRamen.addEventListener("submit", event => {
        event.preventDefault();
        const ramenName = event.target[0].value;
        const ramenRestaurant = event.target[1].value;
        const ramenImage = event.target[2].value;
        const ramenRating = event.target[3].value;
        const ramenComment = event.target[4].value;

        function Ramen(name, restaurant, image, rating, comment) {
            this.name = name;
            this.restaurant = restaurant;
            this.image = image;
            this.rating = rating;
            this.comment = comment;
        }

        const submitRamen = new Ramen(ramenName, ramenRestaurant, ramenImage, ramenRating, ramenComment);
        getAllRamens(submitRamen);
    })
}