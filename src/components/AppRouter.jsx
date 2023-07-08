import React, { useContext } from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import { Routes, Route, Navigate } from "react-router-dom";
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    
    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                ))}
            </Routes>
            :  
            <Routes>
                {publicRoutes.map(route => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}                        
                    />
                ))}
                
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    );
};

export default AppRouter;

{/* <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="/error" element={<Error />} /> */}