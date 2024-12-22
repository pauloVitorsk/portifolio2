import './Body.css';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect, React, useState, useRef } from 'react';
import fotoPaulo from '../../assets/fotoPaulo.png';
import { IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Body = () => {
    const [modalContato, setModalContato] = useState(false);
    const photoRef = useRef(null);
    const modalRef = useRef(null);
    useEffect(() => {
        Aos.init();
    })


    useEffect(() => {
        const photoElement = photoRef.current;

        if (photoElement) {
            const HandleMouseEvent = (e) => {
                const rect = photoElement.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Percentuais do movimento do mouse em relação ao tamanho da imagem
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                // Movimentando o background tanto horizontalmente quanto verticalmente
                photoElement.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
            };

            photoElement.addEventListener('mousemove', HandleMouseEvent);

            return () => {
                photoElement.removeEventListener('mousemove', HandleMouseEvent);
            };
        }
    }, []);

    useEffect(() => {
        const HandleClickOutSide = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalContato(!modalContato)
            }
        };
        document.addEventListener('mousedown', HandleClickOutSide)
        return () => {
            document.removeEventListener('mousedown', HandleClickOutSide)
        }
    }, [modalContato])

    return (
        <div className='body-conteiner'>
            <div className="text-home">
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1700">
                    <label
                        className="text-name"
                    >Olá, eu sou </label><br />
                    <label className="text-name">Paulo Vitor!</label>
                </div>
                <h1 className="text-function"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >Desenvolvedor Web</h1>
                {/* <p className="text-bigger">
                    Sou um desenvolvedor-web apaixonado por criar interfaces dinâmicas e responsivas usando React.js, JavaScript e CSS/Sass. Minha missão é otimizar aplicações web e solucionar problemas de forma eficiente, sempre mantendo o usuário no centro de tudo o que faço.
                    Estou sempre buscando entregar soluções de alta qualidade e estou em constante aprendizado. Tenho familiaridade com C#, .NET e SQL, e estou expandindo meus conhecimentos nessas tecnologias para colaborar de forma ainda mais eficaz com equipes de back-end.
                    Vamos juntos construir algo incrível!
                </p> */}
                <div
                    className="text-button"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <button className='botao' onClick={() => { setModalContato(!modalContato); }}>
                        Contato
                    </button>
                    <a href="https://drive.google.com/file/d/10aiD6GDMusXLc6ix4mEAapgJ0Dm-2cLo/view?usp=sharing" target='_blank' download={true}>
                        <button className='botao'>Baixar CV</button>
                    </a>
                </div>
            </div>
            <div className="photo-conteiner">
                <div >
                    <img
                        ref={photoRef}
                        src={fotoPaulo}
                        alt="Foto Paulo"
                        className="photo"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1200"
                    />
                </div>
            </div>
            {modalContato ? (
                <div ref={modalRef}
                    className="modal-contato"
                    data-aos="fade-zoo"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className="header-contato">
                        <h3>Contatos</h3>
                        <button className="fechar-contato" onClick={() => { setModalContato(!modalContato); }}>X</button>
                    </div>
                    <div className="modal-texto">
                        Fique à vontade para entrar em contato! Estou sempre em busca de novas oportunidades e desafios. Seja para discutir projetos,
                        colaborar em ideias ou simplesmente conversar sobre tecnologia e desenvolvimento web, estou à disposição.
                        Vamos construir algo incrível juntos!
                    </div>
                    <div className="botoes-contato">
                        <a href="https://wa.me/85994275505" target="_blank" rel="noopener noreferrer"><button className='botao-contato'>WhatsApp <IoLogoWhatsapp fontSize={30} /></button></a>
                        <a href="https://www.linkedin.com/in/paulo-vitor-398825227/" target="_blank" rel="noopener noreferrer"><button className='botao-contato'>LinkedIn <IoLogoLinkedin fontSize={30} /></button></a>
                        <a href="mailto:seuemail@exemplo.com" target="_blank"><button className='botao-contato'>Email <MdEmail fontSize={30} /></button></a>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Body;
