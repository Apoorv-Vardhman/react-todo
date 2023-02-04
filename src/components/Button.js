const Button = (props)=>{
    const clicked = (event)=>{
        props.onClick();
    }


    let btnClasses = "rounded font-bold py-2 px-8 ";
    if(props.type ==="primary"){
        btnClasses +="bg-blue-500 hover:bg-blue-700 text-white ";
    }else if(props.type ==="danger"){
        btnClasses +="bg-red-500 hover:bg-red-700 text-white ";
    }


    return (
        <div>
            <button type={props.buttonType} className={btnClasses} onClick={clicked}>{props.text}</button>
        </div>
    );
}

export default Button;