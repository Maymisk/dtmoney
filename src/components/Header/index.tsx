import { Container, Content } from './styles';
import logoUrl from '../../assets/logo.svg';

interface IProps {
    openNewTransactionModal(): void;
}

export function Header({ openNewTransactionModal }: IProps) {
    return (
        <Container>
            <Content>
                <img src={logoUrl} alt="dtmoney" />
                <button type="button" onClick={openNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}
