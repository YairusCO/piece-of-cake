import React from 'react'
import Parrot from '../Parrot'
// import Carousel from 'react-material-ui-carousel'
import { Button, Grid } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
// import { INTRO_ANIMATION_LIST } from './Constans'
// import { PARROT_INTRO_STATES } from '../../../store/AnimationStore/constants/States'

const Intro = ({
  t,
  // beforeMovingToNextStep,
  // animationState,
  // clickAnimationIntroCarousel,
  // introAnimAutoPlay,
  // introAnimInterval,
}) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className='wizard-intro'
      data-testid='Intro'
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: '18px' }}>
        <div className='title'>{t('add.add-a-new-bake')}</div>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{ mb: '18px', minHeight: 250 }}
      >
        {/* <Parrot className='parrot-intro' /> */}
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{ mb: '18px', minHeight: '200px' }}
        className='carousela'
      >
        {/* {PARROT_INTRO_STATES[animationState] && (
          <Carousel
            changeOnFirstRender={false}
            navButtonsAlwaysInvisible={true}
            indicatorContainerProps={{
              className: 'indicator-container',
            }}
            indicatorIconButtonProps={{
              className: 'icon-button-warp',
            }}
            activeIndicatorIconButtonProps={{
              className: 'active-icon-button-warp',
              style: {
                backgroundColor: '#18C19B',
                color: '#18C19B',
              },
            }}
            onChange={(now, previous) =>
              clickAnimationIntroCarousel(now, previous)
            }
            interval={introAnimInterval}
            autoPlay={introAnimAutoPlay}
            IndicatorIcon={<CircleIcon className='circle-icon' />}
          >
            {INTRO_ANIMATION_LIST?.map((item, i) => (
              <Grid sx={{ mb: '15px' }} key={i}>
                <Grid className='subtitle' sx={{ mb: '10px' }}>
                  {t(item.subtitle)}
                </Grid>
                <Grid className='text'>{t(item.description)}</Grid>
              </Grid>
            ))}
          </Carousel>
        )} */}
      </Grid>
      <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
        <Button
          text={t('pricing-wizard.lets-go')}
          // handleClick={beforeMovingToNextStep}
        />
      </Grid>
    </Grid>
  )
}

export default Intro
