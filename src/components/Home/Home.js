import React from 'react'
import  bake  from '../../assets/bake.jpg'
import  cake  from '../../assets/cake.jpg'
import {SELECT_INGREDIENT } from '../../util/routes'
import history from '../../services/history'
import { Link } from 'react-router-dom'

const Home = ({t}) => {
  const route = (path) => {
    history.push(path)
  }
  return (
    <div className='home' data-testid='Home'>
        <div className='hey-user'>{t('home.hey-baker')}</div>
      <div className='welcome-to'>welcome back</div>
      <div className='cards-warp'>
        <Link
          className='insurer-card'
          to={SELECT_INGREDIENT}
          // onClick={() => route(SELECT_INGREDIENT)}
        >
          <div className='insurer-card-icon'>
          <img className="fit-picture"
     src={bake} alt=''/>
           
          </div>
          <div className='insurer-card-title'>Add a new bake</div>
          {/* <div className='insurer-card-text quote-text'>
            get an cake
          </div> */}
        </Link>
        <div
          className='insurer-card'
         
        >
          <div className='insurer-card-icon my-deals'>
          <img className="fit-picture"
     src={cake} alt=''/>

           
          </div>
          <div className='insurer-card-title'>My bakes</div>
          {/* <div className='insurer-card-text my-deals-text'>
            follow the cake
          </div> */}
        </div>
      </div>
    
    </div>
  )
}

export default Home
