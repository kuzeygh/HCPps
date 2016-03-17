onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			this.getView().setModel(oModel);
		},

		
			var datasetID = this.getView().byId("datasetID");
			var oModel = this.getView().getModel();
			var comboTarget = this.getView().byId("comboTarget");
			var radioTable = this.getView().byId("radioTable");
			var txtJSON = this.getView().byId("txtJSON");
			var body = {};
			body.hanaURL = "PS_DATA/" + radioTable.getSelectedButton().getText();
			$.ajax({
				url: "/destinations/ps/dataset/sync",
				type: "post",
				contentType: "application/json",
				data: JSON.stringify(body),
				dataType: "json",
				error: function (data) {
					txtJSON.setText(JSON.stringify(data));
				},
				success: function (data) {
					datasetID.setValue(data.id);
					oModel.setData(data);
					comboTarget.setSelectedKey(data.variables[data.variables.length-1].name);
					txtJSON.setText(JSON.stringify(data));
				}
			});
