import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard'; 

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderProducts = ({category, limit}) => {
    const [products, setProducts] = useState([]);

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    useEffect(
        () => {
            fetch('https://dummyjson.com/products/category/' + category + '?limit=' + limit)
            .then(res => res.json())
            .then(data => setProducts(data.products))
        }, [category, limit]
    )
    
    return (
        <div className="slider-products container">
            <Slider {...settings}>
                {products.map(product => (
                    <ProductCard product={product} />
                ))}
            </Slider>
        </div>
    );
};

export default SliderProducts;
