import React from 'react'
import Burger from '../Components/Burger/Burger'
import Controller from '../Components/Burger/Controller'
import style from './burgerMaker.module.css'


const BurgerMaker = () => {

  return (
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
        <Controller />
      </div>
      <div className={style.burger_display}>
        <Burger />
      </div>
    </div>
  )
}

export default BurgerMaker