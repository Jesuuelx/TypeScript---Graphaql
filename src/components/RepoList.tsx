import React, { FC } from "react";
import { useApoloOwner } from "../hooks/useApoloOwner";
import { ListItem, ListItemProps } from './ListItem';


interface RepoListProps {
  owner: string;
}

export const RepoList: FC<RepoListProps> = ({ owner }) => {
  const { data, loading, error } = useApoloOwner(owner);
  return (
    <>
      <div className="container space-x-36 bg-slate-200 p-16">
        <h3 className="animate__animated animate__fadeIn font-bold text-cyan-600 italic hover:not-italic hover:text-2xl">
          Repository Name: {owner}{" "}
        </h3>

        {error && (
          <p className="text-cyan-600 font-old">Archivo No Encontrado</p>
        )}

        {loading && (
          <p className="animate__animated animate__flash font-bold text-cyan-600">
            Loading
          </p>
        )}
      </div>

      <div className="car-grid container mt-8 animate__animated animate__flash">
        {data.map((data:ListItemProps) => (
          <ListItem key={data.id} {...data} owner={owner} />
        ))}
      </div>
    </>
  );
};
