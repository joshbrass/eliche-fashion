import  { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';

import './gallery.css';

const Gallery = () => {
  const galleryLength = 15;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = [];
      for (let i = 1; i <= galleryLength; i++) {
        try {
          const image = await import(`../../images/gallery${i}.jpg`);
          importedImages.push(image.default);  // Ensure to use image.default for dynamic imports
        } catch (error) {
          console.error(`Error loading image ${i}:`, error);
        }
      }
      setImages(importedImages);
    };

    loadImages();
  }, [galleryLength]);

  return (
    <div>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos eos accusantium fuga explicabo unde quasi nam atque doloremque sunt officia?
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {images.length > 0 ? (
            images.map((image, index) => (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
