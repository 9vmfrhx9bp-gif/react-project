
import { SlCalender } from "react-icons/sl";

interface Props {
    type: string;
    onClick: () => void;
}
let state: string = "show"

function Button({ type, onClick }: Props) {

    let status: string;
    switch (type) {
        case "primary":
            status = "btn btn-primary"
            break;
        case "secondary":
            status = "btn btn-secondary"
            break;
        case "success":
            status = "btn btn-success"
            break;
        default:
            status = "btn btn-danger"
            type = "danger";

    }
    return (
        <>
            <button type="button" className={status} onClick={onClick}>{type} <SlCalender /></button>

        </>



    )
}

export default Button