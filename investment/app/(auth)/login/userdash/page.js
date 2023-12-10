"use client";
import React from "react";
import Userdash from "@/components/Userdash";
import UserDashboardHeader from "@/components/UserDashboardHeader";
import UserDashboardFooter from "@/components/UserDashboardFooter";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function page() {
  const content = (
    <main>
      <UserDashboardHeader />
      <Userdash />
      <UserDashboardFooter />
    </main>
  );

  return content;
}
