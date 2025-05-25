'use server'
import React from "react";

const Container = ({children} : {children: React.ReactNode}) => {
  return (
   <div className="container mx-auto px-3 md:px-0">
     {children}
   </div>
  );
};

export default Container;