import React from "react";
import Card from "./Card";

function Tours({tourdata, removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title" >Travel With Rahul</h2>
            </div>
            <div className="cards">
                {
                    tourdata.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}


export default Tours;