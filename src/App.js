import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthWrapper } from './AuthWrapper';
import "@fontsource/exo-2"; // Defaults to weight 400
import "@fontsource/exo-2/400.css"; // Specify weight
import "@fontsource/exo-2/400-italic.css"; // Specify weight and style
import "@fontsource/alegreya-sans"; // Defaults to weight 400
import "@fontsource/alegreya-sans/400.css"; // Specify weight
import "@fontsource/alegreya-sans/400-italic.css"; // Specify weight and style


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>      
    </div>
  );
}

export default App;
