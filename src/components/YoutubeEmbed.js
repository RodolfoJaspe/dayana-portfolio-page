import React from "react";
import PropTypes from "prop-types";

function YoutubeEmbed({embedId}) {
  return (
    <div className="video-container">
        <iframe
        // width="540"
        // height="305"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0" 
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "90vw",
            height: "50.83vw",
            maxWidth: "600px",
            maxHeight: "337.5px"
        }}
        ></iframe>
    </div>
  )
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default YoutubeEmbed