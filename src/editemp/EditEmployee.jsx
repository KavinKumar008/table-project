import React, { useState } from "react";
import styles from "./Style.module.css";
import * as Dialog from "@radix-ui/react-dialog";

const EditEmployee = ({
  isDialogOpen,
  setISDialogOpen,
  editData,
  storedData,
}) => {
  const [empId, setEmpId] = useState(storedData[0].id);
  const [fname, setFname] = useState(storedData[0].first_name);
  const [lname, setLname] = useState(storedData[0].last_name);
  const [city, setCity] = useState(storedData[0].city);

  function sendDataToTable() {
    editData(empId, fname, lname, city);
    setISDialogOpen(false);
  }

  // console.log(id);

  return (
    <Dialog.Root open={isDialogOpen}>
      <Dialog.Trigger asChild>hi</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>
            <p className={styles.heading}>Edit Employee Details</p>
          </Dialog.Title>
          <Dialog.Description
            className={styles.Description}
          ></Dialog.Description>
          <section className={styles.formContainer}>
            <div className={styles.formChildCon}>
              <label htmlFor="id">
                <span className={styles.texts}>Id:</span>
                <input
                  type="texts"
                  id="id"
                  name="id"
                  className={styles.inputFields}
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                />
              </label>
              <label htmlFor="fname">
                <span className={styles.texts}>Edit FirstName:</span>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className={styles.inputFields}
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </label>
              <label htmlFor="lname">
                <span className={styles.texts}>Edit LastName:</span>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className={styles.inputFields}
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </label>
              <label htmlFor="city">
                <span className={styles.texts}>Edit City:</span>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className={styles.inputFields}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
          </section>
          <section className={styles.btnsContainer}>
            <Dialog.Close>
              <span type="button" className={styles.leftBtn}>
                Cancel
              </span>
            </Dialog.Close>
            <button
              onClick={() => sendDataToTable()}
              type="button"
              className={styles.rightBtn}
            >
              Edit
            </button>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditEmployee;
