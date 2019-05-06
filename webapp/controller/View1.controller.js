sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.global",
	"sap/m/MessageToast"
], function (Controller, JSONModel, jQuery, MessageToast) {
	"use strict";
	return Controller.extend("file.fileUpload.controller.View1", {
		onInit: function () {
			var ODataModel = "/sap/opu/odata/sap/ZPO_ODATA_SERVICE_SRV/";
			this._model = new sap.ui.model.odata.ODataModel(ODataModel, true);
			this.getView().setModel(this._model);
			this._token = this._model.getSecurityToken();
		},
		handleUploadComplete: function (oEvent) {
			var oFileUpload = sap.ui.getCore().byId("fileUploader");
			var file = oEvent.oSource.oFileUpload.files[0];
			var entry = {};
			entry.CONTENT = file;
			var url = "/sap/opu/odata/sap/ZPO_ODATA_SERVICE_SRV/zpoFileTable1Set('17')/$value";
			var Header = {
			"x-csrf-token": this._token
			};
			jQuery.ajax({
				type: "PUT",
				url: url,
				headers: Header,
				cache:false,
				contentType: false,
				processData:false,
				data:file,
				success: function(oevt){
					console.log(oevt);	
				},
				error:function(err){
					console.log(err);
				}
			});
		
		}
	});
});