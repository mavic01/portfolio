import "./intro.scss"
import Typed from 'react-typed';

const Intro = () => {

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer"><img src="assets/fb2.png" alt=""/></div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Victor Iberi</h1>
                    <h3>
                    <Typed 
                        strings={['Frontend Web Developer', 'Web Designer', "Artist", "Graphic Designer" ]}
                        typeSpeed={35}
                        backSpeed={60}
                        loop
                    />
                    </h3>
                </div>
                <a href="#portfolio"><img src="assets/down.png" alt="down"/></a>
            </div>
        </div>
    )
}

export default Intro
