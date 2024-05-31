import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h4>Full Stack Web Development</h4>
                                <h5>HTML, CSS, Javascript, React.js, Node.js, Express.js, MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Tools/Platforms</h4>
                                <h5>Git, GitHub, Canva, Figma, Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h4>Machine Learning</h4>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h4>Databases</h4>
                                <h5>MySQL, MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h4>PowerBi, Tableau</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Data Structures and Algorithms</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Python Programming</h4>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h4>C Programming</h4>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h4>Java Programming</h4>
                            </div> 
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills;
