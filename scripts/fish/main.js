import { TipsList } from "../tips/TipsList.js";

// Import the FishList function from the correct module
import { FishList } from "./FishList.js";

import { LocationList } from "../locations/LocationList.js";

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElement = document.querySelector(".fish-container");

fishHTMLElement.innerHTML = FishList();

const tipHTMLElement = document.querySelector(".tip-container");

tipHTMLElement.innerHTML = TipsList();

const locHTMLElement = document.querySelector(".location-container");

locHTMLElement.innerHTML = LocationList();
