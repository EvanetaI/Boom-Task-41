
function Document(props) {
  return (
    <div className="App">
        <h1 className="title">{props.title}</h1>
        <div style={{ overflowY: 'scroll', border:'1px solid red',float: 'left',position:'relative', height: "100px"}} className="content">{props.content}</div>
    </div>
  );
}

export default Document;