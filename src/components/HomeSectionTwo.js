import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';

const HomeSectionTwo = () => {

  return (
    <div className="image-section">
      <div className="photo1-section">
        <img src={ photo1 } alt="photo1" width="350px" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Risus at ultrices mi tempus imperdiet nulla malesuada.</p>
      </div>
      <div className="photo2-section">
        <img src={ photo2 } alt="photo2" width="350px" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Risus at ultrices mi tempus imperdiet nulla malesuada. </p>
      </div>
      <div className="photo3-section">
        <img src={ photo3 } alt="photo3" width="350px" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Risus at ultrices mi tempus imperdiet nulla malesuada. </p>
      </div>
    </div>
  );
}

export default HomeSectionTwo;