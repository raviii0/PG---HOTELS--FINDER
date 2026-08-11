// ===============================
// PG & Hotels Finder
// Search System
// ===============================

const searchButton = document.getElementById("searchButton");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const location =
            document.getElementById("locationInput").value
            .trim()
            .toLowerCase();

        const type =
            document.getElementById("typeFilter").value;

        const price =
            document.getElementById("priceFilter").value;

        const cards =
            document.querySelectorAll(".property-card");

        const noResults =
            document.getElementById("noResults");

        let found = 0;


        cards.forEach(function (card) {

            const cardLocation =
                card.dataset.location.toLowerCase();

            const cardType =
                card.dataset.type;

            const cardPrice =
                Number(card.dataset.price);


            // Location Match
            const locationMatch =
                location === "" ||
                cardLocation.includes(location);


            // Type Match
            const typeMatch =
                type === "all" ||
                cardType === type;


            // Price Match
            let priceMatch = true;


            if (price === "5000") {

                priceMatch =
                    cardPrice < 5000;

            }
            else if (price === "10000") {

                priceMatch =
                    cardPrice >= 5000 &&
                    cardPrice <= 10000;

            }
            else if (price === "10001") {

                priceMatch =
                    cardPrice > 10000;

            }


            // Final Result
            if (
                locationMatch &&
                typeMatch &&
                priceMatch
            ) {

                card.style.display = "block";

                found++;

            } else {

                card.style.display = "none";

            }

        });


        // No Results Message

        if (found === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    });

}