import React from "react";

const Job = ({ position, dates, duties }) => {
  return (
    <section>
      <div>
        <h4>Position: {position}</h4>
        <p>{dates}</p>
      </div>
      <div>
        Duties:
        <br />
        <ul>
          {duties.map((duty, index) => {
            return <li key={index}>{duty}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Job;
