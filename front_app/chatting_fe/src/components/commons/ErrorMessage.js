import fontSizes from "../../styles/fontSizes";
import styled from 'styled-components';

const Box = styled.div`
    box-shadow: 2px 2px 5px #212121;
    color: #000;
    font-weight: bold;
    font-size: ${fontSizes.small}
    padding: 3px 5px;
    text-align: center;
`;

const ErrorMessage = ({children}) => {
    return <Box>{children}</Box>
}

export default ErrorMessage;