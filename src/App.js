
import './App.css';
import VideoCard from './VideoCard';
function App() {

  return (
    <div className="app">
     
      <div className="app_top">
            <img className="app_logo" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg"  alt=""/>
            <h1>Reels</h1>
      </div>
      <div className="app_videos">
      <VideoCard 
         channel='Ritish jaiswal'
         avatarSrc='https://reactjs.org/logo-og.png'
         song='Test song -sssss'
         url='http://techslides.com/demos/sample-videos/small.webm'
         likes={950}
         shares={30}
      
      />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      </div>
    </div>
  );
}

export default App;
