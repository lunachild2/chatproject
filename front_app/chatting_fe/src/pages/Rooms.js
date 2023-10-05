import { getRooms } from "../api/chatting";
import { useEffect, useState } from "react";
import ErrorMessage from "../components/commons/ErrorMessage";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getRooms()
            .then((data) => {
                console.log(data)
                setRooms(data)
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setMessage("방목록 조회 실패...");
                setLoading(false);
            })
    }, []);
    
    const lis = rooms.map(r => (<li key={r.roomNo}>{r.roomNM}</li>))

    return (
        <>
            {message && <ErrorMessage>{message}</ErrorMessage>}
            { loading && rooms.length === 0 && <div>로딩중...</div>}
            <ul>
                {lis}
            </ul>
        </>
    );
};

export default Rooms;