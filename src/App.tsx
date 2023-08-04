import Button from './components/Buttons'
import Header from './components/Header'
import Main from './components/Main'
import NameSection from './components/NameSection'
import GlobalStyle, { SectionButtons } from './styles'

function App() {

  return (
    <>
      <GlobalStyle />
        <Main>
          <Header />
          <NameSection />
          <SectionButtons>
            <Button color='dark_10' border='none' background_color="brand_color" title='Download CV' />
            <Button color='dark_50' border="light" background_color='transparent' title='Download CV' />
          </SectionButtons>
        </Main>
    </>
  )
}

export default App
