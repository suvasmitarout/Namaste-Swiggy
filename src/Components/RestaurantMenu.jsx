import { useEffect,useState} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{

        const url =  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=831065&catalog_qa=undefined&submitAction=ENTER";

    const data = await fetch(
        "https://corsproxy.io/?" + encodeURIComponent(url)
    );
        
        const json=await data.json();

        console.log(json);
        setResInfo(json.data); 
    };

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

    return resInfo == null?(
       <Shimmer/>
    ): ( 
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;