import styles from './Footer.module.css';
import github from '../../assets/imgs/github.png';
import linkedin from '../../assets/imgs/linkedin.png';

export function Footer(props) {
  return(
    <div className={styles.footer_container}>   
      <footer className={styles.footer_content}>
        <div className={styles.footer_infos}>
          <div className={styles.infos_container}>
            <p>Informações de contato:</p>
            <div className={styles.infos_content}>
              <span>
                Telefone:
                <a href='(32)4004-4004'> (32) 4004-4004 |</a>
                <a href='(32)94004-4004'> (32) 9 4004-4004 </a>
                <br/>
                Endereço:
                Rua das Américas, 22, Centro - 
                <br/>
                Cataguases | Mg - 36774-000
              </span> 
              <br/>
              <span>
                Instagram: 
                <a href=''> @t&v_musicshop</a>
                <br/>
                Facebook: 
                <a href=''> T&V Music Shop</a>
                <br/>
                Email: 
                <a href=''> tv_musicshop@gmail.com</a>
              </span>
            </div>
          </div>
          <hr/>
          <p className={styles.footer_developers}>{props.nomeFooter}</p>
          <div className={styles.devs_contact}>
            <a href='https://github.com/tarsibfritz' target='_blank'>
              <img src={github} alt='Github Tarsila Fritz'/> 
            </a>
            <a href='https://github.com/jsvivis' target='_blank'>
              <img src={github} alt='Github Viviane Santos'/> 
            </a>
            <a href='https://www.linkedin.com/in/tarsilafritz/' target='_blank'>
              <img src={linkedin} alt='Linkedin Tarsila Fritz'/> 
            </a>  
            <a href='https://www.linkedin.com/in/viviane-santos-a6a69127b/' target='_blank'>
              <img src={linkedin} alt='Linkedin Viviane Santos'/> 
            </a>  
          </div>
        </div>
      </footer>
    </div>
  )
}


