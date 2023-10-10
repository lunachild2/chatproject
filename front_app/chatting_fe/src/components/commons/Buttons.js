import styled, {css} from 'styled-components';

export const StyledButton = styled.button`
  width: ${props => props.width || '300px'};
  height: 50px;
  background: ${props => props.bg || 'black'};
  border: 0;
  color: #fff;
  margin: 10px;
  border-radius: 3px;

  ${props => props.border && css`
    border: 2px solid blue;
  `}

  ${props => props.margin && css`
    margin: ${props.margin};
  `}

  &:hover {
    background: gray;
  }

  i {
    font-size: 2rem;
    color: orange;
  }
`;