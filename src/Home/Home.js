
import './Home.css';

function Home() {
  return (

    <div style={rootContainer}>
      <div style={headerContainer}>

      </div >
      <div style={bodyContainer}>
        body
    </div >
      <div style={sliderContainer}>
        slider
    </div >
      <div style={footerContainer}>
        footer
    </div >
    </div>
  );
}

export default Home;
const rootContainer = {
  height: '100vh'
}
const headerContainer = {
  position: 'relative',
  backgroundColor: '#ffffff',
  width: '100%',
  height: '10%'
};
const bodyContainer = {
  position: 'relative',
  backgroundColor: '#ffffff',
  width: '100%',
  height: '50%'
};
const sliderContainer = {
  position: 'relative',
  backgroundColor: '#ffffff',
  width: '100%',
  height: '30%'
};
const footerContainer = {
  position: 'relative',
  backgroundColor: '#ffffff',
  width: '100%',
  height: '10%'
};