import React from "react";

export function CustomButton(props){
    const [count, setCount] = React.useState(props.start);
    let [state, setState] = React.useState(false);
    let text = props.defaultLabel;

    function reactionOnClick(){
        setState(true);
        console.log(count);
        {!props.reverse && setCount(count+1);}
        {props.reverse && setCount(count-1);}
    }



    return <>
        <button onClick={()=>{reactionOnClick()}}>
            {state ? count : text}
        </button>
</>
}