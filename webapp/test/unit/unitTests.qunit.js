/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"file/fileUpload/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});