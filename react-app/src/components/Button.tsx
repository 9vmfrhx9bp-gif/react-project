
import { ReactNode } from "react";
import { SlCalender } from "react-icons/sl";

interface Props {
    children: ReactNode
    onClick: () => void;
}


function Button({ onClick, children }: Props) {

    return (
        <button type="button" className="btn btn-primary" onClick={onClick}>{children}</button>
    )
}

export default Button