import { useParams } from "react-router-dom";
import { useApoloDetails } from "../hooks/useApoloDetails";
import { Issues, IssuesProps } from './Issues';

interface Params {
  repository:any;
  id:any;
}


export const ItemDetail = () => {
  const { id, repository } = useParams<Params>();

  const { data, loading, error } = useApoloDetails(repository, id);

  return (
    <>
      {loading ? (
        <p className="animate__animated animate__flash font-bold text-cyan-600">
          {" "}
          Loading
        </p>
      ) : (
        <div className="container space-x-36 bg-slate-200 p-16 mx-auto">
          <div>
            <h1 className="animate__animated animate__fadeIn font-bold text-cyan-600 italic hover:not-italic hover:text-2xl">
              Information of the errors
            </h1>
            {error && (
              <p className="text-cyan-600 font-old">Archivo No Encontrado</p>
            )}
          </div>
          {data.map((data:IssuesProps) => (
            <Issues key={data.id} {...data} repository={repository} id={id} />
          ))}
        </div>
      )}
    </>
  );
};
