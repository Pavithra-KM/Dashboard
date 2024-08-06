import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCaretDown, faCaretUp, faSortNumericDown } from '@fortawesome/free-solid-svg-icons';

function TotalDetails() {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card ">
                    <div className="card-body h-100">
                        <div className="row">
                            <div className="col-12">
                                <span className="orderedIcon"><FontAwesomeIcon icon={faBagShopping} className="text-primary fs-4" /></span>
                                <h6 className="mt-3">Total Orders</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>75</h3>
                                    <div className="d-flex align-items-baseline text-success">
                                        <span className="me-2"><FontAwesomeIcon icon={faCaretUp} /></span>
                                        <h6>3%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <span className="deliveredIcon"><FontAwesomeIcon icon={faBagShopping} className="text-success fs-4" /></span>
                                <h6 className="mt-3">Total Delivered</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>70</h3>
                                    <div className="d-flex align-items-baseline text-danger">
                                        <span className="me-2"><FontAwesomeIcon icon={faCaretDown} /></span>
                                        <h6>3%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <span className="cancelledIcon"><FontAwesomeIcon icon={faBagShopping} className="text-danger fs-4" /></span>
                                <h6 className="mt-3">Total Cancelled</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>05</h3>
                                    <div className="d-flex align-items-baseline text-success">
                                        <span className="me-2"><FontAwesomeIcon icon={faCaretUp} /></span>
                                        <h6>3%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <span className="revenueIcon"><FontAwesomeIcon icon={faSortNumericDown} className="text-warning fs-4" /></span>
                                <h6 className="mt-3">Total Revenue</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>$12k</h3>
                                    <div className="d-flex align-items-baseline text-danger">
                                        <span className="me-2"><FontAwesomeIcon icon={faCaretDown} /></span>
                                        <h6>3%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalDetails;