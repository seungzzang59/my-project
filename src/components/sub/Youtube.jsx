import Layout from "../common/Layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Youtube() {
  const [Vids, setVids] = useState([]);

  useState(() => {
    const api_key = "AIzaSyAgqqcexQLVEpJEC8ATfvvyYz-9VuE5QWw";
    const pid = "PLzLw2xZAXMiAeKOa7mk4OEYA19NL6GS6a";
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&maxResults=${num}&key=${api_key}`;

    console.log(url);

    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        console.log(json.items);
        setVids(json.items);
      });
  }, []);

  return (
    <Layout title={"Youtube"}>
      <section className="youtubeFrame">
        {Vids.map((el, idx) => {
          return (
            <article key={idx}>
              <div className="pic">
                <img
                  src={el.snippet.thumbnails.standard.url}
                  alt={el.snippet.title}
                />
              </div>
              <h2>
                <Link to={`/youtube-detail/${el.id}`}>{el.snippet.title}</Link>
              </h2>
            </article>
          );
        })}
      </section>
    </Layout>
  );
}
