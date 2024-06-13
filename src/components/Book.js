import React from 'react';
import FlipPage from 'react-flip-page';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';
import Chapter11 from './Chapter11';
import Chapter12 from './Chapter12';
import Chapter13 from './Chapter13';
import Chapter14 from './Chapter14';
import { BookContainer, PageContainer, BookWrapper } from '../styles';

const Book = () => {
    return (
        <BookWrapper>
            <BookContainer>
                <FlipPage
                    orientation="horizontal"
                    uncutPages
                    animationDuration={600}
                    showHint
                    flipOnTouch
                    flipOnMouse
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* Chapter 1 */}
                    <PageContainer>
                        <Chapter1 />
                    </PageContainer>

                    {/* Chapter 2 */}
                    <PageContainer>
                        <Chapter2 />
                    </PageContainer>

                    {/* Chapter 3 */}
                    <PageContainer>
                        <Chapter3 />
                    </PageContainer>

                    {/* Chapter 4 */}
                    <PageContainer>
                        <Chapter4 />
                    </PageContainer>

                    {/* Chapter 5 */}
                    <PageContainer>
                        <Chapter5 />
                    </PageContainer>

                    {/* Chapter 6 */}
                    <PageContainer>
                        <Chapter6 />
                    </PageContainer>

                    {/* Chapter 7 */}
                    <PageContainer>
                        <Chapter7 />
                    </PageContainer>

                    {/* Chapter 8 */}
                    <PageContainer>
                        <Chapter8 />
                    </PageContainer>

                    {/* Chapter 9 */}
                    <PageContainer>
                        <Chapter9 />
                    </PageContainer>

                    {/* Chapter 10 */}
                    <PageContainer>
                        <Chapter10 />
                    </PageContainer>

                    {/* Chapter 11 */}
                    <PageContainer>
                        <Chapter11 />
                    </PageContainer>

                    {/* Chapter 12 */}
                    <PageContainer>
                        <Chapter12 />
                    </PageContainer>

                    {/* Chapter 13 */}
                    <PageContainer>
                        <Chapter13 />
                    </PageContainer>

                    {/* Chapter 14 */}
                    <PageContainer>
                        <Chapter14 />
                    </PageContainer>
                </FlipPage>
            </BookContainer>
        </BookWrapper>
    );
};

export default Book;
