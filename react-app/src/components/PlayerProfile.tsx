
interface Props {
    id: number;
    player: {
        name: string
        goals: number
    }

}

function PlayerProfile({ id, player }: Props) {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Name: {player.name}</li>
                <li className="list-group-item">Nummer: {player.goals}</li>
            </ul>
        </>
    )

}

export default PlayerProfile;