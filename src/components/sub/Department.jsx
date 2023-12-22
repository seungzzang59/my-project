import Layout from "../common/Layout";
import { useState, useEffect } from "react";

export default function Department() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("DB/department.json")
      .then((data) => data.json())
      .then((json) => {
        console.log(json.members);
        setData(json.members);
      });
  }, []);

  return (
    <Layout title={"Departement"}>
      {Data.map((el, idx) => {
        return (
          <article key={idx}>
            <div className="pic">
              <img src={`img/${el.pic}`} alt={el.neme} />
            </div>
            <h3>{el.name}</h3>
            <p>{el.position}</p>
          </article>
        );
      })}
    </Layout>
  );
}
