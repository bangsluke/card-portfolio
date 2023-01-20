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
		// width: 375,
		// height: 600,
		backgroundColor: "transparent",
	},
	title: {
		text: "Skills",
		floating: true,
		margin: [0, 0, 50, 0],
		offset: 50,
		style: {
			color: "#ffffff",
			fontFamily: "Roboto",
		},
	},
	legend: {
		bubbleLegend: {
			enabled: false,
		},
		itemStyle: {
			color: "#ffffff",
			fontFamily: "Roboto",
		},
	},
	exporting: {
		enabled: false,
	},
	// tooltip: {
	// 	formatter: function () {
	// 		return '<img src="' + this.point.logo + '" width="50" height="50" />' + this.point.name;
	// 	},
	// },
	plotOptions: {
		packedbubble: {
			minSize: "30%",
			maxSize: "100%",
			dataLabels: {
				enabled: true,
				// format: "{point.name}",
				// formatter: function () {
				// 	return '<img src="' + this.point.logo + '" width="50" height="50" />';
				// },
				formatter: function () {
					return this.point.name;
				},
				// style: {
				// 	background: `url(${this.point.logo}) no-repeat center`,
				// },
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
	return (
		<div className='card'>
			<div className='floating-bubbles'>
				<HighchartsReact highcharts={Highcharts} options={getOptions("packedbubble")} />
			</div>
		</div>
	);
}

export default FloatingBubbles;
