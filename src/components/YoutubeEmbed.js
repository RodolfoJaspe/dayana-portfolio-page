import React from "react";
import PropTypes from "prop-types";

function YoutubeEmbed({embedId}) {
  return (
    <div className="video-responsive">
        <iframe
        width="540"
        height="305"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
  )
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default YoutubeEmbed