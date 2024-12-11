import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Homepage.css";

export default function Homepage() {
  const [insider, setInsider] = useState("");
  const [companies, setCompanies] = useState([]);
  const [issuers, setIssuers] = useState([]);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    getIssuers();
    getSummary();
  }, []);

  const getSummary = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/test/summary"
      );
      setSummary(response.data);
    } catch (error) {
      console.log("Summary data not found", error);
    }
  };

  const getIssuers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/test/issuers"
      );
      setIssuers(response.data);
    } catch (error) {
      console.error("Company data not found", error);
    }
  };

  return (
    <>
      <div>
        <div className="filters">
          <label>Filter By: </label>
          <input type="text" placeholder="Symbol" />
          <input type="text" placeholder="Insider" />
          <input type="date" placeholder="Start Date" />
          <input type="date" placeholder="End Date" />
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Issuer</th>
                <th>Symbol</th>
                <th>Reporter name</th>
                <th>Date and time of report</th>
                <th>Stocks acquired</th>
                <th>Stocks disposed</th>
                <th>Derivatives acquired</th>
                <th>Derivatives disposed</th>
                <th>View Transaction</th>
              </tr>
            </thead>
            <tbody>
              {summary?.map((summary) => {
                return (
                  <tr key={summary?.accno}>
                    <td>{summary?.issuer_name}</td>
                    <td>{summary?.symbol}</td>
                    <td>{summary?.reporter_name}</td>
                    <td>{summary?.timestamp}</td>
                    <td>{summary?.stocks_acq}</td>
                    <td>{summary?.stocks_dis}</td>
                    <td>{summary?.derivatives_acq}</td>
                    <td>{summary?.derivatives_dis}</td>
                    <td>
                      <a target="blank" href={summary?.HTML_link}>
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="actions">
          <button>Download</button>
          <button>Share</button>
        </div>
      </div>
    </>
  );
}

{
  /* postgresql test  
           {companies?.map((insider) => {
              return (
                <tr key={insider?.id}>
                  <td>{insider?.name}</td>
                  <td>{insider?.insider}</td>
                  <td>{insider?.date}</td>
                  <td>{insider?.stocksacq}</td>
                  <td>{insider?.stocksdis}</td>
                  <td>{insider?.optionsacq}</td>
                  <td>{insider?.optionsdis}</td>
                </tr>
              );
            })} */
}

/* 
postgresql test db
  const getCompanyData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/insiders");
      console.log(response.data);
      setCompanies(response.data);
    } catch (error) {
      console.error("Company data not found", error);
    }
  }; */
