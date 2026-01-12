import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
    -Logo
    -Nav Items
* Body
    -Search
    -Restaurant Container
        -Restaurant Card
            -img
            -name
            -cuisine
            -rating
            -delivery time
* Footer
    -Copyright
    -Links
    -Contact Info
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "118348",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/b505666f-f1b9-49bb-ac74-fe3e02cc835c_118348.JPG",
      locality: "Yamuna Complex",
      areaName: "Mithanpura Chowk",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas", "Beverages"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "8.6K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹80 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/pizza-hut-yamuna-complex-mithanpura-chowk-rest118348",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "119397",
      name: "Taste Of Kolkata (King Of Biryani And Rolls)",
      cloudinaryImageId: "npwwpcr91dposzzwnsng",
      locality: "Motijheel",
      areaName: "Muzaffarpur",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "North Indian", "Salads"],
      avgRating: 4.3,
      parentId: "201629",
      avgRatingString: "4.3",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/taste-of-kolkata-king-of-biryani-and-rolls-motijheel-muzaffarpur-rest119397",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "251969",
      name: "Hunter Biryani",
      cloudinaryImageId: "fmdfkptp3p7mqvrduxwo",
      locality: "Club Road",
      areaName: "Club Road",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani"],
      avgRating: 4.5,
      parentId: "104947",
      avgRatingString: "4.5",
      totalRatingsString: "5.5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/hunter-biryani-club-road-rest251969",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "804106",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "3cb695e25c8c351a51dbe19c7eaa438a",
      locality: "MUZAFFARPUR-SHIVMITRA TOWER",
      areaName: "Kalambagh Road",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4.2,
      parentId: "351013",
      avgRatingString: "4.2",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "35-45 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/dum-safar-biryani-shivmitra-tower-kalambagh-road-rest804106",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "347007",
      name: "Shivarams Restaurant",
      cloudinaryImageId: "801d8d4754a39caa3e7735d9a7e16be6",
      locality: "Muzaffarpur",
      areaName: "Muzaffarpur",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Snacks", "Burgers"],
      avgRating: 3.6,
      parentId: "661937",
      avgRatingString: "3.6",
      totalRatingsString: "3.8K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/shivarams-restaurant-muzaffarpur-rest347007",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "790870",
      name: "Bharat Biryani",
      cloudinaryImageId: "cb91506246df1b4d7011d7bf49f58043",
      locality: "Juran Chhapra Chowk",
      areaName: "Apna Market, Motijheel",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Indian"],
      avgRating: 4.2,
      parentId: "2861",
      avgRatingString: "4.2",
      totalRatingsString: "554",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/bharat-biryani-juran-chhapra-chowk-apna-market-motijheel-rest790870",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "864543",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/52803d1c-eb46-4b2b-a228-80c5edfa7f8d_864543.JPG",
      locality: "Akharaghat Road",
      areaName: "Muzaffarpur",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4.2,
      parentId: "1776",
      avgRatingString: "4.2",
      totalRatingsString: "951",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/wow-momo-akharaghat-road-muzaffarpur-rest864543",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "864544",
      name: "Wow! China",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/b742ca55-f94e-4c44-8a54-cb1d33119254_864544.JPG",
      locality: "Akharaghat Road",
      areaName: "Muzaffarpur",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese", "Asian", "fastfood", "Beverages", "Snacks"],
      avgRating: 3.8,
      parentId: "226836",
      avgRatingString: "3.8",
      totalRatingsString: "967",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/wow-china-akharaghat-road-muzaffarpur-rest864544",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "344277",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/e83b5574-15f4-4640-8311-020fe2333954_344277.JPG",
      locality: "Akharaghat Road",
      areaName: "Muzaffarpur",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "6.4K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/kfc-akharaghat-road-muzaffarpur-rest344277",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "124439",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/fa1292e8-4fcf-4594-9cf5-3679425c734a_124439.JPG",
      locality: "Mithanpura",
      areaName: "Muzaffarpur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/dominos-pizza-mithanpura-muzaffarpur-rest124439",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "569443",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ktt110veapzoja5cwgea",
      locality: "Jubba Sahani Park",
      areaName: "Muzaffarpur",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/la-pinoz-pizza-jubba-sahani-park-muzaffarpur-rest569443",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "369164",
      name: "Biryani Maharaj",
      cloudinaryImageId: "qgthkrhsblq3ruyekmlh",
      locality: "DRB Mall",
      areaName: "Motijheel Road",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chinese", "Kebabs", "Desserts"],
      avgRating: 4.4,
      parentId: "46846",
      avgRatingString: "4.4",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/biryani-maharaj-drb-mall-motijheel-road-rest369164",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "612638",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612638.JPG",
      locality: "MUZAFFARPUR",
      areaName: "Brahmapura",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/kwality-walls-ice-cream-and-more-brahmapura-rest612638",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "647660",
      name: "S.K. Foods & Beverages",
      cloudinaryImageId: "b2dbab4f3da0e17adcb0c25dcf289ef4",
      locality: "Damuchak Road",
      areaName: "Kalambagh Road",
      costForTwo: "₹450 for two",
      cuisines: [
        "Sweets",
        "North Indian",
        "South Indian",
        "Chaat",
        "Desserts",
        "Snacks",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "588722",
      avgRatingString: "4.4",
      totalRatingsString: "6.9K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/s-k-foods-and-beverages-damuchak-road-kalambagh-road-rest647660",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "417017",
      name: "Yo! China",
      cloudinaryImageId: "otj9sz5mdpyg6gw0d5jj",
      locality: "Club Road",
      areaName: "Club Road",
      costForTwo: "₹350 for two",
      cuisines: [
        "Chinese",
        "Kebabs",
        "Continental",
        "Biryani",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "228057",
      avgRatingString: "4.2",
      totalRatingsString: "3.6K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "35-45 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/yo-china-club-road-rest417017",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "548044",
      name: "Pandey Dhaba And Restaurant",
      cloudinaryImageId: "ugsar7mlvpuciybucr0d",
      locality: "Club Road",
      areaName: "Station Road",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Thalis"],
      avgRating: 4,
      parentId: "329505",
      avgRatingString: "4.0",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/pandey-dhaba-and-restaurant-club-road-station-road-rest548044",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "659963",
      name: "Mishthanpur",
      cloudinaryImageId: "0a9f7cccbc94b3fb0ea7842be79866c1",
      locality: "Kakrania complex",
      areaName: "Mithanpura",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "South Indian", "Chaat", "Desserts", "Snacks"],
      avgRating: 4.4,
      veg: true,
      parentId: "15658",
      avgRatingString: "4.4",
      totalRatingsString: "8.5K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "40-50 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/mishthanpur-kakrania-complex-mithanpura-rest659963",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "120424",
      name: "Kaveri Restaurant",
      cloudinaryImageId: "hqsk9copwchrszd5pm9e",
      locality: "Tilak Maidan Road",
      areaName: "Muzaffarpur",
      costForTwo: "₹550 for two",
      cuisines: ["South Indian", "Mughlai", "Continental", "Desserts"],
      avgRating: 4.4,
      parentId: "19266",
      avgRatingString: "4.4",
      totalRatingsString: "818",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-45 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/kaveri-restaurant-tilak-maidan-road-muzaffarpur-rest120424",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "120234",
      name: "Food Plaza",
      cloudinaryImageId: "kyiuy1fyrpc4nfovnuos",
      locality: "Tilak Maidhan Road \n",
      areaName: "Muzaffarpur",
      costForTwo: "₹400 for two",
      cuisines: ["South Indian", "Chinese", "Mughlai", "Thalis", "Desserts"],
      avgRating: 4.3,
      parentId: "3966",
      avgRatingString: "4.3",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/food-plaza-tilak-maidhan-road-muzaffarpur-rest120234",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "119671",
      name: "The Park",
      cloudinaryImageId: "n15covnayrygoywejnmg",
      locality: "Jubba Saini Park",
      areaName: "Muzaffarpur",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Biryani", "Desserts"],
      avgRating: 4.1,
      parentId: "14162",
      avgRatingString: "4.1",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-12 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c9a6b998-7d78-4986-baaa-0955b20a7a80",
    },
    cta: {
      link: "https://www.swiggy.com/city/muzaffarpur/the-park-jubba-saini-park-muzaffarpur-rest119671",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const resData = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    props.resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
