// src/components/Book.js (or Book.jsx)

import React from 'react';
import FlipPage from 'react-flip-page';
import Chapter1 from './Chapter1'; // Assuming Chapter1.js is in src/components
import Chapter2 from './Chapter2'; // Assuming Chapter2.js is in src/components
import Chapter3 from './Chapter3'; // Assuming Chapter3.js is in src/components
import Chapter4 from './Chapter4'; // Assuming Chapter4.js is in src/components
import Chapter5 from './Chapter5'; // Assuming Chapter5.js is in src/components
import Chapter6 from './Chapter6'; // Assuming Chapter6.js is in src/components
import Chapter7 from './Chapter7'; // Assuming Chapter7.js is in src/components
import Chapter8 from './Chapter8'; // Assuming Chapter8.js is in src/components
import Chapter9 from './Chapter9'; // Assuming Chapter9.js is in src/components
import Chapter10 from './Chapter10'; // Assuming Chapter10.js is in src/components
import Chapter11 from './Chapter11'; // Assuming Chapter11.js is in src/components
import Chapter12 from './Chapter12'; // Assuming Chapter12.js is in src/components
import Chapter13 from './Chapter13'; // Assuming Chapter13.js is in src/components
import Chapter14 from './Chapter14'; // Assuming Chapter14.js is in src/components

const Book = () => {
    return (
        <div style={{ margin: '50px auto', maxWidth: '800px', height: '100%' }}>
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
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter1 />
                </div>

                {/* Chapter 2 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter2 />
                </div>

                {/* Chapter 3 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter3 />
                </div>

                {/* Chapter 4 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter4 />
                </div>

                {/* Chapter 5 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter5 />
                </div>

                {/* Chapter 6 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter6 />
                </div>

                {/* Chapter 7 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter7 />
                </div>

                {/* Chapter 8 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter8 />
                </div>

                {/* Chapter 9 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter9 />
                </div>

                {/* Chapter 10 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter10 />
                </div>

                {/* Chapter 11 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter11 />
                </div>

                {/* Chapter 12 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter12 />
                </div>

                {/* Chapter 13 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter13 />
                </div>

                {/* Chapter 14 */}
                <div style={{ width: '100%', height: '100%' }}>
                    <Chapter14 />
                </div>
            </FlipPage>
        </div>
    );
};

export default Book;
