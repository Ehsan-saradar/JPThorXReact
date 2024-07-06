
import { useState } from "react";
import { Landing } from "./(pages)/landing/page";
import { Footer } from "./shared-components/Footer";

export default function Home() {

  return (
    <div >
        <>
          <Landing />
          <Footer />
        </>
    </div>
  );
}
