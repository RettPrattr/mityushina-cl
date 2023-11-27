import React from 'react';

import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Formik, Field, Form } from "formik";

import { IoCloseOutline } from "react-icons/io5";

function Backdrop({ children, onClick }) {
    return (
      <motion.div
        className="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    )
  }

function Popup({ handleClose, text }) {

    return (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal blue-gradient"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className='close-icon' onClick={handleClose}><IoCloseOutline size="40px"/></div>
            <p>Это окошко красивое и тут будет форма</p>
            <Formik
                initialValues={{ client_name: "", phone_number: "" }}
                onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                <Field 
                  name="client_name" 
                  type="text" 
                  placeholder="Имя"
                />
                <Field 
                  name="phone_number" 
                  type="text" 
                  placeholder="Телефон"
                />
                <button type="submit" className='button black'>Submit</button>
                </Form>
            </Formik>
            
          </motion.div>
        </Backdrop>
      );
}

export default Popup