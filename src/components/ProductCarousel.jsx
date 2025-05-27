// src/components/ProductCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/productCarousel.css"; 

const ProductCarousel = ({ products }) => {

  return (
    <section id="carrusel">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            620: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            920: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
