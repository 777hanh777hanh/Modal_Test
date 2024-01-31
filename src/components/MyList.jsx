/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const MyList = ({ onOpenModal }) => {
    const showModal = () => {
        history.pushState(null, null, '/browse/m/abc');
        onOpenModal();
    };

    return (
        <div className="my-list">
            <div className="my-list__container">
                <div className="my-list__row">
                    <h2>My List Page</h2>
                </div>
                <div className="my-list__row">
                    <Link to="/browse">Home Page</Link>
                </div>
                <div className="my-list__row">
                    <button onClick={showModal}>Open Modal</button>
                </div>
            </div>
        </div>
    );
};

export default MyList;
