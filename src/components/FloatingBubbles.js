import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
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
	series: [
		{
			name: "A",
			data: [
				{
					name: "A.1",
					value: 2,
				},
				{
					name: "A.2",
					value: 10,
				},
				{
					name: "A.3",
					value: 9,
				},
				{
					name: "A.4",
					value: 12,
				},
			],
		},
		{
			name: "B",
			data: [
				{
					name: "B.1",
					value: 2,
				},
				{
					name: "B.2",
					value: 1,
				},
				{
					name: "B.3",
					value: 8,
				},
				{
					name: "B.4",
					value: 7,
				},
				{
					name: "B.5",
					value: 5,
				},
			],
		},
		{
			name: "C",
			data: [
				{
					name: "C.1",
					value: 11,
				},
				{
					name: "C.2",
					value: 7,
				},
				{
					name: "C.3",
					value: 2,
				},
			],
		},
		{
			name: "D",
			data: [
				{
					name: "D.1",
					value: 7,
				},
				{
					name: "D.2",
					value: 4,
				},
				{
					name: "D.3",
					value: 9,
				},
			],
		},
	],
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
