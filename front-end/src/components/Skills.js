import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p></p>
              <div className="skills-grid">
                <div className="item">
                  <img src={meter1} alt="MERN Stack Web Development" />
                  <h4>MERN Stack Web Development</h4>
                  <h5>HTML, CSS, Javascript, React.js, Node.js, Express.js, MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Tools/Platforms" />
                  <h4>Tools/Platforms</h4>
                  <h5>Git, GitHub, Canva, Figma, Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Tools/Platforms" />
                  <h4>PowerBI, Tableau</h4>
                </div>
                <div className="item">
                  <img src={meter2} alt="Machine Learning" />
                  <h4>Machine Learning</h4>
                </div>
                <div className="item">
                  <img src={meter3} alt="Data Structures and Algorithms" />
                  <h4>Data Structures and Algorithms</h4>
                </div>
                <div className="item">
                  <img src={meter1} alt="Databases" />
                  <h4>Databases</h4>
                  <h5>MySQL, MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Python Programming" />
                  <h4>Python Programming</h4>
                </div>
                <div className="item">
                  <img src={meter1} alt="C Programming" />
                  <h4>C Programming</h4>
                </div>
                <div className="item">
                  <img src={meter1} alt="Java Programming" />
                  <h4>Java Programming</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}

export default Skills;
