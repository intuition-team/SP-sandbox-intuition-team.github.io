import $ from "jquery";

import "../styles/main.scss";
import "./awakeness";
import "./scroll-link";
import "./nav-mobile";
import { registerPlayer } from "./plyr";

function ready() {
  registerPlayer("#initializePlyr", ".plyr-player");
}

window.addEventListener("DOMContentLoaded", ready);
