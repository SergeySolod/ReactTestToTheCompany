import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../components/formsControl/formControl";
import {required, maxLengthCreator} from '../../components/validators/validators'

const  maxLength30 = maxLengthCreator(30);

const AddRow = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputId">Введите id</label>
                <Field placeholder={'Id'} name={'id'} validate={[required, maxLength30]} component={Input}
                       className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputFirstName">Введите имя</label>
                <Field placeholder={'Имя'} name={'firstName'} validate={[required, maxLength30]} component={Input}
                       className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputLastName">Введите фамилию</label>
                <Field placeholder={'Фамилия'} name={'lastName'} validate={[required, maxLength30]} component={Input}
                       className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Введите email</label>
                <Field placeholder={'Email'} name={'email'} validate={[required, maxLength30]} component={Input}
                       className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPhone">Введите телефон</label>
                <Field placeholder={'Телефон'} name={'phone'} validate={[required, maxLength30]} component={Input}
                       className="form-control"/>
            </div>
            <button className="btn btn-primary">Добавить в таблицу</button>
        </form>
    )
}

const AddRowReduxForm = reduxForm({form: 'addNewTask'})(AddRow)

export default AddRowReduxForm