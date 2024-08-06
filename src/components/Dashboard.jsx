import { faBagShopping, faBarChart, faBars, faBell, faClipboardCheck, faCog, faHome, faMessage, faPowerOff, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Suspense } from "react";
import { Avatar, Input, Nav, Navbar, Sidenav } from "rsuite";
const ActiviyCard = React.lazy(() => import("./ActiviyCard"));
const RecentOrders = React.lazy(() => import('./RecentOrders'));
const FeedbackCard = React.lazy(() => import('./FeedbackCard'));
const NetProfitCard = React.lazy(() => import('./NetProfitCard'));
const TotalDetails = React.lazy(() => import('./TotalDetails'));
const DetailsCard = React.lazy(() => import('./DetailsCard'));

function Dashboard() {

    return (
        <>
            <div className="bodyColor">
                    <div className="bg-white leftNavBar d-flex justify-content-center">
                        <div>
                            <FontAwesomeIcon className="fs-4 mt-3" icon={faBars} />
                            <Sidenav className="mt-4 bg-white h-100">
                                <Sidenav.Body>
                                    <div className="d-flex flex-column">
                                        <Nav activeKey="1">
                                            <FontAwesomeIcon className="fs-6 text-primary" icon={faHome} />
                                        </Nav>
                                        <Nav activeKey="2">
                                            <FontAwesomeIcon className="fs-6" icon={faBarChart} />
                                        </Nav>
                                        <Nav activeKey="3">
                                            <FontAwesomeIcon className="fs-6" icon={faClipboardCheck} />
                                        </Nav>
                                        <Nav activeKey="4">
                                            <FontAwesomeIcon className="fs-6" icon={faBagShopping} />
                                        </Nav>
                                    </div>
                                    <div className="navbarLastIcon">
                                        <Nav activeKey="5">
                                            <FontAwesomeIcon className="fs-6" icon={faPowerOff} />
                                        </Nav>
                                    </div>
                                </Sidenav.Body>
                            </Sidenav>
                        </div>
                    </div>
                    <div className="px-0 mainContentDiv">
                        <Navbar className="bg-white navbarHeader">
                            <div className="d-flex align-items-center justify-content-between mt-2 ms-3">
                                <Nav>
                                    <div className="d-flex align-items-center searchBar">
                                        <FontAwesomeIcon className="ms-2" icon={faSearch} />
                                        <Input placeholder="Search" className="border-0 outline-none searchInput" type="text" />
                                    </div>
                                </Nav>
                                <Nav pullRight>
                                    <FontAwesomeIcon icon={faCog} className="navbarIcons me-2" />
                                    <FontAwesomeIcon icon={faMessage} className="navbarIcons me-2" />
                                    <FontAwesomeIcon icon={faBell} className="navbarIcons me-2" />
                                    <Avatar className="me-2" size="sm" circle src={"https://i.pravatar.cc/150?u=1"} />
                                </Nav>
                            </div>
                        </Navbar>
                        <div className="maincontent container-fluid pe-0">
                            <h3 className="mt-3">Dashboard</h3>
                            <div className="row my-3 w-100 h-100">
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <Suspense fallback={<>Loading...</>}>
                                        <TotalDetails />
                                    </Suspense>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <Suspense fallback={<>Loading...</>}>
                                        <NetProfitCard />
                                    </Suspense>
                                </div>
                            </div>
                            <div className="row my-3 w-100 h-100">
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <Suspense fallback={<>Loading...</>}>
                                        <ActiviyCard />
                                    </Suspense>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <Suspense fallback={<>Loading...</>}>
                                        <DetailsCard />
                                    </Suspense>
                                </div>
                            </div>
                            <div className="row my-3 w-100 h-100">
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <Suspense fallback={<>Loading...</>}>
                                        <RecentOrders />
                                    </Suspense>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <Suspense fallback={<>Loading...</>}>
                                        <FeedbackCard />
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Dashboard;