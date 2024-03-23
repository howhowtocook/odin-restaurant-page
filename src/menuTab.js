export function displayMenuTab() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    contentDiv.appendChild(menuTitle);

    const menuList = document.createElement("ul");

    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Item 1: Description of Item 1";
    menuList.appendChild(menuItem1);

    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "Item 2: Description of Item 2";
    menuList.appendChild(menuItem2);

    // Add more menu items as needed...

    contentDiv.appendChild(menuList);
}