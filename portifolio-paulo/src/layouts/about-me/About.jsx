import React, { useEffect } from 'react';
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Cards from '../../componentes/Card/Card';
import iconJavaScript from "../../assets/icon-javaScript.png"
import iconReact from "../../assets/icon-reactJs.png"
import iconHtml from "../../assets/icon-html.png"
import iconCss from "../../assets/icon-css.png"
import iconFigma from "../../assets/icon-figma.png"
import iconTypeScrit from "../../assets/icon-typeScript.png"
import iconComunicacao from "../../assets/icon-comunicacao.png"
import iconAtencao from "../../assets/icon-atencao.png"
import iconTrabalhoEquipe from "../../assets/icon-trabalhoEquipe.png"
import iconGestaoTempo from "../../assets/icon-gestaoTempo.png"
import iconDesenho from "../../assets/icon-desenhar.png"
import iconPedalar from "../../assets/icon-pedalar.png"
import iconJardinagem from "../../assets/icon-plantar.png"
import iconMarcenaria from "../../assets/icon-marcenaria2.png"
import iconSkate from "../../assets/icon-skate.png"
import iconKarate from "../../assets/icon-karate.png"
const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='About-container'>
            <div className="conteiner-About">
                <div className="text-About">
                    <h1 className="title"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1500"
                    >Sobre mim</h1>
                    <div>
                        <p className="text-bigger "
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-anchor-placement="top-center">
                            Sou um desenvolvedor com alma de artista e uma paixão constante por criar, aprender e encontrar soluções inovadoras para os
                            desafios do dia a dia. Além de minha experiência em desenvolvimento, também sou desenhista, tatuador, marceneiro e jardineiro. Cada uma
                            dessas habilidades reflete meu desejo de transformar ideias em realidade, seja por meio de linhas de código ou pelas formas e cores do
                            mundo ao meu redor. Minha criatividade e sede de conhecimento me impulsionam a buscar excelência, combinando técnica e sensibilidade para
                            oferecer soluções únicas e impactantes em cada projeto que abraço.</p>
                        <p className="text-bigger "
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-anchor-placement="top-center">
                            Iniciei minha carreira com um projeto na qual uma empresa tinha como objetivo criar programadores do zero, avancei nos processos de seleção,
                            dei início a graduação e conseguir ingressar como desenvolvedor I, onde construir uma sólida experiência em React.js, Javascript, CSS/Sass e
                            versionamento em Git. Desenvolvi soluções no setor de varejo, com foco na melhoria de aplicações web internas e criação de interfaces
                            dinâmicas e responsivas.
                        </p>
                    </div>
                </div>

                <div className='cards-conteiner'
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1400">
                    <h2 className="title">Tecnologias</h2>
                    <div className='itens-cards'
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1400">
                        <Cards Titulo={"JavaScript"}
                            imagem={iconJavaScript}
                            aos="fade-left" aos_offset="1500" />
                        <Cards
                            Titulo={"HTML"}
                            imagem={iconHtml}
                            aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards
                            Titulo={"CSS"}
                            imagem={iconCss}
                            aos="fade-left" aos_offset="1500" desc="desc" />
                        <Cards
                            Titulo={"React.Js"}
                            imagem={iconReact}
                            aos="fade-down" aos_offset="1500" desc="desc" />
                        <Cards
                            Titulo={"TypeScrit"}
                            imagem={iconTypeScrit}
                            aos="fade-up" aos_offset="1500" />
                        <Cards
                            Titulo={"Figma"}
                            imagem={iconFigma}
                            aos="fade-left" aos_offset="1500" />
                    </div>

                </div>
                <div className='cards-conteiner'>
                    <h2 className="title"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1500"
                    >Habilidades</h2>
                    <div className='itens-cards'>

                        <Cards
                            Titulo={"Comunicação"}
                            imagem={iconComunicacao}
                            aos="fade-down" aos_offset="2100" desc="desc" />
                        <Cards
                            Titulo={"Trabalho em Equipe"}
                            imagem={iconTrabalhoEquipe}
                            aos="fade-down" aos_offset="1900" desc="desc" />
                        <Cards
                            Titulo={"Atenção aos Detalhes"}
                            imagem={iconAtencao}
                            aos="fade-down" aos_offset="1700" desc="desc" />
                        <Cards
                            Titulo={"Gestão de tempo"}
                            imagem={iconGestaoTempo}
                            aos="fade-down" aos_offset="1500" desc="desc" />
                    </div>

                </div>

                <div className='cards-conteiner'>
                    <h2 className="title"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1400"
                    >Hobbies</h2>
                    <div className='itens-cards'>
                        <Cards
                            Titulo={"Desenhar"}
                            imagem={iconDesenho}
                            aos="fade-up" aos_offset="1500" desc="desc" />
                        <Cards
                            Titulo={"Pedalar"}
                            imagem={iconPedalar}
                            aos="fade-up" aos_offset="1700" desc="desc" />
                        <Cards
                            Titulo={"Jardinagem"}
                            imagem={iconJardinagem}
                            aos="fade-up" aos_offset="1900" desc="desc" />
                        <Cards
                            imagem={iconMarcenaria}
                            Titulo={"Marcenaria"}
                            aos="fade-up" aos_offset="2100" desc="desc" />
                        <Cards
                            imagem={iconKarate}
                            Titulo={"Luta"}
                            aos="fade-up" aos_offset="2100" desc="desc" />
                        <Cards
                            imagem={iconSkate}
                            Titulo={"Skate"}
                            aos="fade-up" aos_offset="2100" desc="desc" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
