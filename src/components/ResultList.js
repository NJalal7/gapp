import React from 'react';

import Gif from './Gif';

const ResultList = (props) => {
  const gifs = props.gifs.map((gif) => {
    return (<Gif key={gif.id} src={gif.images.looping.mp4} />);
  });
  return (
    <section className="section">
      <div className="container gif-container">
        {gifs}
      </div>
    </section>
  );
}

export default ResultList;