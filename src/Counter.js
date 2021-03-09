import React from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';

const Counter = ({c, handleDel, handleInc}) => {

    return(
        <div id={c.id} style={{display: 'flex', backgroundColor: 'lightgray'}} >
            <div style={{fontSize: '36px', marginRight: '5px'}}>{c.v}</div>
            <div style={{marginRight: '5px'}}>
                <Formik
                    initialValues={{int: 0}}
                    onSubmit={(values, { resetForm }) => {
                        handleInc(c.id, values.int)
                    }}
                    onResetting={({ resetForm }) => {
                        resetForm({});
                    }}
                    >
                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <Field type="number" name="int" min="-10" max = "10"/>
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                            <button style={{width:'64px'}} type="submit">
                                Add
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <button onClick={function (e) {handleDel(c)}}>Delete</button>
        </div>
    )
}

export default Counter;
