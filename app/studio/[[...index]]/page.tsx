"use client";

import React from "react";
import { NextStudio } from "next-sanity/studio";

import config from "../../../sanity.config";

function Page() {
  return <NextStudio config={config} />;
}

export default Page;
