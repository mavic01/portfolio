import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList.jsx"
import { useState, useEffect } from "react"
import { featuredData, webData, design, art } from '../../data.js'

const Portfolio = () => {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "design",
            title: "Graphic Design"
        },
        {
            id: "art",
            title: "Art"
        },
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredData)
                break;

                case "web":
                setData(webData)
                break;

                case "design":
                setData(design)
                break;

                case "art":
                setData(art)
                break;
        
            default:
                setData(featuredData)
                break;
        }
    }, [selected]) //our dependency is selected cos whenever we change it, its gonna run this useEffect

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d =>(
                    <div className="item">
                    <img
                     src={d.img} alt="" 
                     />
                     <h3>{d.title}</h3>
                </div>
                ))}
                
                
            
                </div></div>
    )
}

export default Portfolio
