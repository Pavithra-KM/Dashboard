import { SelectPicker } from 'rsuite';
import ReactEcharts from "echarts-for-react"

function ActiviyCard() {
    const chartOptions = {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
            type: "category",
            data: ["5", "7", "9", "11", "13", "15", "17", "21", "23", "25", "27"]
        },
        yAxis: {
            type: "value",
            data: ["0", "5k", "10k", "15k"],
        },
        series: [
            {
                data: [4000, 5000, 1500, 2000, 2800, 15000, 13450, 7500, 11000, 9200, 14000],
                type: "bar",
                barWidth: "20%",
                smooth: true
            }
        ],
        tooltip: {
            trigger: "axis"
        }
    }
    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>Activity</h3>
                            <SelectPicker
                                data={[
                                    {
                                        "label": "Hourly",
                                        "value": "Hourly"
                                    },
                                    {
                                        "label": "Weekly",
                                        "value": "Weekly"
                                    },
                                    {
                                        "label": "Monthly",
                                        "value": "Monthly"
                                    },
                                    {
                                        "label": "Yearly",
                                        "value": "Yearly"
                                    }
                                ]}
                                value={"Weekly"}
                                size="xs"
                                searchable={false}
                                cleanable={false} />
                        </div>
                        <ReactEcharts
                            option={chartOptions}
                            style={{ width: "100%", height: "230px" }}
                        ></ReactEcharts>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiviyCard;