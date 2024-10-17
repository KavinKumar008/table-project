import React, { useState } from "react";
import Style from "./Style.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";
import JsonData from "../assets/MOCK_DATA.json";

const Table = () => {
  const jsonData = JsonData;
  const [storedData, setStoredData] = useState(jsonData);

  function deleteData(ind) {
    setStoredData(
      storedData.filter((value, index) => console.log(index, value))
    );
  }
  return (
    <main className={Style.mainContainer}>
      <section className={Style.headingContainer}>
        <h1 className={Style.tableHeading}>Employee Management</h1>
        <label htmlFor="words">
          <span className={Style.search}>Search:</span>
          <input
            type="text"
            id="words"
            name="words"
            placeholder="Enter keywords"
            className={Style.inputField}
          />
        </label>
        <button className={Style.addBtn}>Add New Employee</button>
      </section>
      <section className={Style.tableContainer}>
        <table cellPadding={"53rem"}>
          <thead className={Style.tableHead}>
            <tr className={Style.tablerow}>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          {jsonData.map((item, ind) => {
            return (
              <tbody key={ind}>
                <tr className={Style.mapDatas}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.city}</td>
                  <td className={Style.logos}>
                    <RiDeleteBin6Fill
                      className={Style.deleteLogo}
                      onClick={() => deleteData(ind)}
                    />
                    <MdEditSquare className={Style.editLogo} />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </section>
      <section className={Style.downloadContainer}>
        <button className={Style.downloadBtn}>
          Download as Excel <RiDownload2Fill className={Style.downloadLogo} />
        </button>
      </section>
    </main>
  );
};

export default Table;
