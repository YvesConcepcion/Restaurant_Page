// import { container } from "webpack";
import heroImg from "./assets/hero.png";

export const createElement = (type, content, parentID) => {
  const element = document.createElement(type);
  element.innerHTML = content;
  document.getElementById(parentID).appendChild(element);

  return {
    type,
    content,
    addClass(newClass) {
      element.classList.add(newClass);
    },
  };
};

export function createHeader() {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Nigiri Express";
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const navItems = [
    { text: "Menu", target: "#menu" },
    { text: "Take-out", target: "#takeout" },
    { text: "Locations", target: "#location" },
    { text: "Contact us", target: "#contact" },
    { text: "Order Now", target: "#order" },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("data-tab-target", item.target);
    link.textContent = item.text;
    link.classList.add(item.class);
    li.appendChild(link);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(h1);
  header.appendChild(nav);
  content.appendChild(header);
  return header;
}

export function createHome() {
  const content = document.getElementById("content");
  const main = document.createElement("main");
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");
  const heroImage = document.createElement("div");
  heroImage.classList.add("hero-image");
  const heroTextContainer = document.createElement("div");
  heroTextContainer.classList.add("hero-text");
  const heroText = document.createElement("h2");
  heroText.textContent = "Fresh Sushi right at your doorstep!";
  const heroButton = document.createElement("button");
  heroButton.textContent = "Order now";
  heroButton.classList.add("button-order");

  const img = document.createElement("img");
  img.src = heroImg;
  img.alt = "sushi";
  img.classList.add("hero");
  content.appendChild(main);
  main.appendChild(heroContainer);
  heroContainer.appendChild(heroTextContainer);
  heroTextContainer.append(heroText, heroButton);
  heroContainer.appendChild(heroImage);
  heroImage.appendChild(img);
  return main;
}

// export function createMenu() {
//   const menuItems = [
//     "Crab Tempura",
//     "Wagyu Beef",
//     "Tamago",
//     "Grilled Unagi",
//     "Seared Octopus",
//     "Squid Ume Plum",
//     "Extra Large Scallop",
//     "Squid",
//     "Abalone",
//     "Shrimp",
//     "Shrimp with Cheese",
//     "Shrimp with Avocado",
//     "Flame Grilled Mackerel",
//     "Pickled Yellowtail",
//     "Broiled Salmon",
//     "Salmon",
//   ];

//   const menu = document.getElementById("menu-container");
//   menuItems.forEach((element, index) => {
//     const div = document.createElement("div");
//     div.classList.add(`menu-item`);
//     const img = document.createElement("img");
//     const text = document.createElement("p");
//     text.textContent = element;
//     div.appendChild(img);
//     div.appendChild(text);
//     menu.appendChild(div);
//   });
// }

{
  /* <div class="menu-item">
          <img src="/src/tuna.png" alt="tuna" />
          <h4>Tuna</h4> */
}
