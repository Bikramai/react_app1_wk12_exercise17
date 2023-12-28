import { useEffect, useState } from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/api-client";


const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      
      // get -> promise -> response / err
      setLoading(true);
      const {request, cancel} = userService.getAll<User>();
      request.then((Response) => {
          setUsers(Response.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => cancel();
    }, []);  


    return {users, error, isLoading, setUsers, setError};

}

export default useUsers;