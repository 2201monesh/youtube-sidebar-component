import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {

  let channelTitle = '';
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const apiCall = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=UU0rE2qq81of4fojo-KhO5rg&key=AIzaSyCO1PIrUzbrYeqirBdeMxVB56pNErUtWXY`);

    const data = await apiCall.json();
    console.log(data.items);
    setVideos(data.items);

    if(data.items && data.items.length > 0){
      channelTitle = data.items[0].snippet.channelTitle;
    }
    console.log(channelTitle);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      {/* {videos.map((curr) => <a href={`https://www.youtube.com/watch?v=${curr.snippet.resourceId.videoId}`}>{curr.snippet.resourceId.videoId}</a>)} */}
      

      <Sidebar />
    </div>
  );
}

export default App;
