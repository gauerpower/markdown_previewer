// Progress: Functionality is all pretty much there with the NPM marked.js package.
// Need to style and break into components.
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
      {/* <div className="output-area">
        <h2 className="output-heading">Output:</h2>
        <div className="output-text" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
      </div> */}
    </div>
  );
}

export default App;
