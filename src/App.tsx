import { FC } from 'react';
import './App.css';
import { Footer, Header, Main } from './components';

export const App: FC = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
