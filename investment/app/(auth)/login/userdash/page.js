"use client";
import React from "react";
import UserdashboardFooter from "@/components/UserdashboardFooter";
import UserdashboardHeader from "@/components/UserdashboardHeader";
import Userdash from "@/components/Userdash";

export default function page() {
  const content = (
    <>
      <UserdashboardHeader />
      <Userdash />
      <UserdashboardFooter />
    </>
  );

  return content;
}
