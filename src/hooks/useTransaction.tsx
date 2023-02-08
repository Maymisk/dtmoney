import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    type: 'deposit' | 'withdrawal';
    amount: number;
    category: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction(transactionInput: TransactionInput): Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions').then(response =>
            setTransactions(response.data.transactions)
        );
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date()
        });
        // miragejs doesn't return the createdAt property, so we create it manually 😬

        const { transaction } = response.data;

        setTransactions(prevState => [...prevState, transaction]);
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransaction() {
    return useContext(TransactionsContext);
}
