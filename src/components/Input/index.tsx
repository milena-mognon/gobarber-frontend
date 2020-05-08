import React, { InputHTMLAttributes } from 'react';
// propreidades do icone

import { IconBaseProps } from 'react-icons';
import { Container } from './styles';
/**
 * Interface recebe todas as propriedades de um input
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; // sobrescreve para name ser obrigatório
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
