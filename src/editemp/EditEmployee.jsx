import React, { useState } from "react";
import styles from "./Style.module.css";
import * as Dialog from "@radix-ui/react-dialog";

const EditEmployee = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  storedData,
  setStoredData,
  editableData,
  setEditableData,
}) => {
  const [fname, setFname] = useState(editableData.first_name);
  const [lname, setLname] = useState(editableData.last_name);
  const [city, setCity] = useState(editableData.city);

  function sendDataToTable() {
    //map function use pannalam....think
    setStoredData(
      storedData.map((item) => {
        if (item.id === editableData.id) {
          return { ...item, first_name: fname, last_name: lname, city };
        }
        return item;
      })
    );
    setIsEditDialogOpen(false);
  }

  return (
    <Dialog.Root open={isEditDialogOpen}>
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
                  value={editableData.id || ""}
                  readOnly
                />
              </label>
              <label htmlFor="fname">
                <span className={styles.texts}>Edit FirstName:</span>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className={styles.inputFields}
                  value={fname || ""}
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
                  value={lname || ""}
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
                  value={city || ""}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
          </section>
          <section className={styles.btnsContainer}>
            <Dialog.Close>
              <span
                onClick={() => setIsEditDialogOpen(false)}
                type="button"
                className={styles.leftBtn}
              >
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
