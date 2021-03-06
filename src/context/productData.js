import React from "react";

import EggOm from "../components/Recipes/EggOm";
import FrenFry from "../components/Recipes/FrenFry";
import ChicDrum from "../components/Recipes/ChicDrum";
import ChicFry from "../components/Recipes/ChicFry.js";
import FishCut from "../components/Recipes/FishCut";
import Dumalo from "../components/Recipes/Dumalo.js";
import VegRice from "../components/Recipes/VegRice";
import EggRice from "../components/Recipes/EggRice";

export const items = [
  {
    sys: { id: 0 },
    fields: {
      title: "EGG Omlette",
      price: 10,
      company: "Egg",
      description:
        <EggOm />,
      featured: true,
      image: { fields: { file: { url: "img/product-0.jpg" } } },
      freeShipping: false
    }
  },
  {
    sys: { id: 1 },

    fields: {
      title: "French Fries",
      price: 20,
      company: "Potato",
      description:
        <FrenFry />,

      featured: false,

      image: { fields: { file: { url: "img/product-1.jpg" } } },
      freeShipping: true
    }
  },
  {
    sys: { id: 2 },

    fields: {
      title: "Chicken drumstick",
      price: 30,
      company: "Chicken",
      description:
        <ChicDrum />,

      featured: false,

      image: { fields: { file: { url: "img/product-2.jpg" } } },
      freeShipping: false
    }
  },
  {
    sys: { id: 3 },

    fields: {
      title: "Chicken Fry KFC",
      price: 15,
      company: "Chicken",
      description:
        <ChicFry />,

      featured: true,

      image: { fields: { file: { url: "img/product-3.jpg" } } },
      freeShipping: false
    }
  },
  {
    sys: { id: 4 },

    fields: {
      title: "Fish Cutlet",
      price: 45,
      company: "Fish",
      description:
        <FishCut />,

      featured: false,

      image: { fields: { file: { url: "img/product-4.jpg" } } },
      freeShipping: false
    }
  },
  {
    sys: { id: 5 },

    fields: {
      title: "Dum Aloo",
      price: 55,
      company: "Potato",
      description:
        <Dumalo />,

      featured: false,

      image: { fields: { file: { url: "img/product-5.jpg" } } },
      freeShipping: true
    }
  },

  {
    sys: { id: 6 },

    fields: {
      title: "Veg Rice",
      price: 20,
      company: "Rice",
      description:
        <VegRice />,

      featured: true,

      image: { fields: { file: { url: "img/product-6.jpg" } } },
      freeShipping: true
    }
  },
  {
    sys: { id: 7 },

    fields: {
      title: "EGG Rice",
      price: 20,
      company: "Egg",
      description:
        <EggRice />,

      featured: false,

      image: { fields: { file: { url: "img/product-7.jpg" } } },
      freeShipping: false
    }
  }

  // {
  //   sys: { id: 10 },

  //   fields: {
  //     title: "hp desktop computer",
  //     price: 75,
  //     company: "hp",
  //     description:
  //       "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
  //     featured: false,

  //     image: { fields: { file: { url: "img/product-10.jpg" } } },
  //     freeShipping: true
  //   }
  // },
  // {
  //   sys: { id: 11 },

  //   fields: {
  //     title: "lenovo desktop computer",
  //     price: 110,
  //     company: "lenovo",
  //     description:
  //       "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
  //     featured: false,
  //     image: { fields: { file: { url: "img/product-11.jpg" } } },
  //     freeShipping: false
  //   }
  // },
  // {
  //   sys: { id: 12 },

  //   fields: {
  //     title: "dell desktop computer",
  //     price: 28,
  //     company: "dell",
  //     description:
  //       "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
  //     featured: false,
  //     image: { fields: { file: { url: "img/product-12.jpg" } } },
  //     freeShipping: true
  //   }
  // }
];
