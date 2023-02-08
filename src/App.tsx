import { createServer, Model } from 'miragejs';
import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransaction';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

createServer({
    models: {
        transaction: Model
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        });

        this.post('transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transaction', data);
        });
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'freelas',
                    type: 'deposit',
                    category: 'dev',
                    amount: 6000,
                    createdAt: new Date('2021-02-12')
                },
                {
                    id: 2,
                    title: 'aluguel',
                    type: 'withdrawal',
                    category: 'house',
                    amount: 1100,
                    createdAt: new Date()
                }
            ]
        });
    }
});

function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionProvider>
            <Header openNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                closeModal={handleCloseNewTransactionModal}
            />

            <GlobalStyle />
        </TransactionProvider>
    );
}

export default App;
