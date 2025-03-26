"use client";

import { SkinsGrid } from "@/app/components/SkinsGrid";
import { useEffect, useState } from "react";
import axios from "axios";

export type SkinsGrid = {
  id: string;
  name: string;
  img: string;
};

const Page = () => {
  const [skins, setSkins] = useState<SkinsGrid[]>([]);

  useEffect(() => {
    const getSkins = async () => {
      const res = await axios.get("http://localhost:3000/api/skins");
      setSkins(res.data);
    };

    getSkins();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-32">
      {skins.map((a) => (
        <SkinsGrid id={a.id} name={a.name} img={a.img} key={a.id} />
      ))}
    </div>
  );
};

export default Page;
