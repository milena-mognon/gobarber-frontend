import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Logo GoBarber" />
      <form>
        <h1>Faça seu Login</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="create">
        <FiLogIn size={16} />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
