// src/components/Gallery.js
import React from 'react';
import LightGallery from 'lightgallery/react';
import "./ImageGallery.css";

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins if you need them
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


function ImageGallery({ images }) {
  const onInit = () => {
    console.log('lightGallery has been initialized');
};

return (
    <div className="App">
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            
        >
            {images.map((image, index) => (
                <a key={index} href={image}>
                    <img alt={`img${index}`} src={image} />
                </a>
            ))}
        </LightGallery>
    </div>
);
 
 
}

export default ImageGallery;

