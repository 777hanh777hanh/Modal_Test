import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
    const [isShow, setIsShow] = useState(false);
    const navigate = useNavigate();

    const handler = () => {
        history.pushState(null, null, '/browse/m/abc');
        setIsShow(!isShow);
        navigate('/browse/m/abc', { replace: true });
        return;
    };

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__row">
                    <h2>HomePage</h2>
                </div>
                <div className="home__row">
                    <Link to="my-list">My List</Link>
                </div>
                <div className="home__row">
                    <button onClick={handler}>Open Modal</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
