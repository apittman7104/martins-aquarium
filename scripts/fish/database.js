const database = {
  fish: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Amphiprion_ocellaris_%281%29.jpg/330px-Amphiprion_ocellaris_%281%29.jpg",
      name: "Marlin",
      species: "Clownfish",
      length: "4",
      location: "Red Sea",
      food: "Plankton and Algae",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Hypostomus_plecostomus_-_Rapha%C3%ABl_Covain.png/330px-Hypostomus_plecostomus_-_Rapha%C3%ABl_Covain.png",
      name: "Joe",
      species: "Suckermouth Catfish",
      length: "20",
      location: "Gulf of Mexico",
      food: "Snails, plants, and crustaceans",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Paletten-Doktorfisch_M%C3%BCnster.JPG/330px-Paletten-Doktorfisch_M%C3%BCnster.JPG",
      name: "Dory",
      species: "Powder Blue Tang",
      length: "12",
      location: "Great Barrier Reef",
      food: "Plankton and algae",
    },
  ],
  tips: [
    "Lorem ipsum",
    "Dolor sit amet",
    "Clean the tank regularly",
    "I recommend the AquaScum 2000 to automate tank cleaning",
  ],
  locations: [
    {
      image:
        "https://scubadiverlife.com/wp-content/uploads/2014/03/barrierreef-256x256.jpg",
      name: "Great Barrier Reef",
    },
    {
      image:
        "https://geo.vliz.be/geoserver/gwc/service/wms?LAYERS=BODC_GEBCO2014&SRS=EPSG%3A4326&FORMAT=image%2Fpng&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&BBOX=-90,0,-67.5,22.5&WIDTH=256&HEIGHT=256",
      name: "Gulf of Mexico",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gulf_of_Suez_map.jpg/256px-Gulf_of_Suez_map.jpg",
      name: "Red Sea",
    },
  ],
};
export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  let holyFish = [];
  for (const fish of getFish()) {
    if (fish.length % 3 === 0) holyFish.push(fish);
  }
  return holyFish;
};

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  let soldiers = [];
  for (const fish of getFish()) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) soldiers.push(fish);
  }
  return soldiers;
};

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  let regularFish = [];
  for (const fish of getFish()) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) regularFish.push(fish);
  }
  return regularFish;
};

/*
export const getTips = () => {
  return database.tips.map((tip) => ({ ...tip }));
};
*/
export const getTips = () => {
  return database.tips;
};

export const getLocations = () => {
  return database.locations;
};
