import { useState } from "react";
import "../css/Homepage.css";

export default function Homepage() {
  const [symbol, setSymbol] = useState("");
  const [insider, setInsider] = useState("");

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
            <tr>
              <td>Company name</td>
              <td>Insider name</td>
              <td>date</td>
              <td>10</td>
              <td>10</td>
              <td>0</td>
              <td>10</td>
            </tr>
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
