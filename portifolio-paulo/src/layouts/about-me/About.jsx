import React, { useEffect } from 'react';
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Cards from '../../componentes/Card/Card';

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='About-container'>
            <div className="text-About">
                <div>
                    <h1 className="title"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >Sobre mim</h1>
                    <p className="text-bigger"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Sou Paulo Vitor, um desenvolvedor com alma de artista e uma paixão constante por criar, aprender e encontrar soluções inovadoras para os
                        desafios do dia a dia. Além de minha experiência em desenvolvimento, também sou desenhista, tatuador, marceneiro e jardineiro. Cada uma
                        dessas habilidades reflete meu desejo de transformar ideias em realidade, seja por meio de linhas de código ou pelas formas e cores do
                        mundo ao meu redor. Minha criatividade e sede de conhecimento me impulsionam a buscar excelência, combinando técnica e sensibilidade para
                        oferecer soluções únicas e impactantes em cada projeto que abraço.
                        Iniciei minha carreira com um projeto na qual uma empresa tinha como objetivo criar programadores do zero, avancei nos processos de seleção,
                        dei início a graduação e conseguir ingressar como desenvolvedor I, onde construir uma sólida experiência em React.js, Javascript, CSS/Sass e
                        versionamento em Git. Desenvolvi soluções no setor de varejo, com foco na melhoria de aplicações web internas e criação de interfaces
                        dinâmicas e responsivas.
                    </p>
                </div>

                <div className='habilidades'>
                    <h2 className="title"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >Habilidades</h2>
                    <p className="text-bigger"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                    </p>
                    <div className='habilidades-cards'>
                        <Cards Titulo={"JavaScript"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards 
                        Titulo={"React.Js"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards 
                        Titulo={"HTML"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards 
                        Titulo={"CSS"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards 
                        Titulo={"Figma"}
                        aos="fade-up" aos_offset="1500"  />
                        <Cards Titulo={"Comunicação"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards Titulo={"Atenção aos Detalhes"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards Titulo={"Trabalho em Equipe"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards Titulo={"Gestão de tempo"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                    </div>

                </div>

                <div>
                    <h2 className="title"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >Hobbies</h2>
                    <p className="text-bigger"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                    </p>
                    <div className='habilidades-cards'>
                        <Cards Titulo={"Desenhar"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards 
                        Titulo={"Pedalar"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards 
                        Titulo={"Jardinagem"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards 
                        Titulo={"Marcenaria"}
                        aos="fade-up" aos_offset="1500" desc="desc" />
                    </div>
                </div>
            </div>

            <div className="text-button">
                <button>button</button>
                <button>button</button>
            </div>
        </div>
    );
}

export default About;
