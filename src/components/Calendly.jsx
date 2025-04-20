import React from "react";
import { PopupWidget } from "react-calendly";
import { useTranslation } from "react-i18next"; // Import the translation hook

const Calendly = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/heavenlyconnectenterprise/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text={t("CalendlyText")}
        textColor="#ffffff"
        color="#C87634"
      />
    </div>
  );
};

export default Calendly;