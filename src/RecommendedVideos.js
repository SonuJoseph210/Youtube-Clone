import React from "react";
import "./recommendedvideos.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className="recommendedvideos">
      <h2>Recommended</h2>
      <div className="RV_videos">
        <VideoCard
          title="💙❤️THE 2022/23 LEAGUE CHAMPIONS PARADE | MEN'S & WOMEN'S FIRST TEAMS 🔥"
          views="15K views"
          timestamp="50 minutes ago"
          channelImage="https://yt3.googleusercontent.com/PZ2J42x-oM3bUN7Sd7ubx8H5qioraHcGqqFAgFlA6Qgg1tgCW8JYOCo1B69NRe6WiGVDRCsA=s176-c-k-c0x00ffffff-no-rj"
          channel="FC Barcelona"
          image="https://img.youtube.com/vi/MCEwMsFL8P8/maxresdefault.jpg"
        />
        <VideoCard
          title="EXTRACTION 2 | Official Trailer | Netflix"
          views="706K views"
          timestamp="4 hours ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AGIKgqN1F5HXRCFl48NA5bwfOJsdLakGKcwyJrcZ31fkGQ=s176-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://img.youtube.com/vi/LaI__Ikw4bU/maxresdefault.jpg"
        />

        <VideoCard
          title="Ferrari 488 Pista || Supercars in Chennai || One of One Spec"
          views="3.6K views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AGIKgqPSXZ1J2P52Hz_R4yTwoIybYWoDRBB5K_nCYGgNJ40=s88-c-k-c0x00ffffff-no-rj"
          channel="Ajay Sharan"
          image="https://img.youtube.com/vi/r1jn22985GI/maxresdefault.jpg"
        />

        <VideoCard
          title="FAST X | Final Trailer"
          views="3.3M views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/nTF9n3fkaEcIcpJ0XY4aEKLx5iu_vbjfhPJRFmQ5b9reVOhrG8kv6bosigUszt-p0jdG5K_dyw=s88-c-k-c0x00ffffff-no-rj"
          channel="The Fast Saga"
          image="https://img.youtube.com/vi/eoOaKN4qCKw/maxresdefault.jpg"
        />

        <VideoCard
          title="Rocket | Marvel Studios' Legends"
          views="798K views"
          timestamp="13 days ago"
          channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s88-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://img.youtube.com/vi/gAbpKX3Ch04/maxresdefault.jpg"
        />
        <VideoCard
          title="SACRIFICE = SUCCESS | Best Study Motivation"
          views="899K views"
          timestamp="3 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AGIKgqOsZ5tKm1_a5egrW3FbeGhJO3t9hw-xz8UiNCyc1A=s88-c-k-c0x00ffffff-no-rj"
          channel="Motivation2Study"
          image="https://img.youtube.com/vi/CFiCdpnn-jo/maxresdefault.jpg"
        />
        <VideoCard
          title="Types Of People At The Gym | Jordindian"
          views="1.8M views"
          timestamp="2 weeks ago"
          channelImage="https://yt3.ggpht.com/ZgeNaE-oQToMqrfPDrFDbzq3V8jsWuACKCXEpKkKGa_Wk1rxgjQ7gwR3F17BQjzrlTEXGmMo=s88-c-k-c0x00ffffff-no-rj"
          channel="Jordindian"
          image="https://img.youtube.com/vi/-fjcOppnbZI/maxresdefault.jpg"
        />
        <VideoCard
          title="Lionel Messi lifts the FIFA World Cup trophy for Argentina - Qatar 2022 | JioCinema & Sports18"
          views="1.1M views"
          timestamp="4 months ago"
          channelImage="https://yt3.ggpht.com/xVlgMIR8lMvUpwl_wtVnzYKL46n9v3vK2pl3LJA9F5yguGx7Ca2n3QtlmzsUW2uivr8RLUtAkQ=s88-c-k-c0x00ffffff-no-rj"
          channel="JioCinema"
          image="https://img.youtube.com/vi/4G10AP2P29w/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
