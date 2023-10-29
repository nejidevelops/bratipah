import React, { useState } from "react";
import Modal from "./Popup";
import { photos } from "./data/data";
import './index.css'

const ImageGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="image-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="image-item">
            <img
              src={photo.image}
              alt="Outfit"
              onClick={() => openModal(photo)}
            />
          </div>
        ))}
      </div>

      {showModal && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImageGallery;
