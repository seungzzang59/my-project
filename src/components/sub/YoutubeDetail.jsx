// 스타일연결해서 사스작업해도됨

import { useParams } from "react-router-dom";
import Layout from "../common/Layout";

function YoutubeDetail() {
  const params = useParams();
  console.log(params);
  return (
    <Layout title={"Detail"}>
      <p>유튜브 상세페이지</p>
      <p>{params.id}</p>
    </Layout>
  );
}

export default YoutubeDetail;
