const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

async function getData() {
	const res = await fetch("https://randomuser.me/api?results=40&nat=us,fr,ca");

	const data = await res.json();
	console.log(data);

	result.innerHTML = "";
	data.results.forEach((user) => {
		console.log(user);
		const li = document.createElement("li");
		listItems.push(li);
		li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} ,${user.location.country}</p>

        </div>`;

		result.appendChild(li);
	});
}

function filterData(searchTerm) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm)) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});
}
getData();
filter.addEventListener("input", (e) => filterData(e.target.value));
