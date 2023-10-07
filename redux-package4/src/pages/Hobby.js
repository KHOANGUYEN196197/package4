import { useDispatch, useSelector } from "react-redux";
import { activeHobby, addNewHobby } from "../actions/hobbyAction";
import HobbyList from "./HobbyList";

function Hobby() {

    const hobbyList = useSelector((state) => state.hobby.list);
    console.log(hobbyList);
    const hobbyId = useSelector((state) => state.hobby.activeId);
    const dispatch = useDispatch();

    const ramdomNumber = () => {
        return 1000 + Math.trunc(Math.random() * 9000)
    }
    const addHobby = () => {
        const newHobby = {
            hobbyId: ramdomNumber(),
            hobbyName: `hobby ${ramdomNumber()}`
        }
        dispatch(addNewHobby(newHobby))
    }
    const activeIdHobby = (id) => {
        dispatch(activeHobby(id))
    }
    return (
        <div>
            <button onClick={addHobby}>Random Hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                hobbyId={hobbyId}
                activeIdHobby={activeIdHobby}
            />

        </div>
    )
}
export default Hobby;