import styled, { css } from 'styled-components';

/**
 * É necessário criar uma interface porque por padrão a div não possui
 * uma propriedade chamada isFocused, e o eslint informa isso em forma de erro
 * Quando criá-se uma interface e passa esse tipo para a div o typescript
 * entende que aquela div possui a propriedade.
 */
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  /**
    vai ser alterado quando ganhar ou perder foco
   */
  border: 2px solid #232129;
  color: #666360;

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    align-items: center;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
    -webkit-text-fill-color: #f4ede8 !important;
  }

  span {
    font-size: 14px;
  }
`;
