sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testapp.controller.App", {
            onInit: function () {
                console.log("testApp");
                // const posts = sap.ui.getCore().getModel("posts").getProperty("/");
                // console.log(posts);
            }
        });
    });
