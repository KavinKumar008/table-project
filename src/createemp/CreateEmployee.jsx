import React, { useState } from "react";
import styles from "./Style.module.css";
import * as Dialog from "@radix-ui/react-dialog";

const CreateEmployee = ({
  isCreateDialogOpen,
  setIsCreateDialogOpen,
  createEmpData,
  storedData,
}) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [city, setCity] = useState("");
  let newId = storedData.length;

  function empTableToOpen() {
    setIsCreateDialogOpen(false);
    createEmpData(fname, lname, city, newId + 1);
    setFname("");
    setLname("");
    setCity("");
  }

  return (
    <Dialog.Root open={isCreateDialogOpen}>
      <Dialog.Trigger asChild>hi</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>
            <p className={styles.heading}>Add an Employee</p>
          </Dialog.Title>
          <Dialog.Description
            className={styles.Description}
          ></Dialog.Description>
          <section className={styles.formContainer}>
            <div className={styles.formChildCon}>
              <label htmlFor="fname">
                <span className={styles.texts}>First Name:</span>
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
                <span className={styles.texts}>Last Name:</span>
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
                <span className={styles.texts}>City:</span>
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
              <span
                type="button"
                className={styles.leftBtn}
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Cancel
              </span>
            </Dialog.Close>
            <button
              type="button"
              className={styles.rightBtn}
              onClick={() => empTableToOpen()}
            >
              Add
            </button>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateEmployee;
