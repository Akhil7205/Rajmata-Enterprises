import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './HeroSection.css';
import image1 from './img/sec-camp.jpg'
import image2 from './img/IMG_9934.jpg'
import image3 from './img/DSC_6082.jpg'
import image4 from './img/IMG_9937.jpg'

const items = [
  {
    src: image1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: image2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: image3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
  {
    src: image4,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 4,
  },
];

function HeroSection(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      if (!animating) {
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(cycle);
  }, [activeIndex, animating]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          // captionText={item.caption}
          // captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default HeroSection;
