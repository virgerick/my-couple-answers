import { useState } from "react";

function useForm<T>(initialState: T|(()=>T) ) {
  const [formState, setFormState] = useState<T>(initialState);
  const register = (e: any) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return { register, formState };
}

export default useForm;
