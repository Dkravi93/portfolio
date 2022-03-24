
import './App.css';

import Headers from './components/HeadersComponents/Headerscomponents'
import Projects from './components/ProjectsComponents/Projects';
import {Education} from'./components/EducationComponents/Education'
import {Footer} from './components/footercomponents/footer'
function App() {

  return (
       <div className="container">
           <Headers/>
           <Education/>
           <Projects/>
           <Footer/>
         </div>
  );
}

export default App;
