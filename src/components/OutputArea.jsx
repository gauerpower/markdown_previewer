function OutputArea(props){
return (<div className="output-area">
<h2 className="output-heading">Output:</h2>
<div className="output-text" dangerouslySetInnerHTML={{ __html: props.outputText }}></div>
</div>)
}

export default OutputArea;