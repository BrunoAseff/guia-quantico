import "./login.css";

export default function Login() {
  return (
    <div className="Container">
      <div className="Card">
        <p className="text">Nome</p>

        <input placeholder="Insira o seu nome" type="email" />
        <p className="text">Email</p>

        <input placeholder="Insira o seu email" type="text" />

        <p className="text">Senha</p>

        <input placeholder="Insira a sua senha" type="password" />

        <p className="text">Confirmar Senha</p>

        <input placeholder="Confirme sua senha" type="password" />
        <button className="button">Entrar</button>
      </div>
    </div>
  );
}
