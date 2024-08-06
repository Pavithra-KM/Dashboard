import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "rsuite";

function NetProfitCard() {
    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div>
                            <h6>Net Profit</h6>
                            <h1>$6759.25</h1>
                            <div className="d-flex align-items-baseline text-success">
                                <span className="me-2"><FontAwesomeIcon icon={faCaretUp} /></span>
                                <h6>3%</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex flex-column align-items-center">
                            <Progress.Circle
                                className="circleBarWidth"
                                strokeWidth={9}
                                trailWidth={9}
                                percent={70} />
                            <span>The values here has been rounded off</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NetProfitCard;