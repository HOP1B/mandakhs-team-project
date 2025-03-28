"use client";

import { CaseCard } from "@/app/components/CaseCard";

import { useEffect, useState } from "react";
import axios from "axios";

export type CasesType = {
  id: string;
  name: string;
  img: string;
};

const Page = () => {
  const [cases, setCases] = useState<CasesType[]>([]);

  useEffect(() => {
    const getCases = async () => {
      const res = await axios.get("http://localhost:3000/api/cases");
      setCases(res.data);
    };

    getCases();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-cols-6 gap-6 px-32">
      {cases.map((a) => (
        <CaseCard id={a.id} name={a.name} img={a.img} key={a.id} />
      ))}
    </div>
  );
};

export default Page;
