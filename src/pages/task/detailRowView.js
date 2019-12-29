import React from 'react'

const DetailRowView = (props) => {
    return (
        <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Выбран пользователь <b>{props.person.firstName + ' ' + props.person.lastName}</b></h1>
                                       <p className="lead">
                        Описание: <br/>
                        <textarea defaultValue={props.person.description}/></p>
                    <p className="lead"> Адрес проживания: <b>{props.person.address.streetAddress}</b></p>
                    <p className="lead"> Город: <b>{props.person.address.city}</b></p>
                    <p className="lead"> Провинция/штат: <b>{props.person.address.state}</b></p>
                    <p className="lead"> Индекс: <b>{props.person.address.zip}</b></p>


                </div>
            </div>
    )
}

export default DetailRowView