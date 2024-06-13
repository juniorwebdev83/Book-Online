import React from 'react';
import { EndOfChapterImageWrapper, EndOfChapterImageOverlay, EndOfChapterImageElement } from '../styles'; // Import styles

const EndOfChapterImage = ({ imageUrl }) => {
    return (
        <EndOfChapterImageWrapper>
            <EndOfChapterImageOverlay />
            <EndOfChapterImageElement src={imageUrl} alt="End of chapter image" />
        </EndOfChapterImageWrapper>
    );
};

export default EndOfChapterImage;
