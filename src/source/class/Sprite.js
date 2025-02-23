
IsoMap.Sprite = React.createClass({


	getDefaultProps: function() {
		return {
			width: 122,
			height: 84,
		}
	},


	render: function(test) {

		return React.createElement("div", {
			style: {
				width: this.props.width,
				height: this.props.height,
			},
			"data-test": "test",
			className: "sprite-grass",
			dangerouslySetInnerHTML: { __html:  this.props.x+'-'+this.props.y},
		})
	}
});
