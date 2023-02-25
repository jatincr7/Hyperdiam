import React from "react";

function DiamondDetailsPage({ match }) {
  const diamondId = "3013197333";
  const location = "Sample Location";
  const miningCompany = "Sample Mining Company";
  const batchNo = "123456";
  const time = "2023-02-24T18:00:00Z";
  const weight = "1.00 ct";
  const grade = "A+";
  const retailerName = "Sample Retailer";
  const colorClarity = "VS1";
  const carat = "1.00 ct";
  const cutScale = "Excellent";

  return (
    <div>
      <h1>Diamond Details</h1>
      <table>
        <tbody>
          <tr>
            <td>Diamond ID:</td>
            <td>{diamondId}</td>
          </tr>
          <tr>
            <td>Mining Location:</td>
            <td>{location}</td>
          </tr>
          <tr>
            <td>Mining Company:</td>
            <td>{miningCompany}</td>
          </tr>
          <tr>
            <td>Batch No.:</td>
            <td>{batchNo}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Grade:</td>
            <td>{grade}</td>
          </tr>
          <tr>
            <td>Retailer Name:</td>
            <td>{retailerName}</td>
          </tr>
          <tr>
            <td>Color Clarity:</td>
            <td>{colorClarity}</td>
          </tr>
          <tr>
            <td>Carat:</td>
            <td>{carat}</td>
          </tr>
          <tr>
            <td>Cut Scale:</td>
            <td>{cutScale}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DiamondDetailsPage;
