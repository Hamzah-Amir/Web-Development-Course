"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {

  let ref = useRef()

  return (
    <div className="w-2/3 mx-auto my-9">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" className=" border-[1px] rounded-[10px] w-[100px] mx-4" />
        </div>
        <div className="gap-[10px]">
          <label htmlFor="add">Address</label>
          <input type="text" placeholder="Address" name="add" id="add" className="border-[1px] rounded-[10px] w-[100px] mx-4" />
        </div>
        <div>
          <button className="cursor-pointer border-[1px] rounded-[10px] my-2.5 w-[100px] mx-4">Submit</button>
        </div>
      </form>
    </div>
  );
}
