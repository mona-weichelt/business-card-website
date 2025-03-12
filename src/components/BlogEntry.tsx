import { useEffect, useState } from "react";

const fetchData = () => {
  return ["bunnies", "are", "awesome"];
};

type PropType = {
  variant: number;
};

const Entry = ({ variant }: PropType) => {
  const [state, setState] = useState({});
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setData(fetchData());
  }, []);

  useEffect(() => {
    if (variant === 1) {
      setState((x) => {
        return { ...x, bunnies: "happy" };
      });
    }
  }, []);

  if (variant === 0) return <h1>Hello blog!</h1>;
  return (
    <div>
      <h1>Oh no!</h1>
      {data.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default {
  fetchData,
  Entry,
};
