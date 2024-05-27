import styles from './Produto.module.css'

export function Produto(props) {
  return (
    <div className={styles.produto_container}>
      <h1>{props.nomePagina}</h1>
      <h2>Instrumentos</h2>
      {/* LINHA 1 - PRODUTOS */}
      <div className={styles.produto_content}>
        {/* TECLADO */}
        <div className={styles.produto_products}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9f4lP8ic33jkTA4zRCZcEqoKBodjCClk3m7HXg-fqag&s'/>
          <h5>Teclado Arranjador 61 Teclas PSR F52 com Fonte Bivolt Yamaha</h5>
          <p>R$ 829,00</p>
          <a href='https://www.amazon.com.br/Teclado-Yamaha-teclas-PSR-F52-Bivolt/dp/B09NW984T7/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=360D80HYHB8QD&dib=eyJ2IjoiMSJ9.0-2J9WbUC0EqLtakb-_n7LE_MBYehAMcCjRZqxaB0n3VU4CpxbBfuIiRXx09HI8IX0TnvwDGETj13UosOTzqwIzzIVLTfsSxlmFur7UvOqCsJPTHzmlIshx9_x7zBSq8eZGWUX9LlV_iv-KvEEZFkU1hqXYFjryFC3NHoXYXa4P77jod40_arSjFArqjykjuJWri7c6vCbIm_AN2LzPZAFVltE3OCyOoZPiUIfI0AkbZjHUVEuWiFa6-waVp0VQKW708MTf3KMm9693DIuZgK9GMKMtqoVdc4OcWrGTLObI.IPdQKvdJ7DM-GUi4y-E3AlnTWj4WyQ3zaFOjlNGWO4w&dib_tag=se&keywords=piano&qid=1716813925&sprefix=teclado%2Caps%2C1493&sr=8-6&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e' target='_blank'><button>Saiba Mais!</button></a>
        </div>
        {/* VIOLÃO */}
        <div className={styles.produto_products}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveE6EG0AXRedtbrkMjDQ3Y7bh5nT2HsgJ07RJ0SnaiQ&s'/>
          <h5>Violão Acústico Clássico Nylon GC-20NT Natural</h5>
          <p>R$ 429,00</p>
          <a href='https://www.amazon.com.br/Acustico-Classico-GC-20NT-Natural-Harmonics/dp/B075XG3QKS/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Z40NLEYNXF5M&dib=eyJ2IjoiMSJ9.mk2HaqaXvC9q8OmafyCMS6N4P_Ih3Y-BmsE64fSjpgT7U2uM1evOMqoqdX9ytL7jmzmlHOfIr7brK16fs8jUZZV9U85WE7pjCF1ZkXuwL7fmHwZ6TY263Y7vWUeRjcMc1BF2JtBiKuG6Uw9XPUCSn92jsgXFw-JN5QTwuE9ujC5N-ltsJZlY1Zr9QSzy5WgxyTx8mBLpe5CNiV3kiezPahd7y8kI5CcqCQFW0PwKRh1tK_J8H2jk65ny28KmLW7yBS-UedTlX_M-5xSncRIIvnN69iYuhvpa_r2zFwu_b_k.ts5pvSHtaQjcZm9LrH_f-FAa6XxrAkSfxPFeII56K5E&dib_tag=se&keywords=viol%C3%A3o&qid=1716816160&sprefix=viol%C3%A3%2Caps%2C276&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1' target='_blank'><button>Saiba Mais!</button></a>
        </div>
        {/* BATERIA */}
        <div className={styles.produto_products}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqx3lWkOAwA_y_UQbgBy3a7OEt77UqbyYavmUoOyYoA&s'/>
          <h5>Bateria 20″ Acústica C.Ibanez Stage 2 Tons Vermelha</h5>
          <p>R$ 3.740,00</p>
          <a href='https://troktokmusical.com.br/produto/bateria-20%E2%80%B3-acustica-c-ibanez-stage-2-tons-vermelha/' target='_blank'><button>Saiba Mais!</button></a>
        </div>
        {/* UKULELE */}
        <div className={styles.produto_products}>
          <img src='data:image/jpeg;base64,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'/>
          <h5>Ukulele Soprano - Série Arco-íris - Branco</h5>
          <p>R$ 310,00</p>
          <a href='https://www.amazon.com.br/Ukulele-Soprano-S%C3%A9rie-Arco-%C3%ADris-Branco/dp/B00O459UJY/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=715PMQKV1DM&dib=eyJ2IjoiMSJ9.bgafI_bLjJgQ-746k0PmnTYvgTLkVcJpnNB46LCvUKUsszS6uh3LXz7-3eJKD3MIVj7BAT6p-CHJ4ogCqxI9Dihsc8HUeZJr89p7wRe2aHHWBz38knItVYKKGSsmMYkH-r1b42w4oIMw1QIGPp2FvK_OVrboK7ZA0eDIS4C-d1OmyQQY9W5BbmQOPV0fIAwGedlb_CUluk3qNWv2AG5wvW5tohv7GMmLPcdIxLaxjvCBlHhoVwETdT3rOsouMHrl-9bQt2zuj9DGQJAF5Ikexqv53fcsI7Q_rhIbZ2TPETI.CLdcPQTiwSy4XRmp2syfntq8IZurAT6jkGvn_rtIy4c&dib_tag=se&keywords=ukulele+BRANCO&qid=1716817419&sprefix=ukulele+branco%2Caps%2C252&sr=8-7&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e'target='_blank'><button>Saiba Mais!</button></a>
        </div>
      </div>
      <h2>Acessórios</h2>
      {/* LINHA 2 - ACESSÓRIOS */}
      <div className={styles.produto_content}>
        {/* PALHETA */}
        <div className={styles.produto_products}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDjY1tKa3QbicmAamhAjauji4l-CH8NuSL-LEc8hivaQ&s'/>
          <h5>Kit Com 10 Palhetas Fender 0,71mm Para Violão E Guitarra</h5>
          <p>R$ 29,26</p>
          <a href='https://www.mercadolivre.com.br/kit-com-10-palhetas-fender-071mm-para-violo-e-guitarra/p/MLB25191505?pdp_filters=category:MLB45712#wid=MLB3476540345&sid=search&searchVariation=MLB25191505&position=5&search_layout=grid&type=product&tracking_id=632c16c4-41d8-4bed-8e64-df76c25d6774' target='_blank'><button>Saiba Mais!</button></a>
        </div>
        {/* AFINADOR ELETRÔNICO */}
        <div className={styles.produto_products}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_WTz5yK2PTQ0KC_9d6ApLlVFdBXboGHszKJ1DGuTBB5jmuUzW_2k_0zig2UbBAeiSDo&usqp=CAU'/>
          <h5>Afinador Boss Tu-02 Clip Para Guitarra Baixo Violão Ukulele</h5>
          <p>R$ 99,00</p>
          <a href='https://www.mercadolivre.com.br/afinador-boss-tu-02-clip-para-guitarra-baixo-violo-ukulele/p/MLB34280783?pdp_filters=category:MLB1182#wid=MLB4514968432&sid=search&searchVariation=MLB34280783&position=4&search_layout=grid&type=product&tracking_id=d9743c3b-d64e-45c6-ab09-c964f2f1bdd8' target='_blank'><button>Saiba Mais!</button></a>
        </div>
        {/* BAQUETA */}
        <div className={styles.produto_products}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7befV3DcC7RXsHrDYMyWW5R4NmBy0a73VrCFDXnnfHQ&s'/>
          <h5>Kit 2 Baquetas 7a De Bateria Liverpool Nirvana Marfim Ni7am</h5>
          <p>R$ 34,90</p>
          <a href='https://produto.mercadolivre.com.br/MLB-3069414003-kit-2-baquetas-7a-de-bateria-liverpool-nirvana-marfim-ni7am-_JM#position=36&search_layout=grid&type=item&tracking_id=31036ff5-8f7e-476c-b1db-a8dccf53caf1' target='_blank'><button>Saiba Mais!</button></a>
        </div>
        {/* AMPLIFICADOR DE SOM */}
        <div className={styles.produto_products}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29cdkrZQoIybSj02TxlWruNUUbqLVWwUVYj3JJ6Ruow&s'/>
          <h5>Cubo Amplificador Meteoro Space Junior 35gs 35w Preto 110V/220V</h5>
          <p>R$ 475,00</p>
          <a href='https://www.mercadolivre.com.br/cubo-amplificador-meteoro-space-junior-35gs-35w-p-guitarra-cor-preto-110v220v/p/MLB19971068#reco_item_pos=0&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=1a447581-c198-46b8-9e8b-896f7e4626bf#trends_tracking_id=db16f797-6c49-4016-ac8f-61b5a951eb56&component_id=BEST_SELLER'target='_blank'><button>Saiba Mais!</button></a>
        </div>
      </div>
      
    </div>
  )
}
