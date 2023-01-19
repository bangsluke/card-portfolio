import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import { skillData } from "../data/skillData";

HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);

// https://www.highcharts.com/docs/chart-design-and-style/design-and-style
const getOptions = (type) => ({
	chart: {
		type,
		width: 375,
		height: 600,
		backgroundColor: "transparent",
	},
	title: {
		text: "Skills",
		fill: "#fff",
	},
	plotOptions: {
		packedbubble: {
			minSize: "30%",
			maxSize: "100%",
			dataLabels: {
				enabled: true,
				format: "{point.name}",
			},
		},
	},
	series: skillData,
	credits: {
		enabled: false,
	},
});

// Source
// https://betterprogramming.pub/meeting-more-chart-types-bubble-packed-bubble-stream-graph-and-cylinder-7f625c88047d
// https://www.highcharts.com/docs/chart-and-series-types/packed-bubble

function FloatingBubbles() {
	return <HighchartsReact highcharts={Highcharts} options={getOptions("packedbubble")} />;
}

export default FloatingBubbles;
