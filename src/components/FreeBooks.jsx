import React, { useEffect, useState } from 'react';
// import list from '../assets/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function FreeBooks() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get('http://localhost:3000/book')
                console.log(response.data);
                setBooks(response.data.data.filter((date) => date.category === 'Free'))
            }
            catch (error) {
                console.log("error in fetching Books", error);
            }
        }
        getBook();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl mx-auto container md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Books</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate magnam earum voluptas adipisci quaerat doloremque quidem pariatur ad sed et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorem?
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            books.map((item) => (
                                <Cards key={item._id} item={item} />

                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBooks