import { useEffect, useState } from "react";
import { getComments } from "../helpers/getComments";


interface stateProps {
  data:[],
  title:string,
  loading:boolean,
  error404:boolean
}

export const useApoloComments = (owner:string, project:string, number:string) => {
  const [repo, setRepo] = useState<stateProps>({
    data:[],
    title:'',
    loading: true,
    error404:false,
  });

  useEffect(() => {
    getComments(owner, project, number).then(({title, comments}) => {
      setRepo({
        title:title,
        data:comments,
        loading:false,
        error404:false
      })
      
    }).catch( err => {
      setRepo({
        data:[],
        title:'',
        loading:false,
        error404:true,
      })

    })
  }, [owner, project, number]);

  return repo;
};
