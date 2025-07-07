import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input.jsx";
import useCurrencyInfo from "./customHooks/useCurrencyInfo.js";

function App() {
  const [inputAmount, setInputAmount] = useState(0);
  const [currencyName1, setCurrencyName1] = useState("USD");
  const [currencyName2, setCurrencyName2] = useState("INR");
  let [outputValue, setOutputValue] = useState(0);
  let [bool,setBool]=useState("false");
  let [i,setI]=useState(0);

  let currencyList = useCurrencyInfo(currencyName1,setBool);
  
  useEffect(()=>{
    if (bool=="true") {
      calculate();
      setBool("false");
      setI((++i));
      console.log("i: "+ i);
      
    }
  },[inputAmount,currencyList,currencyName2]);

  
  function calculate() {
    function findCurrencyRate(list, currency) {
      // console.log(list);
      for (let c_name in list) {
        if (c_name == currency) {
          // console.log(c_name);
          return list[c_name];
        }
      }
      return 0;
    }
    //console.log("cn1: "+ currencyName1);
    //console.log("cn2: "+ currencyName2);
    //let rate = findCurrencyRate(currencyList, currencyName2);
    let rate = currencyList[currencyName2];
    //console.log("rate: "+rate);
    setOutputValue((prev)=>{return (inputAmount * rate)});

    
  }
  function swap(){
    let name= currencyName1;
    setCurrencyName1(currencyName2);
    setCurrencyName2(name);
  }

  return (
    <div className="bg-black w-screen h-screen p-2 flex flex-col items-center justify-center text-white">
      <h1 className="mb-6 text-4xl font-serif font-bold">Currency Convertor</h1>
      <div className="bg-grey bg-gray-900 w-lg h-[20rem] border border-solid border-white rounded-xl flex flex-col items-center justify-center">
        <Input
          className={"mb-[-1rem]"}
          setValue={setCurrencyName1}
          setInputAmount={setInputAmount}
          c_value={currencyName1}
          setBools={setBool}
        />
        <div className="z-1 realtive">
          <button className="text-black font-bold text-md bg-gray-200 border border-solid border-white p-2 rounded-xl px-4"
          onClick={swap} >
            swap
          </button>
        </div>
        <Input
          labels="To"
          className={"mt-[-1rem]"}
          setValue={setCurrencyName2}
          output={outputValue}
          c_value={currencyName2}
          setBools={setBool}
        />
        <div className="w-full flex ">
          <button
          className="bg-gray-800 p-1 rounded-xl px-3 w-full mx-[1rem] h-[2.5rem]"
          onClick={(e) => {
            setBool("true");
            calculate();
          }}
        >
          Submit
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
