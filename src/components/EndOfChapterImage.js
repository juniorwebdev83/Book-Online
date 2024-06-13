// src/components/EndOfChapterImage.js
import React from 'react';
import './EndOfChapterImage.css';

const EndOfChapterImage = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/tree.jpg`;

  return (
    <div>
      <img src={imageUrl} alt="End of Chapter" className="end-of-chapter-image" />
    </div>
  );
};

export default EndOfChapterImage;
