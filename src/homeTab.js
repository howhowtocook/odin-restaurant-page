export function displayHomeTab() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Welcome to Our Restaurant!";
    contentDiv.appendChild(homeTitle);

    const restaurantImage = document.createElement("img");
    restaurantImage.src = "https://qatarwanderer.com/wp-content/uploads/2023/06/Argan-Moroccan-restaurant.jpg"; // Update with actual image path
    restaurantImage.alt = "Restaurant Image";
    contentDiv.appendChild(restaurantImage);

    const description1 = document.createElement("p");
    description1.textContent = "We are delighted to welcome you to our restaurant, where culinary excellence meets warm hospitality. Located in the heart of [City Name], our restaurant offers a delightful dining experience that tantalizes your taste buds and leaves you craving for more.";
    contentDiv.appendChild(description1);

    const description2 = document.createElement("p");
    description2.textContent = "Our talented chefs craft each dish with passion and creativity, using only the finest ingredients sourced locally and internationally. Whether you're craving for classic favorites or eager to explore innovative flavors, our menu has something for everyone.";
    contentDiv.appendChild(description2);

    const description3 = document.createElement("p");
    description3.textContent = "Join us for a memorable dining experience, where every bite tells a story and every moment is cherished. Make a reservation today and let us take you on a culinary journey you'll never forget!";
    contentDiv.appendChild(description3);
}
