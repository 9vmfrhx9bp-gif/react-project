import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";



const Like = () => {
    const [isClicked, setIsClicked] = useState(false);

    const logClick = () => console.log("clicked")
    const toggle = () => {
        setIsClicked(!isClicked)
        console.log("clicked")
    }


    if (isClicked) return (
        <div onClick={toggle}>
            <AiFillHeart color="#ff6b81" size={20} />
        </div>
    )
    else return (
        <div onClick={toggle}>
            <AiOutlineHeart size={20} />
        </div>
    )
}

export default Like;