import { FC } from "react";
import { Link } from "react-router-dom";

export interface IssuesProps {
  number:string;
  title:string;
  repository:string;
  id:string;
}


export const Issues:FC<IssuesProps> = ({number, title, repository, id}) => {
  console.log(repository, id, number)
    return (
    <div className="card p-8 text-xl font-bold hover:text-2xl">
      
     <Link to={`/comentarios/${repository}/${id}/${number}`}>   {number} ----- {title}  </Link>
    </div>
  );
};
