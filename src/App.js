import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

//Style
import GlobalStyle from './styles/GlobalStyle';
import { dark, light } from './styles/Theme';

//Components
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Vision from './components/Vision/Vision';
import Faq from './components/Faq/Faq';

function App() {
  const [theme, setTheme] = useState('dark');

  const ChangeTheme = () => {
    setTheme(theme === 'dark' ? 'white' : 'dark');
  };
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Menu theme={theme} click={ChangeTheme} />
      <Header />
      <Vision />
      <Faq />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
