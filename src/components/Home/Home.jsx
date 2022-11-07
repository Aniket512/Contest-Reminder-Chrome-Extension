import React from "react";


export const Home = ({ contests }) => {
  var selectedContests=contests;
  if(localStorage.getItem('host_sites')!=null)
  {
  const sites = Object.values(JSON.parse(localStorage.getItem('host_sites'))).filter(site => site.status === true).map(site => site.name);
  selectedContests = contests.filter(contest => sites.includes(contest.site));
  }

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

  const eventsavedincalendar=(contest)=>{
    function ISODateString(d){
      		var isoDate = d;
      		isoDate = isoDate.replaceAll(":", "");
      		isoDate = isoDate.replaceAll("-", "");
      		var retval = isoDate.split(".")[0] + "Z";
      		return retval;
      	}

      	var start = contest.start_time;
      	var end = contest.end_time;
      	var uri = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(
      		contest.name
      	)}&dates=${ISODateString(start)}/${ISODateString(
      		end
      	)}&details=Happy Coding. Contest URL: ${contest.url}`;
      	console.log("uri: " + uri);
        window.open(uri, '_blank', 'noopener,noreferrer');
  }

  const newTab=(contest)=>{
    var uris='${contest.url}';
    window.open(uris, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="contest-list">
      {selectedContests?.map((contest) => {
        return (
          <div className="box">
            <div className="wrapper">
              <img className="image" src={"images/" + contest.site + ".png"} onError={(e) => { e.target.src = "images/KickStart.png" }} />
              <div className="data">
                <div className="content">
                  <h1 className="title">
                    <a href={contest.url} target="_blank" className="cardTitle" >
                      {contest.name}
                    </a>
                  </h1>
                  <p className="text">Start : {beautifyDate(contest.start_time)}</p>
                  <p className="text">End : {beautifyDate(contest.end_time)}</p>
                  <p className="text-duration">Duration: {fetchTime(contest.duration)}</p>
                  <button onClick={()=>eventsavedincalendar(contest)} className="calendar-btn">Add to Calendar</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};