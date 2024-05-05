import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MyComponent from './components/MyComponent'
import TabContent from './components/TabContent.jsx'
import { HOME_DATA } from './data.jsx'

function App() {
  const [article, setArticle] = useState(null);

  const myClickHandler = (type) => {
    // When using setState method it rerenders the component where the state variable (article) exists.
    setArticle(type);
  }
  return (
    <>
      <Header>
        First React Page Header
      </Header>
      <main>
        {
          HOME_DATA.map((data, index) => (
            <MyComponent key={ index } { ...data } />
          ))
        }
        <menu>
          <TabContent myClickEvent={ () => myClickHandler('component') }>Components</TabContent>
          <TabContent myClickEvent={ () => myClickHandler('jsx') }>Jsx</TabContent>
          <TabContent myClickEvent={ () => myClickHandler('props') }>props</TabContent>
          <TabContent myClickEvent={ () => myClickHandler('state') }>state</TabContent>
        </menu>
        <article>
          {/* Conditional content rendering */}
          {
            !article ? (<p>Please select a menu</p>) : { article }
          }
        </article>
      </main>
    </>
  )
}

export default App
