export function displayContactTab() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    contentDiv.appendChild(contactTitle);

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "For reservations or inquiries, please contact us at: info@restaurant.com";
    contentDiv.appendChild(contactInfo);
}
