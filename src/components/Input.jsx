import currencyName from "./currencyName";
import { useId } from 'react';
function Input({
  labels = "From",
  currencyList = currencyName,
  className,
  setValue,
  setInputAmount,
  output,
  c_value,
  setBools,
}) {
  
  function options() {
    let options = [];
    for (let currency in currencyList) {
      options.push(<option value={currency} key={currency} >{currency}  </option>);
    }
    return options;
  }
  
  
  return (
    <>
      <div className="p-2 flex  items-center justify-center w-full">
        <div
          className={`border border-solid border-black m-2 p-2 rounded-xl w-full bg-gray-600 ${className}`}
        >
          <div className="flex justify-between p-2  w-full text-gray-200">
            <div>{labels}</div>
            <div>Currency Type</div>
          </div>
          {/* INPUT */}
          <div className="flex justify-between px-1 mb-1">
            <input
              type="number"
              className=" w-[12ch]  px-2 py-1 rounded-xl bg-gray-800 "
              min="0"
              placeholder="0"
              value={output}
              onChange={(e)=>{
                setBools("true");
                setInputAmount(e.target.value);
              }}
            />
            <select
              name="Currency"
              className="text-white bg-gray-800 rounded-xl px-2 py-1"
              required
              value={c_value}
              onChange={(e) => {
                setBools("true");
                setValue(e.target.value);
              }}
            >
              {/* <option value="USD">USD</option> */}
              {options()}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
