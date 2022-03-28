import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface ListItemProps {
  name: string;
  id: string;
  owner: string;
}

export const ListItem: FC<ListItemProps> = ({ name, id, owner }) => {
  return (
    <div className="card p-8 text-xl font-bold hover:text-2xl">
      <p>
        {" "}
        <Link to={`/${owner}/${id}/${name}`}> {name} </Link>
      </p>
    </div>
  );
};
