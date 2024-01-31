import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import MyList from './components/MyList';
import Modal from './components/Modal';
import { useCallback, useEffect, useState } from 'react';

function App() {
    const [isShowModal, setIsShowModal] = useState(true);
    const location = useLocation();

    const handleShowModal = useCallback(() => {
        setIsShowModal(!isShowModal);
    }, [isShowModal]);

    useEffect(() => {
        if (location.pathname === '/browse/m/abc') {
            setIsShowModal(true);
        } else {
            setIsShowModal(false);
        }
    }, [location]);

    return (
        <>
            <Routes>
                <Route path="/" element={<GoHomePage />}></Route>
                <Route path="/browse" element={<HomePage />}>
                    <Route path="m/abc" element={<Modal />}></Route>
                </Route>
                <Route element={<MyList onOpenModal={handleShowModal} />} path="/browse/my-list"></Route>
            </Routes>

            {isShowModal && <Modal callback={handleShowModal} />}
        </>
    );
}

function GoHomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/browse');
    }, [navigate]);

    return;
}

export default App;
