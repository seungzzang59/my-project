// 스타일연결해서 사스작업해도됨

import { useParams } from "react-router-dom";
import Layout from "../common/Layout";
import { useState, useEffect } from "react";

function YoutubeDetail() {
  const { id } = useParams();
  const [YoutubeData, setYoutubeData] = useState(null);

  useEffect(() => {
    const api_key = "AIzaSyAgqqcexQLVEpJEC8ATfvvyYz-9VuE5QWw";
    const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;
    fetch(baseURL)
      .then((data) => data.json())
      .then((json) => {
        console.log(json.items[0].snippet);
        setYoutubeData(json.items[0].snippet);
      });
  }, []);

  return (
    <Layout title={"Detail"}>
      <h3>{YoutubeData?.title}</h3>
      <div className="videoBox">
        <iframe
          src={`https://www.youtube.com/embed/${YoutubeData?.resourceId.videoId}`}
          title={YoutubeData?.title}
        ></iframe>
      </div>
      <p>{YoutubeData?.description}</p>
    </Layout>
  );
}

export default YoutubeDetail;
