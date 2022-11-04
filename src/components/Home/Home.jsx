import React from "react";


export const Home = ({contests}) => {
  const beautifyDate = (date) => {
    let date_options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
  
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(date)
      .toLocaleString("en-IN", date_options)
      .replaceAll("-", " ");
  };
  
  const fetchTime = (duration) => {
    const minutes = (parseInt(duration) / 60) % 60;
    const hours = parseInt((parseInt(duration) / 3600) % 24);
    const days = parseInt((parseInt(duration) / 3600) / 24);
    var timeDuration = ``;
    if (days > 0)
      timeDuration += `${days} days `;
    if (hours > 0) 
      timeDuration += `${hours} hours `;
    if (minutes > 0)
      timeDuration += `${minutes} minutes `;
    return timeDuration;
  }

  return (
    <div className="contest-list">
      {contests?.map((contest) => {    
        return (
          <div className="box">
            <div className="wrapper">
              <img className="image" src={"images/" + contest.site + ".png"} width="30" height="30" />
              <div className="data">
                <div className="content">
                  <h1 className="title">
                    <a href={contest.url} className="cardTitle">
                      {contest.name}
                    </a>
                  </h1>
                  <p className="text">Start : {beautifyDate(contest.start_time)}</p>
                  <p className="text">End : {beautifyDate(contest.end_time)}</p>
                  <p className="text-duration">Duration: {fetchTime(contest.duration)}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
