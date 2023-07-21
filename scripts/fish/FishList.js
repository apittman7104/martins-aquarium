import { getFish, mostHolyFish, soldierFish, nonHolyFish } from "./database.js";

export const FishList = () => {
  // Invoke the function that you imported from the database module
  const fishes = getFish();

  // Start building a string filled with HTML syntax
  let htmlString =
    '<h2 class="list-header">My Fish</h2><article class="fishList">';

  // Create HTML representations of each fish here
  for (const fish of mostHolyFish()) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="holy-fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name"><strong>${fish.name}</strong></div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} in.</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  for (const fish of soldierFish()) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="soldier-fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name"><strong>${fish.name}</strong></div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} in.</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  for (const fish of nonHolyFish()) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="unholy-fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name"><strong>${fish.name}</strong></div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} in.</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
