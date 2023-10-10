import ErrorMessage from "../commons/ErrorMessage";
import { useCallback, useState } from "react";
import { TextBox } from "../commons/InputStyle";
import { StyledButton } from "../commons/Buttons";

const NickNmForm = ({ roomInfo, setRoomInfo }) => {
    const [message, setMessage] = useState('');
    const [nickNm, setNickNm] = useState('');

    const handleChange = useCallback((e) => {
        setNickNm(e.target.value);
    }, [])

    const handleClick = useCallback(() => {
        if(!nickNm || !nickNm.trim()) {
            setMessage("닉네임을 입력하세요.")
        }

        setRoomInfo({...roomInfo, nickNm})
    }, [nickNm]);
    return (
        <>
            <TextBox type="text" align='center' placeholder="닉네임 입력" value={nickNm} onChange={handleChange} />
            <StyledButton type="button" onClick={handleClick} width='100%' margin='10px 0px'>방 입장하기</StyledButton>
            {message && <ErrorMessage>{message}</ErrorMessage>}
        </>
    )
};

export default NickNmForm;