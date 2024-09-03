import React from "react";
import Slider from "react-slick";
import { Route, Routes } from "react-router-dom";
import LinkItem from "./LinkItem";
import logoImage from "./logo.jpeg";
import AtencionCliente from "./AtencionCliente"; // Debes asegurarte de tener solo una importación
import carouselImage2 from "./WhatsApp Image 2024-02-10 at 19.38.41.jpeg";
import carouselImage3 from "./WhatsApp Image 2024-02-10 at 19.38.37.jpeg";
import carouselImage4 from "./WhatsApp Image 2024-02-10 at 19.38.49.jpeg";
import carouselImage5 from "./WhatsApp Image 2024-02-10 at 19.39.16.jpeg";
import carouselImage1 from "./imagengea1.png";
import carouselImage6 from "./imagengea2.png";
import carouselImage7 from "./imagengea3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import debitoAutomaticoImage from "./debito.png";
import pagaOnlineImage from "./pagaonline.png";
import credencialDigitalImage from "./credencial.png";
import contacto from "./contacto.jpg";
import cartillamedica from "./cartillamedica.jpg";
import autestudios from "./autestudios.webp";
import medicacion from "./medicacion.png";
import cirugias from "./cirugia2.jpg";



const Links = () => {
  const carouselImages = [
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5,
    carouselImage1,
    carouselImage6,
    carouselImage7,
  ];

  const links = [
    {
      text: "Débito Automático – GEA MOVIL",
      url: "https://laprepagaquenecesitas.com.ar/debito-automatico/",
      image: debitoAutomaticoImage,
    },
    {
      text: "REFERIME A TUS CONTACTOS",
      url: "https://wa.link/yd9kpz",
      image: contacto,
    },
    {
      text: "CREDENCIAL DIGITAL",
      url: "http://www.prestacionesgea.com.ar/AUTOGESTION-PREPAGA/",
      image: credencialDigitalImage,

    },
    {
      text: "CARTILLA MEDICA",
      url: "https://laprepagaquenecesitas.com.ar/planes-y-cartilla/",
      image: cartillamedica,
    },
    { text: "PAGA ONLINE",
     url: "https://geamovil.autogestion.io/",
     image: pagaOnlineImage, },
    
    {
      text: "AUTORIZACIONES ESTUDIOS O PRACTICAS",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScICd1v-xryE3CSsUYmRwUmv0gzOsB2PDWa_wwNAeWXZX0J_g/viewform",
      image: autestudios,
    },
    {
      text: "AUTORIZACION MEDICACION",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSftIRdL2qyY7c6wBv7eEqlm94xANjh8t1mUfSMaZzwmOOPldg/viewform?usp=send_form",
      image: medicacion,
    
    },
    {
      text: "AUTORIZACIONES CIRUGIAS",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfApriZ-htM1CSl9DW_CF7rjc-9cbK9tv5J3UBz7BRPQMmCeQ/viewform",
      image: cirugias,
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="tu-carousel-container" style={{ position: "relative", padding: "40px"  }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "215px",
          zIndex: 1,
          marginBottom: "10px",
        }}
      >
        <Slider {...carouselSettings} className="carusel" dots={false}>
          {carouselImages.map((image, index) => (
            <div  key={index}>
              <img
                src={image}
                className="carousel-image"
                alt={`Carousel`}
                style={{ width: "100%"  }}                
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <img
          src={logoImage}
          className="logoImage"
          alt="Logo de la web"
          style={{ width: "120px", height: "auto", margin: "20px", borderRadius: "10px"}}
        />
        <h1>GEA cobertura de salud</h1>
        <h3>Paula Ferreyra Asesora comercial</h3>
        <div className="links-container">
          {links.map((link, index) => (
            <LinkItem key={index} link={link} />
          ))}
        </div>
      </div>

      {/* Configuración de rutas */}
      <Routes>
        <Route path="/atencion-al-cliente" element={<AtencionCliente />} />
      </Routes>

      <div className="atencion-cliente-container">
        <h2>Atención al cliente GEA</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">
              <FaEnvelope />
            </span>
            <p>info@geanet.com.ar</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <FaWhatsapp />
            </span>
            <p>3515212168</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              < FaPhone/> 
            </span>
            <p>08101222432</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
