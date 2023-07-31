import React from "react";
import SnapApplication from "../modules/SnapApplication";
import SnapBusiness from "../modules/SnapBusiness";
import Cities from "../modules/Cities";
import Footer from "../modules/Footer";

const Application = () => {
  return (
    <div className="w-100 sm:w-[95%] sm:p-4 m-auto">
      <SnapApplication />
      <SnapBusiness />
      <Cities />
      <Footer />
    </div>
  );
};

export default Application;
