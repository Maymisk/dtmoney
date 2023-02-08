import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransaction } from '../../hooks/useTransaction';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface IProps {
	isOpen: boolean;
	closeModal(): void;
}

export function NewTransactionModal({ isOpen, closeModal }: IProps) {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState<'deposit' | 'withdrawal'>('deposit');
	const [category, setCategory] = useState('');

	const { createTransaction } = useTransaction();

	async function handleFormSubmission(event: FormEvent) {
		event.preventDefault();

		await createTransaction({
			title,
			amount,
			type,
			category,
		});

		closeModal();
		setTitle('');
		setAmount(0);
		setType('deposit');
		setCategory('');
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button
				type="button"
				onClick={closeModal}
				className="react-modal-close"
			>
				<img src={closeImg} alt="Fechar modal" />
			</button>

			<Container onSubmit={handleFormSubmission}>
				<h2>Cadastrar transação</h2>

				<input
					type="text"
					placeholder="Título"
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>

				<input
					type="number"
					placeholder="Valor"
					onChange={event => setAmount(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						isActive={type === 'deposit'}
						activeColor="green"
						onClick={() => setType('deposit')}
					>
						<img src={incomeImg} alt="entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						isActive={type === 'withdrawal'}
						activeColor="red"
						onClick={() => setType('withdrawal')}
					>
						<img src={outcomeImg} alt="saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					type="text"
					placeholder="Categoria"
					value={category}
					onChange={event => setCategory(event.target.value)}
				/>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
