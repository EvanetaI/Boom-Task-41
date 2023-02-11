import { useState } from "react"; 

function Document(props) {
    const [btnState, setBtn] = useState(false);

    document.addEventListener("wheel",(e)=>{
        console.log("wheel")
        const bottom = e.target.scrollHeight - e.target.offsetHeight === Math.floor( e.target.scrollTop);
        if (bottom) { 
          setBtn(bottom)
        }
      })

  return (
    <div className="App">
        <h1 className="title">{props.title}</h1>
        <div style={{ overflowY: 'scroll', border:'1px solid red',float: 'left',position:'relative', height: "100px"}} className="content">{props.content}</div>
        <button  disabled = {!btnState}>I Agree</button>
    </div>
  );
}

export default Document;