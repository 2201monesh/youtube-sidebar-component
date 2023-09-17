import { useEffect, useState } from "react";

function App() {

  const [videos, setVideos] = useState([]);

  // const getData = () => {
  //   fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=UU0rE2qq81of4fojo-KhO5rg&key=AIzaSyCO1PIrUzbrYeqirBdeMxVB56pNErUtWXY')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     data.items.forEach((curr) => {
  //       // vidTitle = curr.snippet.title;
  //       console.log(curr.snippet.title);
  //     })
  //   })
  // }

  const getData = async () => {
    const apiCall = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=UU0rE2qq81of4fojo-KhO5rg&key=AIzaSyCO1PIrUzbrYeqirBdeMxVB56pNErUtWXY');

    const data = await apiCall.json();
    console.log(data.items);
    setVideos(data.items);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {videos.map((curr) => <a href={`https://www.youtube.com/watch?v=${curr.snippet.resourceId.videoId}`}>{curr.snippet.resourceId.videoId}</a>)}
      {videos.map((curr) => <img src={curr.snippet.thumbnails.default.url} />)}
    </div>
  );
}

export default App;
