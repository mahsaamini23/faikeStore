import React,{useState} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import image from "../../assets/images/newest.jpg";
import "./categories.style.scss";

const Categories = () =>{
    const{categoryId}=useParams();
    const[categories, setCategories]=useState([
        {id:1,title:"موبایل"},
        {id:2,title:"تبلت"},
        {id:3,title:"لب تاب"},
        {id:4,title:"تلویزیون"},
        {id:5,title:"لوازم جانبی"},
    ]); 
    const[product, setProduct]=useState([
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        },
        {
            src:image,
            name:"نام کالا در دسته بندی",
            price:22_000_000,
            onClick:()=>{},
        }
    ])
    return(
        <div className="categories">
            <ul>
                {categories.map((item)=>(
                <li key={item.id}>
                    <Link to={`/categories/1`}>{item.title}</Link>
                </li>))}  
            </ul>
            <div className="product__list">
                <h2>{
                    categories.find((item)=> item.id.toString()===categoryId.item) //
                }</h2>
                <div>
                    {product.map((p,index) =>(
                    <Card id={index} {...p}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories;

