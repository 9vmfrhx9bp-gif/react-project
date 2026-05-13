
interface Props {
    type: string;
}

function Button({ type }: Props) {

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
        <button type="button" className={status}>{type}</button>
    )
}

export default Button