import React, { useState } from "react";
import Style from "./Style.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";
import jsonData from "../assets/MOCK_DATA.json";
import EditEmployee from "../editemp/EditEmployee";

const Table = () => {
  const [storedData, setStoredData] = useState(jsonData);
  const [isDialogOpen, setISDialogOpen] = useState(false);

  function deleteData(id) {
    const del = storedData.filter((itm) => itm.id !== id); // illana item.id-- kuduthalum work aagum for changing the serial no
    setStoredData(del);
  }

  const editData = (id, fname, lname, city) => {
    setStoredData((prevValue) => {
      const updatedValue = [...prevValue];
      updatedValue[id] = [fname, lname, city];
      return updatedValue;
    });
  };

  function showingDataEdit(id, storedData) {
    setISDialogOpen(true);
    console.log(storedData[0]);
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
              <th>SNo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          {storedData.map(({ id, first_name, last_name, city }, index) => {
            return (
              <tbody key={index}>
                <tr className={Style.mapDatas}>
                  <td>{index + 1}</td>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>{city}</td>
                  <td className={Style.logos}>
                    <RiDeleteBin6Fill
                      className={Style.deleteLogo}
                      onClick={() => deleteData(id)}
                    />
                    <MdEditSquare
                      className={Style.editLogo}
                      onClick={() => showingDataEdit(id, storedData)}
                    />
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
      <EditEmployee
        isDialogOpen={isDialogOpen}
        setISDialogOpen={setISDialogOpen}
        editData={editData}
        storedData={storedData}
      />
    </main>
  );
};

export default Table;
