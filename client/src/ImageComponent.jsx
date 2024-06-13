import React, { useState } from "react";
import '../App.css'

const ImageComponent = ({src, caption}) => {
    const [src, setSrc] = useState(src ? src : '');
    return(
        <>
            <figure>
                <img src={src} alt="caption" />
                <figcaption>{caption}</figcaption>
            </figure>
        </>
    )

}

export default ImageComponent;