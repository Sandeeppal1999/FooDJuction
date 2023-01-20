import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
    <a href="/">
    <img  alt="logo" className="logo" src="https://coupontrends.in/img/1496817884_Food%20Junction.png"></img>
    </a>
    
);
 const Header=()=>{
  return( 
  <div className="header">
        <Title/>
        <div className="nav-items">
        <ul>
            <li> Home</li>
            <li> ♿︎About</li>
            <li> ﹪Offers</li>
            <li> 🛒Cart</li>

        </ul>

        </div>
    </div>
    );
 };

 const restaurantList=

 [
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "657335",
    "name": "Oregano",
    "uuid": "718396c2-5a4f-4061-a330-aea97bca7e02",
    "city": "4",
    "area": "Karol Bagh",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "67f50f5573f774e40a5fcd41c405dd6a",
    "cuisines": [
      "Pizzas",
      "Snacks",
      "Chinese",
      "Beverages"
    ],
    "tags": [
      
    ],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 47,
    "minDeliveryTime": 45,
    "maxDeliveryTime": 55,
    "slaString": "45-55 MINS",
    "lastMileTravel": 5,
    "slugs": {
      "restaurant": "oregano-karol-bagh-karol-bagh",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "Shop No.3, Front Side, Ground Floor, Old Rajinder Nagar, New Delhi-110060, KAROL BAGH, Central, Delhi-110060",
    "locality": "Rajinder Nagar",
    "parentId": 14662,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5658396~p=1~eid=00000185-ce62-5904-04f1-e6fa005a015f",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "657335",
      "deliveryTime": 47,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 55,
      "lastMileTravel": 5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 50,
    "new": true
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "29776",
    "name": "Sita Ram Diwan Chand",
    "uuid": "3f501014-40cf-46de-ba85-9e21a79a9119",
    "city": "4",
    "area": "Paharganj",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "p3n5nvjgfhzza8ulolgn",
    "cuisines": [
      "Street Food",
      "North Indian",
      "Snacks"
    ],
    "tags": [
      
    ],
    "costForTwo": 10000,
    "costForTwoString": "₹100 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 40,
    "slaString": "30-40 MINS",
    "lastMileTravel": 2.5,
    "slugs": {
      "restaurant": "sita-ram-diwan-chand-paharganj-tis-hazari",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "2246, Chuna Mandi, Paharganj, New Delhi",
    "locality": "Chuna Mandi, Paharganj",
    "parentId": 3621,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "2.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "29776",
      "deliveryTime": 33,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 40,
      "lastMileTravel": 2.5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "253765",
    "name": "McDonald's",
    "uuid": "6daedb6c-56da-443b-8cb8-5d07e056e097",
    "city": "4",
    "area": "Old Delhi",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "ohhg2s06p1ekuwanw1tw",
    "cuisines": [
      "American"
    ],
    "tags": [
      
    ],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 32,
    "minDeliveryTime": 32,
    "maxDeliveryTime": 32,
    "slaString": "32 MINS",
    "lastMileTravel": 1.399999976158142,
    "slugs": {
      "restaurant": "mcdonalds-delhi-chandni-chowk-old-delhi",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "Delhi Chandni Chowk, Commercial Complex-II /1888-89, Kumar Theatre,  Chandni Chowk, New Delhi-110006",
    "locality": "Delhi Chandni Chowk",
    "parentId": 630,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "30% off",
      "shortDescriptionList": [
        {
          "meta": "30% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "30% off up to ₹75 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "30% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "30% off up to ₹75 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1.3 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "253765",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "lastMileTravel": 1.399999976158142,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "26713",
    "name": "KFC",
    "uuid": "3f4a6968-4ad2-4dfd-9c76-e68ca0125a0f",
    "city": "4",
    "area": "Kamla Nagar",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "tags": [
      
    ],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 32,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 40,
    "slaString": "30-40 MINS",
    "lastMileTravel": 4.800000190734863,
    "slugs": {
      "restaurant": "kfc-gtb-nagar-gtb-nagar",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "KFC Restaurant, Plot 38 UA, Bungalow Road, Kamla nagar, New Delhi-110007",
    "locality": "Bungalow Road",
    "parentId": 547,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "40% off",
      "shortDescriptionList": [
        {
          "meta": "40% off | Use SWIGGYIT",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "40% off up to ₹80 | Use code SWIGGYIT",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "40% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use SWIGGYIT",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "40% off up to ₹80 | Use code SWIGGYIT",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5765967~p=4~eid=00000185-ce62-5904-04f1-e6fb005a046a",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "4.8 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "26713",
      "deliveryTime": 32,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 40,
      "lastMileTravel": 4.800000190734863,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.9",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "93614",
    "name": "Burger King",
    "uuid": "cca27b8c-f1db-42b4-a5ec-e1747905fdcf",
    "city": "4",
    "area": "Connaught Place",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "keyaneymfh2vgtp2uzq5",
    "cuisines": [
      "Burgers",
      "American"
    ],
    "tags": [
      
    ],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 27,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "slaString": "27 MINS",
    "lastMileTravel": 1.2999999523162842,
    "slugs": {
      "restaurant": "burger-king-new-delhi-railway-station-connaught-place",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "Commercial Site,New Delhi Railway Station,DMRC, New Delhi - 110006",
    "locality": "New Delhi Railway Station",
    "parentId": 166,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "60% off",
      "shortDescriptionList": [
        {
          "meta": "60% off | Use STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "60% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "93614",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "lastMileTravel": 1.2999999523162842,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "598217",
    "name": "Chaina Ram Sindhi Halwai",
    "uuid": "3eae13db-c8b2-47b0-91e4-c5b1bacb0b9d",
    "city": "4",
    "area": "Old Delhi",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "a9k2qxr4dojc77dzdxug",
    "cuisines": [
      "Sweets",
      "Snacks"
    ],
    "tags": [
      
    ],
    "costForTwo": 70000,
    "costForTwoString": "₹700 FOR TWO",
    "deliveryTime": 45,
    "minDeliveryTime": 45,
    "maxDeliveryTime": 45,
    "slaString": "45 MINS",
    "lastMileTravel": 1.5,
    "slugs": {
      "restaurant": "chaina-ram-sindhi-halwai-old-delhi-old-delhi",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "6499, Fatehpuri Chowk, Central delhi- 110006",
    "locality": "Fatehpuri Chowk",
    "parentId": 57265,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5589576~p=7~eid=00000185-ce62-5904-04f1-e6fc005a0754",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "598217",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "lastMileTravel": 1.5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.4",
    "totalRatings": 50,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "340434",
    "name": "Bismillah Kebab Point",
    "uuid": "da469794-14b5-4786-9b64-7f89b6802219",
    "city": "4",
    "area": "Old Delhi",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "mcvcuhlrdxsnyl4r5wb5",
    "cuisines": [
      "North Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
      "restaurant": "bismillah-kebab-point-old-delhi-old-delhi",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "1127, BAZAR MATIA MEHAL JAMA MASJID, DELHI-110006,  Central, Delhi110006",
    "locality": "Bazar Matia Mehal Jama Masjid",
    "parentId": 47271,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "340434",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "lastMileTravel": 0.4000000059604645,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.5",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "494023",
    "name": "Chhotey Lal Caterers",
    "uuid": "54f50aa1-51a1-42ae-862d-f5734268befa",
    "city": "4",
    "area": "Old Delhi",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "xzcqf1rbagj3fepdzzny",
    "cuisines": [
      "Chaat",
      "Indian",
      "Fast Food"
    ],
    "tags": [
      
    ],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "slaString": "28 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
      "restaurant": "chhotey-lal-caterers-old-delhi-old-delhi",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "S no 1010 Sita ram Bazar Delhi Civil lines Central Delhi 110006",
    "locality": "Old Delhi",
    "parentId": 296289,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "494023",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "lastMileTravel": 0.4000000059604645,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 20,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "16418",
    "name": "Subway",
    "uuid": "6afb1d64-f9c3-4bbb-9c91-d172673cdcbd",
    "city": "4",
    "area": "Connaught Place",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "tzeer3jey0in8dkce592",
    "cuisines": [
      "Salads",
      "Snacks",
      "Desserts",
      "Beverages"
    ],
    "tags": [
      
    ],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 29,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 35,
    "slaString": "25-35 MINS",
    "lastMileTravel": 3.5999999046325684,
    "slugs": {
      "restaurant": "subway-connaught-place-connaught-place",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "M-8 Plot No 3 M Block Barakhamba Road Cannaught Place,new delhi-01, District - New Delhi, STATE - Delhi",
    "locality": "M Block",
    "parentId": 2,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5764971~p=10~eid=00000185-ce62-5904-04f1-e6fd005a0a3d",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "3.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "16418",
      "deliveryTime": 29,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 35,
      "lastMileTravel": 3.5999999046325684,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "140521",
    "name": "Al-Yamin",
    "uuid": "79a63fd9-928f-4d43-b19b-fe09bfe3d529",
    "city": "4",
    "area": "Jama Masjid, Old Delhi",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "zpexym3pg0stplzfbtb5",
    "cuisines": [
      "Mughlai",
      "Biryani",
      "Kebabs"
    ],
    "tags": [
      
    ],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 27,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "slaString": "27 MINS",
    "lastMileTravel": 0.6000000238418579,
    "slugs": {
      "restaurant": "al-yamin-old-delhi-2",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "1150 A, Matia Mahal Road, Jama Masjid, New Delhi",
    "locality": "Old Delhi",
    "parentId": 30717,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "140521",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "lastMileTravel": 0.6000000238418579,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.2",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "41345",
    "name": "Shakahari Restaurant (Chawri Bazaar)",
    "uuid": "c54dc5c8-2350-40db-b956-0347c3c70387",
    "city": "4",
    "area": "Chawri bazar metro station",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "mcq1x7jllht0ggbbhogk",
    "cuisines": [
      "North Indian",
      "Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "slaString": "28 MINS",
    "lastMileTravel": 0.30000001192092896,
    "slugs": {
      "restaurant": "shakahari-restaurant-chawri-bazar-old-delhi",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "3624/9, Main Chawri bazar road,Delhi-110006(Opp. Chawri bazar metro station",
    "locality": "Chawri bazar metro station",
    "parentId": 16003,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.3 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "41345",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "lastMileTravel": 0.30000001192092896,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "14951",
    "name": "Khan Chacha",
    "uuid": "344b6e15-37f6-4e36-8d4b-2e796f80ad03",
    "city": "4",
    "area": "Connaught Place",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "urpduupf3qissm32cll0",
    "cuisines": [
      "Kebabs",
      "North Indian",
      "Mughlai"
    ],
    "tags": [
      
    ],
    "costForTwo": 85000,
    "costForTwoString": "₹850 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 40,
    "slaString": "30-40 MINS",
    "lastMileTravel": 3,
    "slugs": {
      "restaurant": "khan-chacha-connaught-place-connaught-place",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "D-3, Connaught Place, New Delhi",
    "locality": "CP D block",
    "parentId": 548,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5652320~p=13~eid=00000185-ce62-5904-04f1-e6fe005a0d66",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "3 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "14951",
      "deliveryTime": 33,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 40,
      "lastMileTravel": 3,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "310645",
    "name": "KARIM'S- Original from Jama Masjid Delhi- 6",
    "uuid": "05def2e7-6376-41f9-a842-0ff162fc706f",
    "city": "4",
    "area": "Jama Masjid",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "aobljmiw55kqktqx3ttz",
    "cuisines": [
      "Mughlai",
      "North Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
      "restaurant": "karim's-jama-masjid-old-delhi-old-delhi",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "16 Urdu Bazar Road Infront of Jama Masjid Gate No.1, Gali Bhairo Wali, Kababiyan, New Delhi, Delhi 110006, India",
    "locality": "Old Delhi",
    "parentId": 284854,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "310645",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "lastMileTravel": 0.4000000059604645,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.7",
    "totalRatings": 50,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "193479",
    "name": "Haldiram's",
    "uuid": "ffb31400-ddb7-4b0d-9fbf-1fb0985e3fc4",
    "city": "4",
    "area": "Chandni Chowk",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "hnxwug8pbnby5ftshubz",
    "cuisines": [
      "Sweets",
      "Snacks",
      "North Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "slaString": "36 MINS",
    "lastMileTravel": 1,
    "slugs": {
      "restaurant": "haldiram's-connaught-place-connaught-place-2",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "1452/2 Near Fountain Chandni Chowk Delhi 110015",
    "locality": "Near Fountain",
    "parentId": 377669,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "FREE DELIVERY",
      "shortDescriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [
        {
          "meta": "Free Delivery",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "193479",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "lastMileTravel": 1,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "31754",
    "name": "Gulati (Pandara Road)",
    "uuid": "f32c7d34-e09b-43ea-baee-70a11e11015b",
    "city": "4",
    "area": "Pandara Road",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "al1itsrxkkrpbxjmkhno",
    "cuisines": [
      "Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 100000,
    "costForTwoString": "₹1000 FOR TWO",
    "deliveryTime": 43,
    "minDeliveryTime": 43,
    "maxDeliveryTime": 43,
    "slaString": "43 MINS",
    "lastMileTravel": 5.800000190734863,
    "slugs": {
      "restaurant": "gulati-pandara-roaddelhi-khan-market",
      "city": "delhi"
    },
    "cityState": "4",
    "address": "6, Pandara road market",
    "locality": "Khan Market",
    "parentId": 16236,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5656825~p=16~eid=00000185-ce62-5904-04f1-e6ff005a1003",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "5.8 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "31754",
      "deliveryTime": 43,
      "minDeliveryTime": 43,
      "maxDeliveryTime": 43,
      "lastMileTravel": 5.800000190734863,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    }
    ]
    const RestaurantCard = ({
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
      }) => {
        return (
          <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} Star</h4>
          </div>
        );
      };

 

 const Body=()=>{
    return (
        <div className="restaurant-list">
        {
            restaurantList.map((restaurant)=>{
                return <RestaurantCard{...restaurant.data} key={restaurant.data.id} />
            })
        }

        </div>
    )
 }
 const Footer=()=>{
    return <h4>Footer</h4>
 }
 const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    ) ;
 }



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);