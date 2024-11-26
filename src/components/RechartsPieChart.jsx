import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { prepareData } from './chart-utils';

const RechartsRadarChart = ({ data }) => {
    // Prepare the data
    const transformedData = prepareData(data);

    return (
        <RadarChart cx={150} cy={125} outerRadius={100} width={300} height={250} data={transformedData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis domain={[0, 10]} tickCount={6} />
            <Radar name="Stats" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Tooltip />
        </RadarChart>
    );
};

RechartsRadarChart.propTypes = {
    data: PropTypes.shape({
        force: PropTypes.number,
        intelligence: PropTypes.number,
        energy: PropTypes.number,
        speed: PropTypes.number,
        durability: PropTypes.number,
        fighting: PropTypes.number,
    }),
};

export default RechartsRadarChart;
