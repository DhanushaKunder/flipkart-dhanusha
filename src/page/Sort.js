import React, { useState } from 'react'
import Filter from "./Filter"
import Data from '../data.json'


const Sort=({setSelectedClear, selectedClear, setSelectedPrice, selectedPrice})=>{

    var sortedPriceArray=[]
    var priceArray=[]
    const [selected, setSelected]= useState();
    console.log(priceArray)
    var onChangeValue=(e) =>{
        setSelected(e.target.value);
        console.log(selected);
        setSelectedClear(0);
      }
      
return(
    <div>       
    
    <section>
    <h2 >Sort: </h2>
    <div onChange={onChangeValue}>
        <input type="radio" value="htl" name="price" /> High_to_Low
        <input type="radio" value="lth" name="price" /> Low_to_High
        </div>
    </section>
    

    <div className="homePageContainer-center">
                {Data.map((dataDetail, index) => {

                priceArray=dataDetail.price;
                console.log(priceArray);

                sortedPriceArray=priceArray.sort;
                

                {/* if(selected === "lth"){
                
                <Filter/>
                return <div className="homePageContainer">
                    <div className="img-container">
                        <img src={dataDetail.shirtImage} alt="shirtImage"/> 
                    </div>
                    <div className="homePageContainer-footer">
                        <h1>{dataDetail.title}</h1>
                        <h2>{dataDetail.price}.sort</h2>
                        <botton className="btn btn-primary btn-details" >Add to Cart</botton>
                    </div>
                    
                    </div>
                }
                 else{
                    return <div className="homePageContainer">
                    <div className="img-container">
                        <img src={dataDetail.shirtImage} alt="shirtImage"/> 
                    </div>
                    <div className="homePageContainer-footer">
                        <h1>{dataDetail.title}</h1>
                        <h2>{dataDetail.price}</h2>
                        <botton className="btn btn-primary btn-details" >Add to Cart</botton>
                    </div>
                    
                    </div>
                } 
                 */}
                })};
            </div>
    </div>

);
}

export default Sort;