import React from 'react'
// import { SlideStyled } from '../Styles/Slides_style'

// <style>
//     * {box-sizing: border-box;}
//     body {font-family: Verdana, sans-serif;}
//     .mySlides {display: none;}
//     img {vertical-align: middle;}

//     /* Slideshow container */
//     .slideshow-container {
//     max-width: 1000px;
//     position: relative;
//     margin: auto;
//     }

//     /* Fading animation */
//     .fade {
//     -webkit-animation-name: fade;
//     -webkit-animation-duration: 1.5s;
//     animation-name: fade;
//     animation-duration: 1.5s;
//     }

//     @-webkit-keyframes fade {
//     from {opacity: .4} 
//     to {opacity: 1}
//     }

//     @keyframes fade {
//     from {opacity: .4} 
//     to {opacity: 1}
//     }

//     /* On smaller screens, decrease text size */
//     @media only screen and (max-width: 300px) {
//     .text {font-size: 11px}
//     }
// </style>

function Slides() {
    

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].SlideStyled.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].SlideStyled.display = "block";  
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }


    return (
        <SlideStyled>
        <div className="slideshow-container">

            <div className="mySlides fade">
              <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-c0cfd497-0fff-4297-bc8b-c0620a37ef47.jpg" alt="Climatización" style="width:100%" />
            </div>
        
            <div className="mySlides fade">
              <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MLA-especial-reyes/6ffc6db0-4944-11eb-8722-9d30f54fe8e5-home-slider_desktop.jpg" alt="Especial Reyes" style="width:100%" />
            </div>
        
            <div className="mySlides fade">
              <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-5da8e103-85f3-4002-9b91-7c7addd2855b.jpg" alt="Especial Autopartes" style="width:100%" />
            </div>
        
            <div className="mySlides fade">
              <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-ed3cb379-e4dd-4d54-a1cf-55f17acd3166.jpg" alt="Especial Jardín" style="width:100%" />
            </div>
        
            <div className="mySlides fade">
              <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-1bcc8aeb-e7da-4808-bcee-5a590c1d21e2.jpg" alt="Espacial neumáticos " style="width:100%" />
            </div>
        
            <div className="mySlides fade">
              <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-1415a635-ccc5-4547-a192-4e143c509794.png" alt="Mercado Puntos" style="width:100%" />
            </div>
        
            <div className="mySlides fade">
              <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-a756983c-89cb-49b6-b787-e37a8c8340e0.png" alt="Mercado Pago Kit Point" style="width:100%" />
            </div>
        </div>
        </SlideStyled>
    )
}


export default Slides;
