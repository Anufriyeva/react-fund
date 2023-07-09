import React from "react";
import Video from "../components/Video";

function About() {
  const video = {
    url: 'https://www.youtube.com/embed/GNrdg3PzpJQ',
    title: 'React JS фундаментальный курс от А до Я',
    description: 'React Полный курс от А до Я. Рассмотрим основные концепции и разработаем функционал, который встречается в каждом приложении.',
  };

  return (
    <div>
          <h1 style={{ textAlign: 'center', color: 'red' }}>
              Test React App
          </h1>
      <Video video={video} />
    </div>
  );
}

export default About;