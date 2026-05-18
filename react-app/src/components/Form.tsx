import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form"

interface FormData{
    name:string;
    age:number;
}

function Form() {


    const { register, handleSubmit, formState: { errors }  } = useForm<FormData>();
    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="forml-label">Name</label>
                <input {...register('name', { required: true, minLength: 5 })} id="name" type="text" className="form-control" />
                {errors.name?.type === 'required' && <p class: text-danger>The name field is to short</p>}
                {errors.age?.type === 'minLength' && <p>The name must be at least 5 characters long</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age')} id="age" type="number" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>

        </form>
    )
}

export default Form