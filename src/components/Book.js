import React from 'react';
import FlipPage from 'react-flip-page';
import Chapter1 from './Chapter1';  // Assuming Chapter1.js is in src/components
import Chapter2 from './Chapter2';  // Assuming Chapter2.js is in src/components
import Chapter3 from './Chapter3';  // Assuming Chapter3.js is in src/components
import Chapter4 from './Chapter4';  // Assuming Chapter4.js is in src/components
import { BookContainer, PageContainer } from '../styles';  // Adjusted import path for styles

const Book = () => {
    return (
        <BookContainer>
            <FlipPage
                orientation="horizontal"
                uncutPages
                animationDuration={400}
                showHint
                flipOnTouch
                flipOnMouse
                style={{ width: '100%', height: '100%' }}
            >
                <PageContainer><Chapter1 /></PageContainer>
                <PageContainer><Chapter2 /></PageContainer>
                <PageContainer><Chapter3 /></PageContainer>
                <PageContainer><Chapter4 /></PageContainer>
                {/* Add more chapters as needed */}
            </FlipPage>
        </BookContainer>
    );
};

export default Book;
