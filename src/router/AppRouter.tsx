import { Home, NotFound } from '@root/pages/';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
    );
};
