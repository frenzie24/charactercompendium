import React, { useState } from "react";
import '../App.css'

const ImageComponent = ({src, caption}) => {
    const [_src, setSrc] = useState(src ? src : '../assets/notfound.jpg');
    const [_caption, setCaption] = useState(caption ? caption : "Couldn't find the image we were looking for!")
    return(
        <>
            <figure>
                <img src={_src} className="size-72" alt="caption" />
                <figcaption>{_caption}</figcaption>
            </figure>
        </>
    )
}

export default ImageComponent;