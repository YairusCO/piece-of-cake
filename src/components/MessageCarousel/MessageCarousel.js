import { useState } from 'react'
import Stack from '@mui/material/Stack'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined'

import './MessageCarousel.scss'

const MessageCarousel = ({ messages, defaultSelectedMessageIndex, t }) => {
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(
    defaultSelectedMessageIndex,
  )

  const getIconComponent = (index) => {
    return selectedMessageIndex === index ? (
      <FiberManualRecordIcon fontSize='small' />
    ) : (
      <FiberManualRecordOutlinedIcon fontSize='small' />
    )
  }

  return (
    <div data-testid='messageCarousel'>
      {messages?.length > 1 && (
        <div>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={2}
          >
            {messages?.map((message, index) => (
              <div
                key={index}
                className='message-icon'
                onClick={() => {
                  setSelectedMessageIndex(index)
                }}
              >
                {getIconComponent(index)}
              </div>
            ))}
          </Stack>
        </div>
      )}
      <div
        style={{ marginTop: '5px', marginLeft: '5px' }}
        dangerouslySetInnerHTML={{
          __html: t(messages && messages[selectedMessageIndex]),
        }}
      ></div>
    </div>
  )
}

export default MessageCarousel
