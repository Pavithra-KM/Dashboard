import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChevronCircleRight, faConciergeBell, faLocation } from '@fortawesome/free-solid-svg-icons';

function DetailsCard() {
    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center my-3">
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon className="goalsIcon fs-3" icon={faLocation}></FontAwesomeIcon>
                                <h4 className="ms-3">Goals</h4>
                            </div>
                            <FontAwesomeIcon className="fs-3" icon={faChevronCircleRight}></FontAwesomeIcon>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-3">
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon className="popularDishesIcon fs-3" icon={faCar}></FontAwesomeIcon>
                                <h4 className="ms-3">Popular Dishes</h4>
                            </div>
                            <FontAwesomeIcon className="fs-3" icon={faChevronCircleRight}></FontAwesomeIcon>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-3">
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon className="menusIcon fs-3" icon={faConciergeBell}></FontAwesomeIcon>
                                <h4 className="ms-3">Menus</h4>
                            </div>
                            <FontAwesomeIcon className="fs-3" icon={faChevronCircleRight}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsCard;