import styled from 'styled-components';

const Button = styled.button`
  transition: .2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 25px;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  color: ${props => props.theme.black};
  padding: .4rem 1.6rem;
  font-size: inherit;
  font-family: HaasRg;
  a {
    margin: auto;
    color: inherit;
    text-decoration: none;
  }
  @media(hover:hover) {
    :hover {
      color: ${props => props.theme.main};
      background: ${props => props.theme.second};
      border: 1px solid ${props => props.theme.main};
    }
  }
`;

export default Button;