import "./Card.css"
const Cards = ({ aos, aos_offset, imagem, Titulo ,Descrição}) => {
    return (
        <div className="card" data-aos={aos} data-aos-delay={aos_offset} data-aos-duration="1400" data-aos-easing="ease-in-sine" data-aos-offset="100" >
            <img src={imagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{Titulo}</h6>
                <p className="card-text">{Descrição}</p>
                {/* <a href="#" className="btn btn-primary">❤️</a> */}
            </div>
        </div>
    );
}

export default Cards;