import { getTips } from "../fish/database.js";

export const TipsList = () => {
  const tips = getTips();
  let htmlString = `<div class="tipList"> <h2 class="list-header">Aquarium Care</h2> <ul>`;

  /*  for (const tip of tips) {
    htmlString += `<li>${tip}</li>`;
  }
*/
  tips.forEach((tip) => {
    htmlString += `<li>${tip}</li>`;
  });

  htmlString += `</div>`;

  return htmlString;
};
