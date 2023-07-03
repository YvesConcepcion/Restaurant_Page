// import { container } from "webpack";
import heroImg from "./hero.png";

export function createHeader() {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Nigiri Express";
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const navItems = [
    { text: "Menu", href: "#" },
    { text: "Take-out", href: "#" },
    { text: "Locations", href: "#" },
    { text: "Contact us", href: "#" },
    { text: "Order Now", href: "#" },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
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
