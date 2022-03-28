import { useEffect, useState } from "react";
import { getDetail } from "../helpers/getDetails";
import { ApoloProps } from './useApoloOwner';



export const useApoloDetails = (repository:string, project:string) => {
  const [repo, setRepo] = useState<ApoloProps>({
    data:[],
    loading: true,
    error:false,
  });

  useEffect(() => {
    getDetail(repository, project).then((data) => {
     if( data.length > 0) {
     
      setRepo({
       data:data,
       loading:false,
       error:false
     })
    }else{
      setRepo({
        data:data,
        loading:false,
        error:true,
      })
    }
      
      
    }).catch( err => {
      setRepo({
        data:[],
        loading:false,
        error:true,
      })

    })
  }, [repository, project]);

  return repo;
};
