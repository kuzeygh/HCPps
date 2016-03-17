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
					txtJSON.setText(JSON.stringify(data));
				}
			});
