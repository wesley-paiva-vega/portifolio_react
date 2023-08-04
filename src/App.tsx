import Header from './components/Header'
import Main from './components/Main'
import NameSection from './components/NameSection'
import GlobalStyle from './styles'

function App() {

  return (
    <>
      <GlobalStyle />
        <Main>
          <Header />
          <NameSection />
        </Main>
    </>
  )
}

export default App
