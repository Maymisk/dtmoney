import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransaction } from '../../hooks/useTransaction';

export function Summary() {
    const { transactions } = useTransaction();

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'deposit') {
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;

                return acc;
            } else {
                acc.withdrawals += transaction.amount;
                acc.total -= transaction.amount;

                return acc;
            }
        },
        {
            deposits: 0,
            withdrawals: 0,
            total: 0
        }
    );

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>{formatter.format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Income" />
                </header>
                <strong>-{formatter.format(summary.withdrawals)}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{formatter.format(summary.total)}</strong>
            </div>
        </Container>
    );
}
