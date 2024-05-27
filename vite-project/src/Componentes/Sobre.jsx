import styles from './Sobre.module.css'

export function Sobre(props) {
  return (
    <div className={styles.sobre_container}>
      <div className={styles.sobre_background}>
        <div className={styles.sobre_content}>
          <img src='https://media.istockphoto.com/id/639112364/pt/foto/fun-at-disco.webp?b=1&s=170667a&w=0&k=20&c=a_XS5AG0n5LxGaoexTDY2m5yOLG030ueA-aS7W_1aHs='/>
          <div className={styles.sobre_texto}>
            <h1>{props.nomePagina}</h1>
            <span>Loja no ramo musical de Minas Gerais,
            fundada em 2024, com mais de 50 empresas associadas.</span>
            <span> A T&V Music Shop apoia o desenvolvimento dos empreendedores e músicos em geral,
            com produtos e serviços que auxiliam as atividades do dia a dia 
            de empresas, músicos e usuários.</span>
        </div>
      </div>
      </div>
      <div className={styles.boxes_container}>
        <div className={styles.box_01}>
          <h2>Quem somos?</h2>
          <p>Somos uma loja online e física com uma das maiores 
            representatividades do interior de Minas Gerais.
            Visamos qualidade e satisfação dos produtos e serviços prestados às
            empresas, músicos e usuários de Minas Gerais e de todo o mundo.</p>
        </div>
        <div className={styles.box_02}>
          <h2>O que fazemos?</h2>
          <p>Nós, da T&V Music Shop, apoiamos o desenvolvimento das empresas associadas
            com três pilares de soluções: Gerenciamento, Organização,  
            e Prestação de Serviços em Aluguéis de Equipamentos para Eventos. Além disso, vendemos instrumentos musicais e acessórios.</p>
        </div>
        <div className={styles.box_03}>
          <h2>Como se associar</h2>
          <p>Fale com um de nossos consultores:
            tv_musicshop@gmail.com | (32) 4004-4004 / (32) 9 4004-4004, ou
            venha nos fazer uma visita:
            Rua das Américas, 22, Centro - Cataguases - MG / 36774-000</p>
        </div>
      </div>
      <div className={styles.historia_background}>
        <div className={styles.historia_container}>
          <h2>Nossa História</h2>
          <span>
          Tudo começou com a paixão pela música.
          Tarsila Barros e Viviane Santos, mulheres apaixonadas 
          por música, resolveram que 
          estava na hora de compartilhar com o mundo seus sonhos e toda essa 
          conexão que a música traz entre as pessoas. 
          Pois a música é, sem sombra de dúvidas, o maior 
          meio de comunicação mundial, rompendo todas as 
          fronteiras e barreiras das linguagens, culturas e etnias.
          <br/>
          <b>Com a música, falamos a mesma língua! </b>
          E desde então, deu-se início à T&V Music Shop, 
          onde o mundo não tem limite para o som.
          Estamos no mercado oferecendo os melhores
          produtos e serviços relacionados à música e eventos.
          </span>
        </div>
      </div>
    </div>
  )
}
