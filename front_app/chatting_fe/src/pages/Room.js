import { useEffect, useCallback, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Title from "../components/commons/Title";
import { getRoom } from "../api/chatting";
import NickNmForm from "../components/chatting/NickNmForm";
import { registerMessage } from "../api/chatting";
import { TextBox } from "../components/commons/InputStyle";
import { FiSend } from 'react-icons/fi'

const ChatBox = styled.ul`
    position: fixed;
    top: 110px;
    left: 15px;
    width: calc(100% - 30px);
    height: calc(100% - 225px);
    background: #ccc;
    padding: 10px;
`;

const InputGrp = styled.div`
    display: flex;
    position: fixed;
    bottom: 55px;
    left: 15px;
    width: calc(100% - 30px);
    
    button {
        height: 45px;
        width: 45px;
        text-align: center;
        margin-left: 5px;
        border-color: #000;
        cursor: pointer;
        border-radius: 3px;
        svg {
            font-size: 1.5rem;
            color: #fff;
        }
    }
    input {
        flex-grow: 1;
    }
`;

let webSocket;

const Room = () => {
    const inputEl = useRef();
    const buttonEl = useRef();
    const initialInfo = {
        roomNo : '',
        roomNm : '',
        max : ''
    }

    const initialChatData = {
        nickNm : '',
        roomNo : '',
        message : ''
    }

    const { roomNo } = useParams();
    const [ roomInfo, setRoomInfo ] = useState(initialInfo);
    const [ chatData, setChatData ] = useState(initialChatData);
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        // 웹 소켓 연결
        webSocket = new WebSocket(process.env.REACT_APP_WS_URL);
        webSocket.onopen = (e) => {
            console.log("연결 성공");
        };

        webSocket.onclose = (e) => {
            console.log("연결 종료");
        }

        getRoom(roomNo)
            .then((res) => setRoomInfo(res.data))
            .catch((err) => console.error(err));
    }, [])

    const handleChange = useCallback((e) => {
        const params = {roomNo, nickNm : roomInfo.nickNm, message : e.target.value};
        setChatData(params);
        if(e.keyCode === 13) { // 엔터키 클릭시
            buttonEl.current.click();
        }
    }, [roomInfo]);

    useEffect(() => {
        if(webSocket) {
            webSocket.onmessage = (message) => { // 데이터 수신
                const data = JSON.parse(message.data);
                if(data.roomNo === roomNo) {
                    setMessages(messages.concat(data));
                }
            }
        }
    }, [webSocket, messages])
    

    const handleClick = useCallback(() => {
        if (!webSocket) return;
        webSocket.send(JSON.stringify(chatData));
        inputEl.current.value = "";
        inputEl.current.focus();
        registerMessage(chatData);
    }, [chatData]);

    if(roomInfo && !roomInfo.nickNm) {
        return <NickNmForm roomInfo={roomInfo} setRoomInfo={setRoomInfo} />
    }

    const lis = messages.map((m, index ) => (<li key={index}>[{m.nickNm}]{m.message}</li>));

    return (
        <>
            {roomInfo && <Title>{roomInfo.roomNm}({roomInfo.max ? `최대${roomInfo.max}명` : '무제한'})</Title>}
            <ChatBox>{lis}</ChatBox>
            <InputGrp>
                <TextBox type="text" onKeyUp={handleChange} ref={inputEl} placeholder='메세지 입력...' />
                <button type="button" onClick={handleClick} ref={buttonEl}>
                    <FiSend />
                </button>
            </InputGrp>
        </>
    );
};

export default Room;