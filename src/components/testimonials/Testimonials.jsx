import "./testimonials.scss"

const Testimonials = () => {
    const data = [
        {
            id: 1,
            name: 'Passy',
            title: 'Customer Operations Analyst',
            img: 'assets/pascal-img.jpg',
            icon: 'assets/twitter.png',
            desc: "Thanks a lot mavic for creating an amazing music application for me. Now I can listen to my favorite music on the go"
        },
        {
            id: 2,
            name: 'Nora',
            title: 'Model and Dancer',
            img: 'assets/nora-image.jpg',
            icon: 'assets/nora-icon.jpg',
            desc: "Thank You for this expressive piece of art",
            featured: true
        },
        {
            id: 3,
            name: 'Aima',
            title: 'Software Developer',
            img: 'assets/aima-image.jpg',
            icon: 'assets/aima-icon.jpg',
            desc: "It's so beautiful, I love it so much. You're the best😗 "
        }
        
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default Testimonials
