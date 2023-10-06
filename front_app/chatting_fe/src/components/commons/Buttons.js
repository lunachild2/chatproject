import styled, {css} from 'styled-components';

export const StyledButton = styled.button`
  width: ${props => props.width || '300px'};
  height: 50px;
  background: ${props => props.bg || 'black'};
  border: 0;
  color: #fff;
  margin: 10px;
  border-radius: 15px;

  ${props => props.border && css`
    border: 2px solid blue;
  `}

  &:hover {
    background: gray;
  }

  i {
    font-size: 2rem;
    color: orange;
  }
`;