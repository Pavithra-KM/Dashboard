import { Avatar, Rate } from 'rsuite';

function FeedbackCard() {
    const customersFeedbackData = [
        { name: "Jenny Wilson", rating: 5, image: "https://i.pravatar.cc/150?u=1", feedback: "The food was excellent and so was the service. I had the mushroom ristoo with scallops which was awesome. I had a burger which also very good." },
        { name: "Dianne Russell", rating: 4, image: "https://i.pravatar.cc/150?u=2", feedback: "The food was excellent and so was the service. I had the mushroom ristoo with scallops which was awesome. I had a burger which also very good." },
        { name: "Devon Lane", rating: 3, image: "https://i.pravatar.cc/150?u=3", feedback: "The food was excellent and so was the service. I had the mushroom ristoo with scallops which was awesome. I had a burger which also very good." },
        { name: "David Maxwell", rating: 4, image: "https://i.pravatar.cc/150?u=5", feedback: "The food was excellent and so was the service. I had the mushroom ristoo with scallops which was awesome. I had a burger which also very good." },
        { name: "David Warner", rating: 5, image: "https://i.pravatar.cc/150?u=7", feedback: "The food was excellent and so was the service. I had the mushroom ristoo with scallops which was awesome. I had a burger which also very good." }
    ]

    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h3>Customers Feedback</h3>
                        <div className="feedbackCard">
                            {customersFeedbackData?.map((data) => {
                                return (
                                    <>
                                        <div className="d-flex align-items-center my-3">
                                            <Avatar className="me-2" size="sm" circle src={data?.image} />{data?.name}
                                        </div>
                                        <Rate value={data?.rating} size="sm" color="yellow" />
                                        <p>{data?.feedback}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackCard;