import styles from './Associados.module.css'

export function Associados(props) {
    return (
        <div className={styles.associados_container}>
            <h1>{props.nomePagina}</h1>
            <div className={styles.associados_background}>
                <div className={styles.associados_content}>
                    <div className={styles.associados_disco}>
                        <img src="https://static.wixstatic.com/media/072d95_66cb8a81c37e43eda989c32c677d0621~mv2.png/v1/crop/x_1024,y_414,w_914,h_916/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Prancheta%201_edited.png"/>
                        <div className={styles.associados_texto}>
                            <h2> Silent Disco Brasil</h2>
                            <br/>
                            <p>Apresentamos Silent Disco Brasil: A Revolução dos Eventos Silenciosos. Transforme seus eventos com a Silent Disco Brasil! Imagine uma festa onde cada participante escolhe sua própria trilha sonora, um cinema ao ar livre sem ruídos indesejados ou uma conferência com som claro, independentemente do ambiente.
                            A Silent Disco Brasil, inspirada por eventos inovadores na Inglaterra e Alemanha, traz uma experiência única com fones de ouvido de alta qualidade. Desde 2018, com 1.200 fones disponíveis, encantam públicos em Fortaleza, São Paulo e além.
                            Clientes como Big Brother Brasil, BID, Google Brasil e Bienal de São Paulo destacam a versatilidade do serviço. Torne seu evento inesquecível com a Silent Disco Brasil. Entre em contato para saber mais!
                            </p>
                            <br/>
                            <a href='https://www.silentdiscobrasil.com/' target='_blank'>
                                <button className={styles.associados_button}>Ver mais</button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.associados_spotify}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"/>
                        <div className={styles.associados_texto}>
                            <h2> Spotify </h2>
                            <br/>
                            <p>Apresentamos Spotify: A Revolução da Música em Streaming. Transforme sua experiência musical com o Spotify! Imagine acessar milhões de músicas, playlists personalizadas e podcasts exclusivos a qualquer momento e em qualquer lugar. O Spotify, líder global em streaming de música, oferece uma plataforma intuitiva
                            e rica em recursos. Descubra novos artistas, crie suas próprias playlists e aproveite recomendações personalizadas baseadas em suas preferências. Torne sua experiência musical inesquecível com o Spotify. Baixe o app e comece a explorar o mundo da música hoje mesmo!
                            </p>
                            <br/>
                            <a href='https://open.spotify.com/intl-pt' target='_blank'>
                                <button className={styles.associados_button}>Ver mais</button>
                            </a>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
  }
  