import React from 'react'
import { ReactComponent as Bake } from '../../assets/bake.svg'
import { ReactComponent as Cake } from '../../assets/cake.svg'
const Home = () => {
  return (
    <div className='home' data-testid='Home'>
        <div className='hey-user'>hey baker</div>
      <div className='welcome-to'>welcome back</div>
      <div className='cards-warp'>
        <div
          className='insurer-card'
          
          // onClick={() => route(PRICING_WIZARD)}
        >
          <div className='insurer-card-icon'>
            <Bake/>
            {/* {isQuoteHover ? <NewQuoteHoverIcon /> : <NewQuoteIcon />} */}
          </div>
          <div className='insurer-card-title'>get a new cake</div>
          <div className='insurer-card-text quote-text'>
            get an cake
          </div>
        </div>
        <div
          className='insurer-card'
          // onMouseEnter={toggleDealsIcon}
          // onMouseLeave={toggleDealsIcon}
          // onClick={() => route(MY_DEALS)}
        >
          <div className='insurer-card-icon my-deals'>
          <Cake/>

            {/* {isDealsHover ? <MyDealsHoverIcon /> : <MyDealsIcon />} */}
          </div>
          <div className='insurer-card-title'>my cake</div>
          <div className='insurer-card-text my-deals-text'>
            follow the cake
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Home
