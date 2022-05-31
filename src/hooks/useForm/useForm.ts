import { useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const setFormValue = (form: T) => {
    setState({ ...state, ...form });
  };

  return {
    ...state,
    form: state,
    onChange,
    setFormValue,
  };
};

export { useForm };
