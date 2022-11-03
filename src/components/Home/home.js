import { useEffect, useState } from "react";
import Axios from "axios";

export const Home = () => {
  const [dataList, setNewData] = useState([]);

  useEffect(() => {
    Axios.get("https://kontests.net/api/v1/all").then((res) => {
      setNewData(res.data);
    });
  }, []);

  return (
    <div className="contest-list">
      {dataList?.map((contest) => {
        var logoImage = "images/HackerEarth.png";
        const name = contest.site;
        const cf = "CodeForces";
        if (name === "HackerEarth") {
          logoImage = "images/HackerEarth.png";
        } else if (name === "CodeForces") {
          logoImage = "images/codeforces.png";
        } else if (name == "CodeChef") {
          logoImage = "images/codechef.png";
        } else if (name == "AtCoder") {
          logoImage = "images/atcoder.png";
        } else if (name == "LeetCode") {
          logoImage = "images/leetcode.png";
        }
        
        return (
          <div className="box">
            <div className="wrapper">
              <img className="image" src={logoImage} width="30" height="30" />
              <div className="data">
                <div className="content">
                  <h1 className="title">
                    <a href={contest.url} className="cardTitle">
                      {contest.name}
                    </a>
                  </h1>
                  <p className="text">{contest.site}</p>
                  <p className="text-duration">Duration: {contest.duration}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
