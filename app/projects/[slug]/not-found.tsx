import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
      <h1>Project not found</h1>
      <p>This project may not be Temporarily available</p>
      <Link href="/projects" className="underline">
        Back to all Projects
      </Link>
    </div>
  );
};

export default NotFound;
