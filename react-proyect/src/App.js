import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';



export default function App() {
  return(
    <div>
        <Navbar />
        <ItemListContainer greeting={"Bienvenido a nuestro sitio!!"} />
        <Footer />
    </div>
  );
  
}

  



// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
