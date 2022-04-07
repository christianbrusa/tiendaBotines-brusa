import React, { useState } from "react";
import "../css/ItemCount.css";

export default function ItemCount({initialStock, stock, onAdd}) {

    function increase(){
        if(initialStock < stock){
            onAdd(initialStock + 1);
        }
    }

    function decrease(){
        if(initialStock > 1){
            onAdd(initialStock - 1);
        }
    }

    return (
        //Fragments
        <>
            <div>
            {/*Aqui no pasar la función ejecutada. En caso que la función tenga que recibir 
            parametros, aqui hacerlo con función flecha*/}
            <button id= "add" onClick={increase}>+</button>
            <input id= "quantity" type="Cantidad" value={initialStock} size="1"/>
            <button id= "remove" onClick={decrease}>-</button>
            </div>
        </>
    )
} 
