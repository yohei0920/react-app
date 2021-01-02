import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { LANGAGES } from './const/langages'

function App() {
  const [tab, setTab] = useState('list')
  const [langs, setLangs] = useState(LANGAGES)

  const addLang = (lang) => {
    setLangs([...langs, lang])
    setTab('list')
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={ () => setTab('list') }>リスト</li>
          <li onClick={ () => setTab('form') }>フォーム</li>
        </ul>
      </header>
      <hr/>
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;