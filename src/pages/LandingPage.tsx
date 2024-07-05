import { FC, useEffect, useState } from "react";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";
import { IncomingData } from "../components/ComponentOne";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IncomingData[]>();

  useEffect(() => {
    axios
      .get<IncomingData[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch((e) => console.log(e));
  }, []);


  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <span>Loading data</span>
          <MoonLoader color={"white"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <ComponentOne data={data}/>
          <ComponentTwo />
        </>
      )}
      ;
    </div>
  );
};

export default LandingPage;
