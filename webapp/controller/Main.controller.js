sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("andina.andinasalesportal.controller.Main", {
        onInit() {
        },

        onWelcome() {
            // 1. Read what the user typed
            const name = this.byId("salespersonNameInput").getValue();

            // 2. Get the translated texts from i18n
            const bundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            // 3. Build the message, replacing {0} with the name
            const message = bundle.getText("welcomeMessage", [name]);

            // 4. Show it on screen
            this.byId("messageText").setText(message);
        },

        onShowDateTime() {
            // 1. Get the current date and time as text
            const dateTime = new Date().toLocaleString();

            // 2. Show it on screen
            this.byId("messageText").setText(dateTime);
    }
    });
});
