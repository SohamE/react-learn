import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MyComponent from './components/MyComponent'
import TabContent from './components/TabContent.jsx'
import { HOME_DATA } from './data.jsx'

function App() {
  /**
   * Any function starting with use is react is hook.
   * useState must be called at top level, cannot be used inside normal function
   * 2 rule of Hooks -
   * 1. Only call hooks inside component functions.
   * 2. Only call hooks at top level, not in condition block or function block.
   */
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
