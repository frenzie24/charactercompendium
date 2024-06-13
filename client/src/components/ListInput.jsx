import React from "react";
import '../App.css'
const ListInput = ({ key, placeholder }) => {
    const [key, setKey] = useState(key);

    <>
        <input className="h-10" type="text" placeholder={placeholder} />
    </>
}

export default ListInput;