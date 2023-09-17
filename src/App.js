import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {

  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const apiCall = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=UU0rE2qq81of4fojo-KhO5rg&key=AIzaSyCO1PIrUzbrYeqirBdeMxVB56pNErUtWXY`);

    const data = await apiCall.json();
    console.log(data.items);
    setVideos(data.items);
  }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="app">
      {/* {videos.map((curr) => <a href={`https://www.youtube.com/watch?v=${curr.snippet.resourceId.videoId}`}>{curr.snippet.resourceId.videoId}</a>)}
      {videos.map((curr) => <img src={curr.snippet.thumbnails.default.url} />)} */}

      <Sidebar />
    </div>
  );
}

export default App;
