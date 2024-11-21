import React, { useEffect } from 'react';
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";

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
                        Iniciei minha carreira com um projeto no qual uma empresa tinha como objetivo criar programadores do zero.
                        Avancei nos processos de seleção e consegui ingressar como desenvolvedor I, onde construí uma sólida experiência em React.js, JavaScript,
                        CSS/Sass e versionamento em Git. Desenvolvi soluções no setor de varejo, com foco na melhoria de aplicações web internas e criação de interfaces dinâmicas e responsivas.
                        Desejo lapidar ainda mais minhas habilidades com as tecnologias que já conheço, além de expandir meus conhecimentos com novas ferramentas.
                        Meu objetivo é me tornar um profissional cada vez mais excepcional, contribuindo significativamente para os projetos em que estou envolvido.
                    </p>
                </div>

                <div>
                    <h2 className="title"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >Habilidades</h2>
                    <p className="text-bigger"
                       data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1500">
                        Iniciei minha carreira com um projeto no qual uma empresa tinha como objetivo criar programadores do zero.
                        Avancei nos processos de seleção, dei início à graduação, e consegui ingressar como desenvolvedor I, onde construí uma sólida experiência em React.js, JavaScript,
                        CSS/Sass e versionamento em Git. Desenvolvi soluções no setor de varejo, com foco na melhoria de aplicações web internas e criação de interfaces dinâmicas e responsivas.
                        Desejo lapidar ainda mais minhas habilidades com as tecnologias que já conheço, além de expandir meus conhecimentos com novas ferramentas.
                        Meu objetivo é me tornar um profissional cada vez mais excepcional, contribuindo significativamente para os projetos em que estou envolvido.
                    </p>
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
                        Iniciei minha carreira com um projeto no qual uma empresa tinha como objetivo criar programadores do zero.
                        Avancei nos processos de seleção e consegui ingressar como desenvolvedor I, onde construí uma sólida experiência em React.js, JavaScript,
                        CSS/Sass e versionamento em Git. Desenvolvi soluções no setor de varejo, com foco na melhoria de aplicações web internas e criação de interfaces dinâmicas e responsivas.
                        Desejo lapidar ainda mais minhas habilidades com as tecnologias que já conheço, além de expandir meus conhecimentos com novas ferramentas.
                        Meu objetivo é me tornar um profissional cada vez mais excepcional, contribuindo significativamente para os projetos em que estou envolvido.
                    </p>
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
