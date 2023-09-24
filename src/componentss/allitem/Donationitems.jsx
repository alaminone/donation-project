import { useEffect, useState } from "react";
import Item from "./Item/Item";


const Donationitems = () => {

const [item, setitem]= useState([]);


useEffect(()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data=> setitem(data))
    
},[])


    return (
        <div className="container mx-auto mt-10">
            


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-3">
                {
                    item?.map(item => <Item 
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Donationitems;