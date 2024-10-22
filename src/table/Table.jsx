import React, { useState } from "react";
import Style from "./Style.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";
import jsonData from "../assets/MOCK_DATA.json";
import EditEmployee from "../editemp/EditEmployee";
import CreateEmployee from "../createemp/CreateEmployee";

const Table = () => {
  const [storedData, setStoredData] = useState(jsonData);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editableData, setEditableData] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  function deleteData(id) {
    const del = storedData.filter((itm) => itm.id-- !== id); // illana item.id-- kuduthalum work aagum for changing the serial no
    setStoredData(del);
  }

  function showingDataEdit(item) {
    setIsEditDialogOpen(true);
    setEditableData(item);
  }

  function createEmpData(fname, lname, city, id) {
    setStoredData((prev) => [
      ...prev,
      { id, first_name: fname, last_name: lname, city },
    ]);
  }

  const filteredData = storedData.filter((item) => {
    item.first_name
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase()) ||
      item.last_name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      item.last_name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
  });

  console.log(storedData);
  console.log(filteredData);
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button
          className={Style.addBtn}
          onClick={() => setIsCreateDialogOpen(true)}
        >
          Add New Employee
        </button>
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
          {filteredData.map((item, index) => {
            return (
              <tbody key={index}>
                <tr className={Style.mapDatas}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.city}</td>
                  <td className={Style.logos}>
                    <RiDeleteBin6Fill
                      className={Style.deleteLogo}
                      onClick={() => deleteData(item.id)}
                    />
                    <MdEditSquare
                      className={Style.editLogo}
                      onClick={() => showingDataEdit(item)}
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
      {editableData && (
        <EditEmployee
          isEditDialogOpen={isEditDialogOpen}
          setIsEditDialogOpen={setIsEditDialogOpen}
          storedData={storedData}
          setStoredData={setStoredData}
          editableData={editableData}
          setEditableData={setEditableData}
        />
      )}

      <CreateEmployee
        isCreateDialogOpen={isCreateDialogOpen}
        setIsCreateDialogOpen={setIsCreateDialogOpen}
        createEmpData={createEmpData}
        storedData={storedData}
      />
    </main>
  );
};

export default Table;
