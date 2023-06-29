// import { container } from "webpack";

export function createHeader() {
  const headerContainer = document.querySelector(".content");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  headerContainer.appendChild("header");
  header.appendChild(h1);
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
    li.appendChild(link);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
}

// export function createHome() {
//   const home = document.createElement("main");
// }
