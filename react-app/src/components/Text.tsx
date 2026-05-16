import React, { ReactNode, useState } from "react";

interface Props {
    children: string
    maxChars?: number
}



function ExpandableText({ children, maxChars = 100 }: Props) {
    const [expanded, setExpand] = useState(false)
    let lable = expanded ? "read less" : "read more";


    if (children.length <= maxChars) return <p>{children} </p>

    const text = expanded ? children : children.substring(0, maxChars)
    return (<div>{text}... <button onClick={() => setExpand(!expanded)}> {lable}</button></div>)
}

export default ExpandableText