
const input = document.getElementById("cityInput");
const suggestionsBox = document.getElementById("suggestions");

let timeout;

input.addEventListener("input", () => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        const query = input.value;

        if (query.length < 2) {
            suggestionsBox.innerHTML = "";
            return;
        }

        const res = await fetch(`/searchCities?q=${query}`);
        const data = await res.json();

        suggestionsBox.innerHTML = "";

        data.forEach(city => {
            const li = document.createElement("li");
            li.textContent = `${city.name}, ${city.country}`;

            li.onclick = () => {
                input.value = city.name;
                suggestionsBox.innerHTML = "";
            };

            suggestionsBox.appendChild(li);
        });

    }, 300); // ⏱ delay
});