//context --> WareHouse
//Provider --> delivery boy
//Consumer --> we are consumer -->we use usecontext();
import React, { useContext, useEffect, useState } from "react";

const USERS_URL = ` https://assessment.api.vweb.app/users `;
const PRODUCTS_URL = ` https://assessment.api.vweb.app/products`;
const ORDERS_URL = `https://assessment.api.vweb.app/orders`;
const AppContext = React.createContext();

// need to create a provider

const AppProvider = ({children})=>
{
    //const [isLoading,setisLoading]=useState(true);
    const [users,setusers]=useState([]);
    const [products,setproducts]=useState([]);
    const [orders,setorders]=useState([]);
    const getusers = async (url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setusers(data);

        }
        catch(error)
        {
            console.log(error);
        }
    }
    const getproducts = async (url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setproducts(data);

        }
        catch(error)
        {
            console.log(error);
        }
    }
    const getorders = async (url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setorders(data);

        }
        catch(error)
        {
            console.log(error);
        }
    }
    

    useEffect(()=>{
        getusers(USERS_URL,);
        getproducts(PRODUCTS_URL);
        getorders(ORDERS_URL);
        
    },[])
    

    return <AppContext.Provider value={{users,products,orders}}>{children}</AppContext.Provider>
};
const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};