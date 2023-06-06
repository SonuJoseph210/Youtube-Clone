import React from "react";
import "./searchPage.css";
import ChannelRow from "./ChannelRow";
import TuneIcon from "@mui/icons-material/Tune";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/PZ2J42x-oM3bUN7Sd7ubx8H5qioraHcGqqFAgFlA6Qgg1tgCW8JYOCo1B69NRe6WiGVDRCsA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="FC Barcelona"
        verified
        subs="15M subscribers"
        noOfVideos="10K videos"
        description="FIRST SPORTS TEAM IN THE WORLD TO REACH 1️⃣5️⃣ MILLION SUBSCRIBERS ON @YOUTUBE! 💙❤️"
      />
      <hr />

      <VideoRow
        title="🏆 10 SPECIAL MOMENTS FROM LA LIGA 2022/23 SEASON 🏆"
        subs="15M subscribers"
        views="31K views"
        timestamp="7 hours ago"
        channel="FC Barcelona"
        image="https://img.youtube.com/vi/ErhskEqHfYI/maxresdefault.jpg"
        channelImage="https://yt3.ggpht.com/PZ2J42x-oM3bUN7Sd7ubx8H5qioraHcGqqFAgFlA6Qgg1tgCW8JYOCo1B69NRe6WiGVDRCsA=s48-c-k-c0x00ffffff-no-rj"
        description="Here are 10 things that you need to know about our league-winning season."
      />
      <VideoRow
        title="ESPANYOL 2-4 BARÇA | LALIGA 2022/23 MD34"
        subs="15M subscribers"
        views="670K views"
        timestamp="2 days ago"
        channel="FC Barcelona"
        image="https://img.youtube.com/vi/vJOYNhiyLAU/maxresdefault.jpg"
        channelImage="https://yt3.ggpht.com/PZ2J42x-oM3bUN7Sd7ubx8H5qioraHcGqqFAgFlA6Qgg1tgCW8JYOCo1B69NRe6WiGVDRCsA=s48-c-k-c0x00ffffff-no-rj"
        description="Victory in Cornellà means a 27th domestic championship and the first under Xavi. #LaLigaHighlights"
      />
      <VideoRow
        title="LA LIGA CELEBRATIONS IN THE LOCKER ROOM 💙❤️"
        subs="15M subscribers"
        views="521K views"
        timestamp="2 days ago"
        channel="FC Barcelona"
        image="https://img.youtube.com/vi/Tq1zrS5XSlM/maxresdefault.jpg"
        channelImage="https://yt3.ggpht.com/PZ2J42x-oM3bUN7Sd7ubx8H5qioraHcGqqFAgFlA6Qgg1tgCW8JYOCo1B69NRe6WiGVDRCsA=s48-c-k-c0x00ffffff-no-rj"
        description="We are the champions! FC Barcelona have beaten Espanyol in Cornellà to mathematically clinch the club's 27th league title and the first under Xavi Hernández."
      />
      <VideoRow
        title="Sergio Busquets - TRIBUTE VIDEO 💙❤️"
        subs="15M subscribers"
        views="192K views"
        timestamp="6 days ago"
        channel="FC Barcelona"
        image="https://img.youtube.com/vi/vJOYNhiyLAU/maxresdefault.jpg"
        channelImage="https://yt3.ggpht.com/PZ2J42x-oM3bUN7Sd7ubx8H5qioraHcGqqFAgFlA6Qgg1tgCW8JYOCo1B69NRe6WiGVDRCsA=s48-c-k-c0x00ffffff-no-rj"
        description="The decision by Sergio Busquets to leave the Club puts an end to a brilliant blaugrana career of more than 30 trophies in 15 seasons"
      />
    </div>
  );
}

export default SearchPage;
