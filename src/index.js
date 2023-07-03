import { createHeader, createHome } from "./home";
import "./style.css";

// Call the initialPageLoad function when the page is first loaded
window.addEventListener("load", createHeader);
window.addEventListener("load", createHome);
