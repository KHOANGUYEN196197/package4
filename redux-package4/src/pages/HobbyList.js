import './style.css'
HobbyList.defaultProps = {
    hobbyList: [],
    hobbyId: null
}


function HobbyList(props) {
    const { hobbyList, hobbyId, activeIdHobby } = props
    return (
        <ul>
            {hobbyList && hobbyList.map((hobby) => {
                return (
                    <li className={hobby.hobbyId === hobbyId ? 'active' : ''} onClick={() => { activeIdHobby(hobby.hobbyId) }} key={hobby.hobbyId}>{hobby.hobbyName}</li>
                )
            })}
        </ul>
    )
}
export default HobbyList;