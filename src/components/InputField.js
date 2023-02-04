import { useState,useEffect } from "react";

const InputField = (props)=>{
    let [input,setInput]  = useState(props.value);

    useEffect(() => { setInput(input) }, [input]);

    const hangleChange = (event)=>{
        setInput(event.target.value);
        props.onChange(event.target.value);
    }

    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">{props.label}</label>
            <input type={props.type} value={input} required={props.required??"reuqired"} placeholder={props.placeholder} className="border appearance-none shadow w-full px-3 py-2 text-gray-700 focus:outline-none leading-light focus:shadow-outline" onChange={hangleChange} />
        </div>
    );
}

export default InputField;