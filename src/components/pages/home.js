import React, { useEffect, useState } from 'react';
import '../../styles/home.css';

import menVideo from '../../videos/MEN_MODELS_VIDEOS.mp4';
import womenVideo from '../../videos/WOMEN_MODELS_VIDEOS.mp4';
import kidsVideo from '../../videos/KIDS_MODELS_VIDEOS.mp4';
import defaultVideo from '../../videos/DEFAULT_MODELS_VIDEOS.mp4';

const Home = ({ categoryNumber }) => {
  const [currentVideo, setCurrentVideo] = useState(defaultVideo);
  const [nextVideo, setNextVideo] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let newVideo;
    switch (categoryNumber) {
      case 1:
        newVideo = menVideo;
        break;
      case 2:
        newVideo = womenVideo;
        break;
      case 3:
        newVideo = kidsVideo;
        break;
      default:
        newVideo = defaultVideo;
        break;
    }

    if (newVideo !== currentVideo) {
      setNextVideo(newVideo);
      setIsTransitioning(true);
    }

    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [categoryNumber, currentVideo]);

  const handleNextVideoLoad = () => {
    setIsTransitioning(false);
    setCurrentVideo(nextVideo);
    setNextVideo(null);
  };

  return (
    <div className="home-container">
      <video
        key={currentVideo}
        className={`background-video ${isTransitioning ? 'fading-out' : ''}`}
        src={currentVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {nextVideo && (
        <video
          key={nextVideo}
          className={`background-video ${isTransitioning ? 'fading-in' : ''}`}
          src={nextVideo}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleNextVideoLoad}
        />
      )}
      <div className="category-display">
        {/* Contenido de la categoría */}
      </div>
    </div>
  );
};

export default Home;