import React from 'react';

function Video({ video }) {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GNrdg3PzpJQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
}

export default Video;