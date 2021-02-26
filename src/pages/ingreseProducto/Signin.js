import React from 'react'
import LoginSignin from './LoginSignin'
import {
  validateExistence,
  validateEmail,
  validateLength,
  validateLowerCase,
  validateUpperCase
} from './utils/validation'


const INPUT_CONFIG = [
  {
    title: "Nombre",
    name: "title",
    descripcion: "Chompita"

  },
  {
    title: "Descripcion",
    name: "description",
    descripcion: "Abrigadora"
  },
  {
    title: "Link de la imagen",
    name: "imagePath",
    descripcion: ""
  },
  {
    title: "Tallas",
    name: "size",
    descripcion: "L,M, otros"
  },
  {
    title: "Precio",
    name: "price",
    descripcion: "5.00"
  },
  {
    title: "Color",
    name: "color",
    descripcion: ""
  },
  {
    title: "Cantidad",
    name: "quantity",
    descripcion: "20"
  },
  {
    title: "Department",
    name: "department",
    descripcion: "Varones, Mujeres, Niños"
  },
  {
    title: "Categoria",
    name: "category",
    descripcion: "Uhmmm"
  },  
]


export default function Registro({registro,registro_loading,registro_error}) {
  return (
    <div>
      <LoginSignin
      INPUT_CONFIG={INPUT_CONFIG}
      title="Registrar Producto"
      footer_text="Asegurese de ingresar de manera correcta los datos de su producto"
      footer_redirect="Iniciar Sesion"
      submitAction={registro}
      loading={registro_loading}
      signin_error={registro_error}
      />
    </div>
  )
}



