import TextField from "../TextField";
import "./Form.css";

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Informe os dados abaixo para consultar o histórico de transações</h2>
                <TextField label="Data de Início" placeholder="Digite a data de início"/>
                <TextField label="Data de Fim" placeholder="Digite a data de fim" />
                <TextField label="Nome do Operador Transacionado" placeholder="Digite o nome do operador"/>
            </form>
        </section>
    );
};

export default Form;
