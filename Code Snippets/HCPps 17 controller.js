	sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"], function (Controller) {

			var datasetID = this.getView().byId("datasetID");
			var txtJSON = this.getView().byId("txtJSON");
			var comboTarget = this.getView().byId("comboTarget");
			var body = {};
			body.datasetID = datasetID.getValue();
			body.targetColumn = comboTarget.getSelectedKey();
			$.ajax({
				url: "/destinations/ps/keyinfluencer/sync",
				type: "post",
				contentType: "application/json",
				data: JSON.stringify(body),
				dataType: "json",
				error: function (data) {
					txtJSON.setText(JSON.stringify(data));
				},
				success: function (data) {
						sap.m.MessageToast.show("Analysis Complete. Quality:" + data.modelPerformance.qualityRating + " Confidence:" + data.modelPerformance.confidenceIndicator);
						txtJSON.setText(JSON.stringify(data));
				}
			});
	