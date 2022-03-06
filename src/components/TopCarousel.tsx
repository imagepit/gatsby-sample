import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const GlobalStyle = styled.div`
  li.react-multi-carousel-item {
    margin: 20px 10px;
    box-shadow: 10px 10px 10px #eee;
    border-radius: 10px;
    overflow: hidden;
  }
`;

export default function TopCarousel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  return (
    <GlobalStyle>
      <Carousel
        swipeable
        draggable
        infinite
        autoPlay
        autoPlaySpeed={3000}
        responsive={responsive}
        partialVisible
      >
        <div>
          <img
            src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
            alt="cat"
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
            alt="cat"
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
            alt="cat"
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
            alt="cat"
            width="100%"
          />
        </div>
      </Carousel>
    </GlobalStyle>
  );
}
