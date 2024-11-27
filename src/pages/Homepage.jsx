import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Homepage.css";

export default function Homepage() {
  const [symbol, setSymbol] = useState("");
  const [insider, setInsider] = useState("");
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanyData();
  }, []);

  const getCompanyData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/insiders");
      console.log(response.data);
      setCompanies(response.data);
    } catch (error) {
      console.error("Company data not found", error);
    }
  };

  return (
    <>
      <div>
        <div className="filters">
          <label>Filters: </label>
          <input type="text" placeholder="Symbol" />
          <input type="text" placeholder="Insider" />
          <input type="date" placeholder="Start Date" />
          <input type="date" placeholder="End Date" />
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Insider</th>
              <th>Date</th>
              <th>StocksAcq</th>
              <th>StocksDis</th>
              <th>OptionsAcq</th>
              <th>OptionsDis</th>
            </tr>
          </thead>

          <tbody>
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
            })}
          </tbody>
        </table>

        <div className="actions">
          <button>Download</button>
          <button>Share</button>
        </div>
      </div>
    </>
  );
}
