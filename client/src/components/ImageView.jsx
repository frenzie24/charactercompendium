import React, { useState } from "react";
import '../App.css'

const ImageView = ({src, caption}) => {
    const [_src, setSrc] = useState(src ? src : './notfound.jpg');
    const [_caption, setCaption] = useState(caption ? caption : "Couldn't find the image we were looking for!")
    return(
        <>
            <figure className="size-64 flex flex-row flex-wrap justify-center">
                <img className="w-fit size-52" src={_src} alt="caption" />
                <figcaption className="text-center text-xs">{_caption}</figcaption>
            </figure>
        </>
    )
}

export default ImageView;