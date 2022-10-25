function InputArea(props) {
return (<div className="input-area">
  <h2 className="input-heading">Input:</h2>
  <textarea className="input-text" value={props.markdown} onChange={props.changeHandler} rows="20" cols="50"></textarea>
</div>)
}

export default InputArea;