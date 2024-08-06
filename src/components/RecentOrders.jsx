import { Table } from 'react-bootstrap';
import { Avatar, Badge } from 'rsuite';

function RecentOrders() {

    const recentOrdersData = [
        { name: "Wade Warren", orderNumber: "03197451", amount: "$124.00", status: "Delivered", image: "https://i.pravatar.cc/150?u=1" },
        { name: "Jane Cooper", orderNumber: "96328569", amount: "$432.20", status: "Cancelled", image: "https://i.pravatar.cc/150?u=2" },
        { name: "Guy Hawkins", orderNumber: "85235623", amount: "$568.00", status: "Delivered", image: "https://i.pravatar.cc/150?u=3" },
        { name: "Krislin Watsnn", orderNumber: "75364569", amount: "$213.90", status: "Cancelled", image: "https://i.pravatar.cc/150?u=5" },
        { name: "Cady Fisher", orderNumber: "56748524", amount: "$923.00", status: "Cancelled", image: "https://i.pravatar.cc/150?u=7" },
        { name: "Savarah Nguyen", orderNumber: "45231236", amount: "$854.00", status: "Delivered", image: "https://i.pravatar.cc/150?u=6" }
    ]

    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <h3>Recent Orders</h3>
                        <div className='overflow-scroll'>
                            <Table className='tableWidth'>
                                <thead>
                                    <tr>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Order No.</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrdersData?.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <Avatar className="me-2" size="sm" circle src={data?.image} />
                                                        {data?.name}
                                                    </div>
                                                </td>
                                                <td>{data?.orderNumber}</td>
                                                <td>{data?.amount}</td>
                                                <td>
                                                    <Badge className="p-1" color={data?.status === "Delivered" ? "green" : "red"} content={data?.status} />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RecentOrders;