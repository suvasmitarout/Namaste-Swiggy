


  const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
        </div>
        <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About  Us</li>
            <li>Contact  Us</li>
            <li>Cart</li>
           </ul>
        </div>
      </div>
    );
  };

  const RestaurantCard=(props)=>{
    const{resData}=props;

    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    }=resData?.info;

    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo"
         alt="res-logo" 
         src={ 
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ 
          cloudinaryImageId
         }
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(",")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

const resList=[
{
"info": {
"id": "831065",
"name": "Chinese Wok",
"cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
"locality": "Chandni Chowk",
"areaName": "Omaxe mall",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
"avgRating": 4.1,
"parentId": "61955",
"avgRatingString": "4.1",
"totalRatingsString": "516",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 1.3,
"serviceability": "SERVICEABLE",
"slaString": "35-45 mins",
"lastMileTravelString": "1.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/chinese-wok-chandni-chowk-omaxe-mall-rest831065",
"type": "WEBLINK"
}
},
{
"info": {
"id": "807783",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/a049117e-1a3d-4ca0-94a0-9e25a17879df_807783.jpg",
"locality": "Omaxe Mall",
"areaName": "Chandni Chowk",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.3,
"parentId": "166",
"avgRatingString": "4.3",
"totalRatingsString": "882",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 1.7,
"serviceability": "SERVICEABLE",
"slaString": "40-50 mins",
"lastMileTravelString": "1.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/burger-king-omaxe-mall-chandni-chowk-rest807783",
"type": "WEBLINK"
}
},
{
"info": {
"id": "804724",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0940cd0b-70ed-4b14-a50e-65a7160ccc5a_804724.JPG",
"locality": "Kaccha Bagh",
"areaName": "Chandni Chowk",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Rolls & Wraps",
"Fast Food"
],
"avgRating": 4.2,
"parentId": "547",
"avgRatingString": "4.2",
"totalRatingsString": "142",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/kfc-kaccha-bagh-chandni-chowk-rest804724",
"type": "WEBLINK"
}
},
{
"info": {
"id": "253765",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f5d3a015-8b82-443a-8a0e-d6f2b03697ef_253765.JPG",
"locality": "Kumar Theatre",
"areaName": "Chandni Chowk",
"costForTwo": "₹400 for two",
"cuisines": [
"American"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "2.9K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 1.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "1.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 22:55:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹117"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "1.9K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/mcdonalds-kumar-theatre-chandni-chowk-rest253765",
"type": "WEBLINK"
}
},
{
"info": {
"id": "526516",
"name": "Salad Days",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/14/da84a0d0-52b6-4349-98cf-188f86e6a403_526516.jpg",
"locality": "Gole Market",
"areaName": "Gole Market",
"costForTwo": "₹600 for two",
"cuisines": [
"Salads"
],
"avgRating": 4.6,
"parentId": "796",
"avgRatingString": "4.6",
"totalRatingsString": "4.9K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "High%20Protein/rx%20tag%205.png",
"description": "High Protein"
},
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "High Protein",
"imageId": "High%20Protein/rx%20tag%205.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "70"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/salad-days-gole-market-rest526516",
"type": "WEBLINK"
}
},
{
"info": {
"id": "378311",
"name": "Blue Tokai Coffee Roasters",
"cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
"locality": "Chanakyapuri",
"areaName": "Connaught Place",
"costForTwo": "₹600 for two",
"cuisines": [
"Cafe",
"Coffee",
"Beverages"
],
"avgRating": 4.6,
"parentId": "2682",
"avgRatingString": "4.6",
"totalRatingsString": "1.5K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 4.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/blue-tokai-coffee-roasters-chanakyapuri-connaught-place-rest378311",
"type": "WEBLINK"
}
},
{
"info": {
"id": "88982",
"name": "Taco Bell",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/5367378a-4509-4a79-aae9-53cbeeb23ea4_88982.JPG",
"locality": "Jawahar Nagar",
"areaName": "Kamla Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Mexican",
"Fast Food",
"Snacks"
],
"avgRating": 4.2,
"parentId": "1557",
"avgRatingString": "4.2",
"totalRatingsString": "11K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "65% OFF",
"subHeader": "UPTO ₹136"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/taco-bell-jawahar-nagar-kamla-nagar-rest88982",
"type": "WEBLINK"
}
},
{
"info": {
"id": "740647",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/f1771754-4175-47e5-b9d3-bf18bcd637d6_740647.JPG",
"locality": "Kamla Nagar",
"areaName": "Kamla Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Desserts"
],
"avgRating": 4.6,
"parentId": "1040",
"avgRatingString": "4.6",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "133"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/theobroma-kamla-nagar-rest740647",
"type": "WEBLINK"
}
},
{
"info": {
"id": "157768",
"name": "The Good Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d15835f6-d21d-4308-985b-f34029eb9ee9_157768.jpg",
"locality": "Minto Road",
"areaName": "GANDHI MARKET",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Pasta",
"Punjabi",
"Desserts"
],
"avgRating": 4.3,
"parentId": "7918",
"avgRatingString": "4.3",
"totalRatingsString": "4.7K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/the-good-bowl-minto-road-gandhi-market-rest157768",
"type": "WEBLINK"
}
},
{
"info": {
"id": "8619",
"name": "Bikkgane Biryani",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/40cb7f19-6a78-424c-8d4b-0163bc4f42b8_8619.jpg",
"locality": "PVR Rivoli",
"areaName": "Connaught Place",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
" Hyderabadi",
" Andhra",
" Lucknowi",
" Kolkata",
" Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "5070",
"avgRatingString": "4.3",
"totalRatingsString": "30K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "30-40 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Biryani.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹89"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "8.4K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/bikkgane-biryani-pvr-rivoli-connaught-place-rest8619",
"type": "WEBLINK"
}
},
{
"info": {
"id": "64974",
"name": "Wendy's Burgers",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/5fca8f76-d506-49ce-99dd-edfb3f86c9fc_64974.JPG",
"locality": "Kamla Nagar",
"areaName": "Kamla Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American",
"Fast Food",
"Snacks"
],
"avgRating": 4.5,
"parentId": "972",
"avgRatingString": "4.5",
"totalRatingsString": "15K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 5.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "2.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/wendys-burgers-kamla-nagar-rest64974",
"type": "WEBLINK"
}
},
{
"info": {
"id": "30207",
"name": "Bikanervala",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/8a4e0848-22b5-452a-aa4e-941dfcc85272_30207.jpg",
"locality": "Jawahar Nagar",
"areaName": "Kamla Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"North Indian",
"Snacks",
"Chaat",
"Sweets"
],
"avgRating": 4.4,
"veg": true,
"parentId": "45936",
"avgRatingString": "4.4",
"totalRatingsString": "25K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹9"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/bikanervala-jawahar-nagar-kamla-nagar-rest30207",
"type": "WEBLINK"
}
},
{
"info": {
"id": "107452",
"name": "Chaayos Chai+Snacks=Relax",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_107452.JPG",
"locality": "Kashmiri Gate",
"areaName": "Kashmiri Gate",
"costForTwo": "₹250 for two",
"cuisines": [
"Beverages",
"Chaat",
"Bakery",
"healthy"

],
"avgRating": 4.7,
"parentId": "281782",
"avgRatingString": "4.7",
"totalRatingsString": "2.5K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 3.6,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹84"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "1.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-kashmiri-gate-rest107452",
"type": "WEBLINK"
}
},
{
"info": {
"id": "855005",
"name": "Starbucks Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/f3486114-76a8-47fe-bfb2-8ea3f7f269cf_855005.JPG",
"locality": "Chandni Chowk",
"areaName": "Chandni Chowk",
"costForTwo": "₹400 for two",
"cuisines": [

"Cafe",
"Snacks",
"Desserts",
"Bakery",
"Ice Cream"
],
"avgRating": 4.6,
"parentId": "195515",
"avgRatingString": "4.6",
"totalRatingsString": "78",
"sla": {
"deliveryTime": 44,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
"description": "Delivery!"
},
{
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "2.2K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/starbucks-coffee-chandni-chowk-rest855005",
"type": "WEBLINK"
}
},
{
"info": {
"id": "17835",
"name": "Behrouz Biryani",
"cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
"locality": "Minto Road",
"areaName": "Gandhi Market, Minto Road",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
"avgRating": 4.3,
"parentId": "1803",
"avgRatingString": "4.3",
"totalRatingsString": "9.2K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 6,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "6.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/behrouz-biryani-minto-road-gandhi-market-minto-road-rest17835",
"type": "WEBLINK"
}
},
{
"info": {
"id": "25397",
"name": "Oven Story Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/8e4e013f-7c31-4c7b-b3e4-4c734008b775_25397.jpg",
"locality": "Minto Road",
"areaName": "Gandhi Market",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts"
],
"avgRating": 4.2,
"parentId": "3534",
"avgRatingString": "4.2",
"totalRatingsString": "5.2K+",
"sla": {
"deliveryTime": 22,
"lastMileTravel": 6,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "6.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/oven-story-pizza-minto-road-gandhi-market-rest25397",
"type": "WEBLINK"
}
},
{
"info": {
"id": "865596",
"name": "Costa Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/b6848541-0105-43bb-b5ec-f244d1788a64_865596.jpg",
"locality": "CHANDNI CHOWK",
"areaName": "OMAXE CHOWK",
"costForTwo": "₹450 for two",
"cuisines": [
"Beverages",
"Cafe",
"Bakery",
"Desserts"
],
"avgRating": 4.7,
"parentId": "8427",
"avgRatingString": "4.7",
"totalRatingsString": "28",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "49"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/costa-coffee-chandni-chowk-omaxe-chowk-rest865596",
"type": "WEBLINK"
}
},
{
"info": {
"id": "443497",
"name": "EatFit",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/6/0f731fab-5d09-469b-a1d3-5d37342bec22_443497.jpg",
"locality": "BHAGAT SINGH MARKET",
"areaName": "GOLE MARKET",
"costForTwo": "₹270 for two",
"cuisines": [
"Chinese",
"Healthy Food",
"Tandoor",
"Pizzas",
"North Indian",
"Thalis",
"Biryani"
],
"avgRating": 4.3,
"parentId": "76139",
"avgRatingString": "4.3",
"totalRatingsString": "3.1K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "35-45 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-04 23:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "High%20Protein/rx%20tag%205.png",
"description": "High Protein"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "High Protein",
"imageId": "High%20Protein/rx%20tag%205.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-225e9f82-7af1-454e-b881-d54541a765d0"
},
"cta": {
"link": "https://www.swiggy.com/city/delhi/eatfit-bhagat-singh-market-gole-market-rest443497",
"type": "WEBLINK"
}
}
];
  const Body=()=>{
     return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurant)=> (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>

      </div>
     )
  }

  const AppLayout=()=>{
    return(
      <div className="app">
        <Header/>
        <Body/>
      </div>
    );
  };

  export default AppLayout;


