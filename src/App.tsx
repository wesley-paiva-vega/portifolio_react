import Button from './components/Button'
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
            <Button color="dark_10" borderColor="light" backgroundColor="brand_color" title='Download CV'/>
            <Button backgroundColor="dark_10" borderColor="none" color="dark_10" title='Download CV'/>
          </SectionButtons>
        </Main>
    </>
  )
}

export default App
