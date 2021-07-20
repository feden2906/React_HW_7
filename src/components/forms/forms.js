import {useState} from "react";
import Info from "../info/info";

export default function Forms({users}){
    const [user, setUser] = useState(undefined);

    const userChoose = (e) => {
        const findInfo = users.find(user => user.id === +e.target.value)
        setUser(findInfo);
    }

    return(
        <div>
            <form onSubmit={userChoose}>
                <select onChange={userChoose} value={user}>
                    {
                        users.map(value => <option key={value.id} value={value.id}>{value.name}</option>)
                    }
                </select>
            </form>
            {
                user && <Info userInfo={user} />
            }
        </div>
    )
}