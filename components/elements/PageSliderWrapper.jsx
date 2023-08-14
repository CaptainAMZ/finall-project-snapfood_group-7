"use client";

import React, { use, useState } from "react";
import PageSides from "./PageSides";

export default function PageSliderWrapper({ restaurants }) {
  return (
    <>
      <PageSides restaurants={restaurants} />
    </>
  );
}
