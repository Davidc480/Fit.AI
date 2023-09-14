'use client'

import { useState } from "react";

const FormNewsletter = ()=>{

const handleSubmit = (event)=>{
    event.preventDefault();
}

    return (
            <form onSubmit={handleSubmit}>
                <label for="Correo electronico"> Correo electronico</label>
                <input type="submit"></input>
            </form>
    )
}

export default FormNewsletter;