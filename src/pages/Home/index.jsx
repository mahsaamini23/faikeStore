import React from "react";
import Card from "../../Components/Card/Card";
import image from "../../assets/images/newest.jpg";
import CardList from "../../Components/CardList/CardList";
import Container from "../../Components/Container/Container";
const product = [{
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
}]
const Home = () => {
    return(
    <div className="home">
        <Container>
            <CardList title={"دسته بندی اول"} href="/categories/category1" >
                {product.map((item, index)=>(<Card key={index} {...item}/>))}
            </CardList>
        </Container>
        <Container>
            <CardList title={"دسته بندی دوم"} href="/categories/category2">
                {product.map((item, index)=> <Card key={index} {...item}/>)}
            </CardList>
        </Container>
        <Container>
            <CardList title={"دسته بندی سوم"} href="/categories/category3">
                {product.map((item, index)=> <Card key={index} {...item}/>)}
            </CardList>
        </Container>
    </div>
    )
}

export default Home;