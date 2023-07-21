import { getLocations } from "../fish/database.js";

export const LocationList = () => {
  const locations = getLocations();
  let htmlString = `<div class="locationList"><h2 class="list-header">Harvesting Locations & Tips</h2>
  <ul>
  <li>Pack extra clothes</li>
  <li>Travel with others</li>
  <li>Hail Jutz'kar</li>
  </ul>`;

  for (const location of locations) {
    htmlString += `<img src="${location.image}">
    <p>${location.name}</p>`;
  }

  htmlString += `</div>`;
  return htmlString;
};
