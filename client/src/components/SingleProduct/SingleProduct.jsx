import "./SingleProduct.scss";
import {
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus
} from "react-icons/fa";
import React from "react";
import prod from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return <div className="single-product-container">
        <div className="layout">
            <div className="single-product-page">
               <div className="left">
                <img src={prod} alt=""/>
               </div>
               <div className="right">

               </div>
            </div>
        </div>
    </div>;
};

export default SingleProduct;
