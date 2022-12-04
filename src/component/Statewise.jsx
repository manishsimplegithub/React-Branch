import React, { useEffect, useState } from "react";

const Statewise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA </span>COVID-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover text-success">
            <thead className="thead-dark bg-black text-white">
              <tr>
                <th> STATE</th>
                <th> CONFIRMED</th>
                <th> RECOVERED</th>
                <th> DEATH</th>
                <th> ACTIVE</th>
                <th> UPDATED</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curEelem, index) => {
                return (
                  <tr key={index}>
                    <th> {curEelem.state}</th>
                    <td> {curEelem.confirmed}</td>
                    <td> {curEelem.recovered}</td>
                    <td> {curEelem.deaths}</td>
                    <td> {curEelem.active}</td>
                    <td> {curEelem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
