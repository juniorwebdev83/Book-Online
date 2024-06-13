// styles.js

import styled from 'styled-components';

export const BookWrapper = styled.div`
    perspective: 2000px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BookContainer = styled.div`
    width: 90%;
    height: 90%;
    max-width: 1200px;
    max-height: 800px;
    position: relative;
    transform-style: preserve-3d;
    background-color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 1200px) {
        width: 95%;
        height: 95%;
    }

    @media (max-width: 992px) {
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: none;
    }
`;

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    overflow: hidden;
`;

export const EndOfChapterImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EndOfChapterImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 2;
`;

export const EndOfChapterImageElement = styled.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    z-index: 3;
`;
