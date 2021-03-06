import React, { Component, useEffect, useState } from "react";
import Promise from '../utils/Promesa';
import Products from './Products';
import ItemList from "./ItemList";
import Footer from './Footer';
import Loading from './Loading';
import "../css/ItemListContainer.css";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

    const [Items, setItems] = useState([]);

    const { id } = useParams();

    let filterProducts = [];

    useEffect(() => {
        //Promise(700,Products)

        if (id) {
            filterProducts = Products.filter(item => item.category == id)
            console.log(filterProducts)
            Promise(2000, filterProducts)
                .then(result => setItems(result))
                .catch(error => console.log("error"));
        }
        else {
            Promise(2000, Products)
                .then(result => setItems(result))
                .catch(error => console.log("error"));
        }

    }, [id])

    return (
        //Fragments
        <>
            <div className="ResultProducts">
                <ItemList Products={Items} setProducts={setItems}/>
            </div>
            {
            Items.length > 0
            ? ""
            : <Loading/>
            }
        </>
    )
} 