import Table from 'react-bootstrap/Table';
import './Tabble.css'

function Tabble() {
  return (
    <Table className='table'>
      <thead className='thread'>
        <tr>
          <td></td>
          <td>Saldo total: R$ 50,00</td>
          <td></td>
          <td>Saldo no período: R$ 50,00</td>
        </tr>
        <tr>
          <th>Dados</th>
          <th>Valentia</th>
          <th>Tipo</th>
          <th>Nome operador transacionado</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        <tr>
          <td>14/02/2019</td>
          <td>R$ 30895,46</td>
          <td>Depósito</td>
          <td></td>
        </tr>
        <tr>
          <td>12/04/2019</td>
          <td>R$ 12,24</td>
          <td>Transferência Entrada</td>
          <td>Fulano</td>
        </tr>
        <tr>
          <td>11/06/2020</td>
          <td>R$ -500,50</td>
          <td>Transferência Saída</td>
          <td>Cicrano</td>
        </tr>
        <tr>
          <td>11/06/2020</td> 
          <td>R$ -1234,00</td>
          <td>Saque</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        <td>&lt;&lt; &lt; 1 2 3 &gt; &gt;&gt;</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabble;