import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/productCarousel.css";
import { Button } from "react-bootstrap";
import { useCart } from "../hooks/useCart";
import { BsCartPlusFill } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";

const ProductCarousel = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

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
          {products.map((product, index) => {
            const isProductInCart = checkProductInCart(product);
            return (
              <SwiperSlide key={index}>
                <div className="product-card py-3">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                    <Button
                      variant={isProductInCart ? "danger" : "dark"}
                      onClick={() => {
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product);
                      }}
                    >
                      {isProductInCart ? (
                        <>
                          <BsCartX /> Quitar
                        </>
                      ) : (
                        <>
                          <BsCartPlusFill /> Agregar
                        </>
                      )}
                    </Button>
                    <p className="mb-0">${product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default ProductCarousel;
