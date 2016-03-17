			var datasetID = this.getView().byId("datasetID");
			var txtJSON = this.getView().byId("txtJSON");
			var oModel = this.getView().getModel();
			var comboTarget = this.getView().byId("comboTarget");
			$.ajax({
				url: "/destinations/ps/dataset/" + datasetID.getValue(),
				type: "get",
				dataType: "json",
				error: function (data) {
					txtJSON.setText(JSON.stringify(data));
				},
				success: function (data) {
					oModel.setData(data);
					comboTarget.setSelectedKey(data.variables[data.variables.length-1].name);
					txtJSON.setText(JSON.stringify(data));
				}
			});
