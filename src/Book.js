import React from 'react';
import FlipPage from 'react-flip-page';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';
import { BookContainer, PageContainer } from './styles';

const Book = () => {
    return (
        <BookContainer>
            <FlipPage
                orientation="horizontal"
                uncutPages
                animationDuration={400}
                showHint
                flipOnTouch
            >
                <PageContainer><Chapter1 /></PageContainer>
                <PageContainer><Chapter2 /></PageContainer>
                <PageContainer><Chapter3 /></PageContainer>
                <PageContainer><Chapter4 /></PageContainer>
                {/* Add other chapters similarly when created */}
            </FlipPage>
        </BookContainer>
    );
}

export default Book;
