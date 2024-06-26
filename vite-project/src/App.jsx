/* Importação dos componentes 'Routes' e 'Route' da biblioteca 'react-router-dom', que são usados para definir as rotas da aplicação */
import { Routes, Route } from 'react-router-dom';

/* Importação dos componentes do projeto */
import { Home } from './Componentes/Home';
import { Footer } from './Componentes/Footer/Footer';
import { Header } from './Componentes/Header/Header';
import { Sobre } from './Componentes/Sobre';
import { Produto } from './Componentes/Produto';
import { Associados } from './Componentes/Associados'
import './Styles.global.css';

/* Definição do componente funcional 'App' ("pai")*/
function App() {
  return (
    /* Define um contêiner para os componentes da aplicação */
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home nomePagina='' />} />
        <Route path='/produto' element={<Produto nomePagina='Produtos' />} />
        <Route path='/associados' element={<Associados nomePagina='Associados' />} />
        <Route path='/sobre' element={<Sobre nomePagina='Sobre' />} />
      </Routes>
      <Footer nomeFooter='Desenvolvido por: Tarsila Fritz e Viviane Santos' />
    </div>
  );
}

/* Exportação do componente App (como padrão - default) */
export default App;