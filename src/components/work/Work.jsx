import "./work.scss"
import { useState } from 'react';

const Work = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: 1,
            icon: "assets/mobile.png",
            title: "Music Web App",
            desc: "This app was made using hTML, CSS  and Javascript. Font awesome was used for the icons.",
            img: "assets/music-app.png",
            link: "https://mavic01.github.io/cv/"
        },
        {
            id: 2,
            icon: "assets/writing.png",
            title: "Booklist Web App",
            desc: "This app was created using HTML, bootstrap and OOP in Javascript. Data here is stored using the browser's local storage.",
            img: "assets/booklist.png",
            link: "https://mavic01.github.io/cv/"

        },
        {
            id: 3,
            icon: "assets/mobile.png",
            title: "React CRUD App",
            desc: "This app was built using reactjs and context API",
            img: "assets/react-crud-app.png",
            link: "https://mavic01.github.io/cv/"

        },
        {
            id: 5,
            icon: "assets/mobile.png",
            title: "React CRUD App",
            desc: "This app was built using reactjs and context API",
            img: "assets/react-crud-app.png",
            link: "https://mavic01.github.io/cv/"

        },
    
        {
            id: 4,
            icon: "assets/writing.png",
            title: "Booklist Web App",
            desc: "This app was created using HTML, bootstrap and OOP in Javascript. Data here is stored using the browser's local storage.",
            img: "assets/booklist.png",
            link: "https://mavic01.github.io/cv/"

        }
    ]
    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 );
    }

    return (
        <div className="work" id="work">
           <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}} >
               {data.map(d=> (
                   <div className="container">
                   <div className="item">
                       <div className="left">
                           <div className="leftContainer">
                               <div className="imgContainer">
                                   <img src={d.icon} alt=""/>
                               </div>
                               <h2>{d.title}</h2>
                               <p>{d.desc}</p>
                               <span><a href={d.link} target="_blank" rel="noreferrer">Projects</a></span>
                           </div>
                       </div>
                       <div className="right">
                           <img src={d.img} alt="" />
                       </div>
                   </div>
              </div>
               ))
               }
           </div>
           <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")} />
           <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=> handleClick()}/>
        </div>
    )
}

export default Work
