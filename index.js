const foodItems = [
    {
        id: 1,
        name: "Chicken",
        price: 99,
        description:
            "Chicken Fajitas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, at.",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQt0aBwYwHRqgQgUim4MUdKycRYAqHeUmBg&s",
        isNew: true,
        quantity: 1,
    },
    {
        id: 2,
        name: "Chicken",
        price: 199,
        description:
            "Chicken Fajitas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, at.",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpmd8TQd3iaAIho6YWi_FwWP7ZBbfGeLz3w&s",
        isNew: false,
        quantity: 1,
    },
    {
        id: 3,
        name: "Chicken",
        price: 99,
        description:
            "Chicken Fajitas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, at.",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQt0aBwYwHRqgQgUim4MUdKycRYAqHeUmBg&s",
        isNew: true,
        quantity: 1,
    },
];

const cart = [
    {
        cartId: 1,
        name: "Chicken",
        pricePerUnit: 99, // Price per each item
        quantity: 1, // Initial quantity
        totalPrice: 99, // Total price = pricePerUnit * quantity
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQt0aBwYwHRqgQgUim4MUdKycRYAqHeUmBg&s",
        quantity: 1,
    },
    {
        cartId: 2,
        name: "Chicken",
        pricePerUnit: 199, // Price per each item
        quantity: 1, // Initial quantity
        totalPrice: 199, // Total price = pricePerUnit * quantity
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQt0aBwYwHRqgQgUim4MUdKycRYAqHeUmBg&s",
        quantity: 1,
    },
];

const myFunction = () => {
    alert("Please");
};

//* Daynamic Cards
const itemCardsDiv = document.getElementById("itemCards");

foodItems.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Conditionally add the 'NEW' badge if isNew is true
    const badgeSpan = item.isNew ? `<span class="newBadge">NEW</span>` : "";

    // Create the inner HTML for the card
    cardDiv.innerHTML = `
      ${badgeSpan}
      <div>
        <img class="object-cover w-full h-48 p-0 rounded-s" src="${item.imageUrl}" alt="${item.name}" />
      </div>
      <div class="mt-2">
        <h2 class="text-2xl font-bold">${item.name}</h2>
        <h4 class="text-sm font-bold">${item.price}$/each</h4>
      </div>
      <div class="my-2">
        <p class="text-sm">${item.description}</p>
      </div>
      <div class="cta flex flex-col gap-y-2 mt-2">
        <button class="main-btn w-full" onclick="myFunction()">Add to Order</button>
        <button class="secondary-btn w-full">Customize</button>
      </div>
    `;

    // Append the card to the itemCards div
    itemCardsDiv?.appendChild(cardDiv);
});

//* Daynamic Cart
const cartItemsDiv = document.getElementById("cartItems");
cart.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cartItemCard");

    // Create the inner HTML for the card
    cardDiv.innerHTML = `     
    <div class="itemImage p-2">
        <img class="object-none w-28 h-full" src=${item.imageUrl}
            alt="" />
    </div>
    <div class="font-bold pt-3 w-full">
        <h1 class="text-2xl">${item.name}</h1>
        <h2 class="text-s">${item.pricePerUnit}$/each</h2>
        <div class="quantity-btns">
            <button class="quantity-btn">-</button>
            <span class="itemQuantity">${item.quantity}</span>
            <button class="quantity-btn">+</button>
        </div>
        <div class="totalPrice text-end">${item.totalPrice}</div>
    </div>
    `;

    // Append the card to the itemCards div
    cartItemsDiv?.appendChild(cardDiv);
});

// cart show hidden toggler

const cartContainerDiv = document.getElementById("cartContainer");
