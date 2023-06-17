import React, { useState ,useRef } from "react";
import "./searchbar.css"
import { MagnifyingGlass , X } from 'phosphor-react'

function Searchbar({placeholder,data}) {

  const [filteredData,setfilteredData]=useState([]);
  const inputElement=useRef();

  const Filterhandler=(event)=>{
      let searchword =event.target.value;
      let newFilteredDataArray=data.slice(0,10).filter( (value)=>{
        return value.productName.toLowerCase().includes(searchword.toLowerCase());
      });

      if (searchword==="") {
        setfilteredData([]);
      }
      else{
          setfilteredData(newFilteredDataArray);
      }
  }




  const ClearInput=()=>{
        setfilteredData([]);
        inputElement.current.value="";
  }


  return (
    <div className="w-full bg-slate-700 py-4 flex justify-end items-center">
      <div className="flex flex-col">
      <div className="Search" >
        <div className="text-lg">
          <input type="text" placeholder={placeholder} onChange={Filterhandler} ref={inputElement} className="border-none outline-none"/>
        </div>
        <div className="Searchicon">
          <button>
            {
              filteredData.length ===0 ?  <MagnifyingGlass size={ 28 } /> :  <X size={28}  onClick={ClearInput}/>
            }
          
       
          </button>
        </div>
      </div>
      { filteredData.length !==0 &&
      (
        <div className="Dataresult">
        {
          filteredData.map( (value,key) => {return <div className="DataItem"> {value.productName} </div>}
           )
        }
      </div> 
      ) 
}
      </div>
    </div>
  );
}

export default Searchbar;
