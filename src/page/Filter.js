/* eslint-disable array-callback-return */
import React from 'react'
import Data from '../data.json'

const Filter=({selectedSize,setSelectedSize, selectedBrand, setSelectedBrand, selectedGender, setSelectedGender, selectedClear, setSelectedClear})=>{


    var onChangeSize=(e) =>{
        setSelectedSize(e.target.value);
        console.log(selectedSize);
        setSelectedClear(0);
        console.log(selectedClear);
      }

    var onChangeGender=(e) =>{
        setSelectedGender(e.target.value);
        console.log(selectedGender);
        setSelectedClear(0);
    }

    var onChangeBrand= (e)=>{
        setSelectedBrand(e.target.value);
        console.log(selectedBrand);
        setSelectedClear(0);
    }
return(
    <div>
        <div>
            <h2>Filter: </h2>
                <section>
                <h3>Size</h3>
                <div onChange={onChangeSize}>
                    <input type="radio" value="S" name="size" /> S
                    <input type="radio" value="M" name="size" /> M
                    <input type="radio" value="L" name="size" /> L
                </div>
                </section>
                <section>
                <h3>Gender</h3>
                <div onChange={onChangeGender}>
                    <input type="radio" value="M" name="gender" /> Male
                    <input type="radio" value="F" name="gender" /> Female
                </div>
                </section>
                <section>
                <h3>Brand</h3>
                <div onChange={onChangeBrand}>
                    <input type="radio" value="Roadster" name="brand" /> Roadster
                    <input type="radio" value="Levis" name="brand" /> Levis
                </div>
                </section>

           
        </div>

        <div className="homePageContainer-center">
                {Data.map((dataDetail, index) => {
                if(selectedSize=== dataDetail.size && selectedGender === dataDetail.gender && selectedBrand === dataDetail.brand){
                
                    return( <div className="homePageContainer">
                    <div className="img-container">
                        <img src={dataDetail.shirtImage} alt="shirtImage"/> 
                    </div>
                    <div className="homePageContainer-footer">
                        <h1>{dataDetail.title}</h1>
                        <h2>{dataDetail.price}</h2>
                        <botton className="btn btn-primary btn-details" >Add to Cart</botton>
                    </div>
                    
                    </div> )
                    }
                   
                
                })};
            </div>
    </div>  
);

}

export default Filter;