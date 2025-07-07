import { useEffect,useState } from "react";
function useCurrencyInfo(currency,setBool){
    let [data, setData] = useState({});
    useEffect(()=>{
        async function fetchData (){
        let a= await fetch( `https://open.er-api.com/v6/latest/${currency}`);
        let b= await a.json();
        console.log("fetched");
        setData(b.rates);
        setBool("true");
        // .then((res)=>{
        //     return res.json();
        // }).then((res)=>{
        //     console.log("fetched");
        //     return setData(res.rates);
        // })
    }
    fetchData();
    }
    ,[currency])
    
    console.log("fetched 2");
    return data;
}
export default useCurrencyInfo;