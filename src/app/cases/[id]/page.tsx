"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { SkinCard } from "@/app/components/SkinCard";
import { useParams } from "next/navigation";
import { DynamicSpinner } from "@/app/components/layout/DynamicSpinner";

export type SkinsType = {
  id: string;
  name: string;
  img: string;
};

const Page = () => {
  const {id} = useParams();
  const [skinCase, setCase] = useState<any>(null);

  useEffect(() => {
    const getCase = async () => {
      const res = await axios.get("http://localhost:3000/api/cases/"+id);
      setCase(res.data);
    };

    getCase();
  }, []);

  if(!skinCase) return <>Case not found!</>

const skins = skinCase.skins.map((skin:any)=>skin.skin);


  return (
    <div>
      <div className="p-32">
        <DynamicSpinner skinCase={skinCase}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  grid-cols-6 gap-6 px-32">
      {skins.map((a) => (
        <SkinCard id={a.id} name={a.name} img={a.img} key={a.id} />
      ))}
    </div>
    </div>
  );
};

export default Page;
