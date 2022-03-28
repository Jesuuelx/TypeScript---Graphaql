import { useEffect, useState } from "react";
import { getProps } from "../helpers/getProps";

export interface ApoloProps {
  data:[],
  loading:boolean,
  error:boolean;
  
}

export const useApoloOwner = (owner:string) => {
  const [repo, setRepo] = useState<ApoloProps>({
    data:[],
    loading: true,
    error:false,
  });

  useEffect(() => {
    getProps(owner).then((data) => {
      setRepo({
        data:data,
        loading: false,
        error:false,
      });
    }).catch( err => {
      setRepo({
        data:[],
        loading:false,
        error:true,
      })

    })
  }, [owner]);

  return repo;
};
