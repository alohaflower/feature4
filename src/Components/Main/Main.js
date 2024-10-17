import {
    useEffect,
    useState,
  } from "react";
  import { getAllPatterns } from "../../Service/Pattern.js";
  import MainList from "./MainList.js";
  
  const Main = () => {
    const [patterns, setPatterns] = useState([]);
  
    useEffect(() => {
      getAllPatterns().then((patterns) => {
        setPatterns(patterns);
      });
    }, []);
  
    return (
        <div>
        <h1>Feature 4 Kickoff</h1>
        This is the stateful parent component.
        <MainList patterns={patterns} />
      </div>
    );
  };
  
  export default Main;
  