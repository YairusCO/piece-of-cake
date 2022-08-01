// import Lottie from 'lottie-react-web'
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close'
import cx from 'classnames'

import './Parrot.scss'
import { SIZES } from '../../util/window-sizes-threshold'
import MessageCarousel from '../MessageCarousel'

const Parrot = ({
  options,
  style,
  messages,
  displayMessage,
  closeMessage,
  onMouseOut,
  onMouseEnter,
  onClickHandler,
  wrapperStyle,
  enableEvents,
  screenSize,
  className,
}) => {
  return (
    <div className={cx(className)} style={wrapperStyle} data-testid='parrot'>
      {/* <Lottie className='parrot' {...options} /> */}
      {
        <div
          className={cx(
            { cursor: enableEvents },
            screenSize === SIZES.SMALL || screenSize === SIZES.MEDIUM
              ? 'hover-wrapper-small-screen'
              : 'hover-wrapper-large-screen',
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseOut}
          onClick={onClickHandler}
        ></div>
      }
      {displayMessage && messages?.length > 0 && (
        <div>
          <div
            className={cx(
              'message-bubble',
              screenSize === SIZES.SMALL || screenSize === SIZES.MEDIUM
                ? 'message-bubble-small-screen'
                : 'message-bubble-large-screen',
            )}
            style={style}
          >
            <Stack
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
              spacing={2}
            >
              <div onClick={closeMessage} className='close-icon'>
                <CloseIcon fontSize='small' />
              </div>
            </Stack>
            <div className='message-content-container'>
              <MessageCarousel
                messages={messages}
                defaultSelectedMessageIndex={0}
              ></MessageCarousel>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Parrot
