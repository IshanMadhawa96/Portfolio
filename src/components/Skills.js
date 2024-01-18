import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const  Skills = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
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
                        <p>I am a skilled and results-driven Associate Software Engineer with a comprehensive background in Backend Development. My proficiency lies in utilizing technologies such as Laravel, REST API, MySQL, PHP, Git, and Angular to design, develop, and deploy robust web applications. With over 3 years of hands-on experience, I have successfully contributed to the development of School Management Systems and Learning Management Systems. My expertise extends to database technologies like MySQL, MS SQL, and PostgreSQL, and I am adept at integrating third-party APIs. My commitment to excellence is evident in my ability to navigate fast-paced, deadline-driven environments while maintaining a self-organized approach. I am a quick learner, detail-oriented, and possess strong analytical and problem-solving skills. My technical skills include programming languages such as PHP, JavaScript, Java, and Python, along with proficiency in debugging tools, API testing, and version control systems like X-Debug, Postman, and Git. This, combined with my educational background, makes me a valuable asset in delivering successful software solutions.<br></br> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Software Trouble shooting</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Laravel Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>SQL</h5>
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