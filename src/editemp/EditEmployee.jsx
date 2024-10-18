import React from "react";
import styles from "./Style.module.css";
import * as Dialog from "@radix-ui/react-dialog";

const EditEmployee = ({ isDialogOpen, setISDialogOpen }) => {
  console.log(isDialogOpen);
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
                />
              </label>
              <label htmlFor="fname">
                <span className={styles.texts}>Edit FirstName:</span>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className={styles.inputFields}
                />
              </label>
              <label htmlFor="lname">
                <span className={styles.texts}>Edit LastName:</span>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className={styles.inputFields}
                />
              </label>
              <label htmlFor="city">
                <span className={styles.texts}>Edit City:</span>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className={styles.inputFields}
                />
              </label>
            </div>
          </section>
          <section className={styles.btnsContainer}>
            <Dialog.Close>
              <p type="button" className={styles.leftBtn}>
                Cancel
              </p>
            </Dialog.Close>
            <button
              onClick={() => setISDialogOpen(false)}
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
