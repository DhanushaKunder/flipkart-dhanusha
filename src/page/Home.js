import React, { useState } from 'react'
import Filter from './Filter';
// import Sort from './Sort';
import Data from '../data.json'


const Home=()=>{
    ;
    const [selectedSize, setSelectedSize]= useState();
    const [selectedGender, setSelectedGender]= useState();
    const [selectedBrand, setSelectedBrand]= useState();
    const [selectedClear, setSelectedClear]= useState(1);
    // const [selectedPrice, setSelectedPrice]= useState([])

    var onClickClear = (e)=>{
        e.preventDefault()
        setSelectedClear("1");
        console.log("Button")
        setSelectedBrand();
        setSelectedGender();
        setSelectedSize();

    }

    return(
        <div> 
            <header>
                Flipkart
                
                <div className="option">
                <input type="search" className="search-form"></input>
                
                    
                    
                </div>
            </header>
            {/* <section>
                <Sort  
                    selectedClear={selectedClear}
                    setSelectedClear={setSelectedClear}
                    selectedPrice={selectedPrice}
                    setSelectedPrice={setSelectedPrice}
                    
                /> 
                </section> */}
                <section>
                <Filter 
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand} 
                    selectedGender={selectedGender}
                    setSelectedGender={setSelectedGender}
                    setSelectedClear={setSelectedClear}
                    selectedClear={selectedClear}
                    />
                <button className="btn btn-primary" value="clear" onClick={onClickClear}>Clear</button>
            </section>
            <div className="homePageContainer-center">
                {Data.map((dataDetail, index) => {
                    if( selectedClear === 0){
                    if(selectedSize=== dataDetail.size && selectedGender === dataDetail.gender && selectedBrand === dataDetail.brand && selectedClear=== "0"){
                return <div className="homePageContainer">
                    console.log("Changed");
                    <div className="img-container">
                        <img src={dataDetail.shirtImage} alt="shirtImage"/> 
                    </div>
                    <div className="homePageContainer-footer">
                        <h1>{dataDetail.title}</h1>
                        <h2>{dataDetail.price}</h2>
                        <botton className="btn btn-primary btn-details" >Add to Cart</botton>
                    </div>
                    
                    </div>
                
                }}
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
                
                
                })}
        
            </div>
        </div>
    );}

export default Home;