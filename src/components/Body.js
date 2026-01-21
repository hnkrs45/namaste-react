import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";

const Body = () => {
  
  //Local State Variable- Super Powerful variable
  const [listOfRestaurants, setListofRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6219055&lng=77.3683319&carousel=true&third_party_vendor=1&screenType=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);
    setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofRestaurant(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;