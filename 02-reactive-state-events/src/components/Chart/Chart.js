
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(d => d.value)
    const totalMax = Math.max(...dataPointValues)

    return <div className="chart">
        {props.dataPoints.map(d => (
            <ChartBar
            key={'datapoint_' + d.label.trim()}
            value={d.value}
            maxValue={totalMax}
            label={d.label}
            />
        ))}
    </div>
}

export default Chart