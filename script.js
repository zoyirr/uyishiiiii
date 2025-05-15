const select = document.getElementById("select");
const input = document.getElementById("input");
const select2 = document.getElementById("select2");
const box = document.getElementById("box");
const card = document.getElementById("card");

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  ish(data);
}


function ish(mahsulot) {
  box.innerHTML = "";
  mahsulot.forEach(o=> {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${o.image}" alt="">
            <h2>${o.title}</h2>
            <p class="p">Kategoriya:${o.category}</p>
            <p class="p2">Narxi:${o.price}</p>
    `;
    box.appendChild(card);
  });
}

setTimeout(getData, 1000);

input.addEventListener("input", function () {
  const value = input.value;
  fetch(`https://fakestoreapi.com/products`)
  fetch(`ALL`)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
    

      ish(filteredData);

    });
});

select.addEventListener("change", function () {
  const value = select.value;
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      ish(filteredData);
    });

});

select2.addEventListener("change", function () {
  const value = select2.value;
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      ish(filteredData);
    });
});

