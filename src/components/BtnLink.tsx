import React from "react";

interface BtnLinkProps {
  name: string;
  link: string;
}

const BtnLink = ({ name, link }: BtnLinkProps) => {
  return (
    <a href={link} className="btn btn-primary">
      {name}
    </a>
  );
};

export default BtnLink;
