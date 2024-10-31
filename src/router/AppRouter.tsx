import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '../pages/';
import { routes } from './routes';

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
    );
};
