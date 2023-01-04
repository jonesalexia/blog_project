import styles from './Register.module.css';

import { useState, useEffect } from 'react';

const Register = () => {
  

  return (
    <div className={styles.register}>
        <h2>Cadastre-se para participar da nossa comunidade</h2>
        <p>Crie sua conta para compartilhar a sua jornada na literatura com a gente!</p>

        <form>
          <label>
            <span>Nome:</span>
            <input type="text" name="displayName" required placeholder="Nome do usuário" />
          </label>

          <label>
            <span>E-mail:</span>
            <input type="email" name="email" required placeholder="E-mail do usuário" />
          </label>

          <label>
            <span>Senha:</span>
            <input type="password" name="password" required placeholder="Crie sua senha" />
          </label>

          <label>
            <span>Confirmação de senha:</span>
            <input type="password" name="confirmPassword" required placeholder="Confirme a senha criada" />
          </label>

          <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register