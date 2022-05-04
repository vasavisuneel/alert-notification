import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdInfo, MdWarning} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="heading"> Alert Notifications</h1>

    <Notification>
      <div className="notifications-list">
        <div className="notification-text">
          <AiFillCheckCircle className="tick-icon" />
          <h1 className="notification-heading success">Success</h1>
        </div>
        <p className="notification-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>

    <Notification>
      <div className="notifications-list">
        <div className="notification-text">
          <RiErrorWarningFill className="error-icon" />

          <h1 className="notification-heading error ">Error</h1>
        </div>
        <p className="notification-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>

    <Notification>
      <div className="notifications-list">
        <div className="notification-text">
          <MdWarning className="warning-icon" />
          <h1 className="notification-heading warning">Warning</h1>
        </div>
        <p className="notification-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <div className="notifications-list">
        <div className="notification-text">
          <MdInfo className="info-icon" />
          <h1 className="notification-heading info">info</h1>
        </div>
        <p className="notification-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
