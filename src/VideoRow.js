import React from "react";
import "./VideoRow.css";
import { Avatar } from "@mui/material";

function VideoRow({
  image,
  title,
  views,
  timestamp,
  channel,
  description,
  subs,
  channelImage
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p>
          {views} · {timestamp}
        </p>
        <p className="videoRow_channelName">
        <Avatar className="videoRow_avatar" alt={channel} src={channelImage} />  {channel} · {subs}
        </p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
