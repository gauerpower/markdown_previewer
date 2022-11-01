
import React, {useState} from 'react';
import { marked } from 'marked';
import "./styles.css";
import startingText from './startingText';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';


function App(){

  const [markdown, setMarkdown] = useState(startingText);
  const outputText = marked(markdown);

  function changeHandler(event) {
    setMarkdown(event.target.value)
  }

    return (
    <div className="App">
      <h1 className="big-heading">Markdown Previewer</h1>
      <InputArea markdown={markdown} changeHandler={changeHandler}/>
      <OutputArea outputText={outputText}/>
    </div>
  );
}

export default App;
