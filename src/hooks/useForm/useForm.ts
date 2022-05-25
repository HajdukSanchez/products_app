import { useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
  };
};

export { useForm };
