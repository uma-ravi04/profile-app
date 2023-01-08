import { useContext } from 'react';
import {UserContext} from '../store/ContextProvider';
import { Button, Avatar } from '@mui/material';
import { ArrowDropDown, Add } from '@mui/icons-material';
import _ from 'lodash';

const ProfilePreview = () => {
 const {user} = useContext(UserContext);

  return (
    <div className='profile-view'>
      <div className="profile-pic">
        <Button size="medium" variant='contained' color="error" startIcon={<Add />}>Add Project</Button>
        <span className="select">
          <img src="pic.png" alt="user" className={"img-src spacing"} />
          <span className="spacing">
            <strong>{_.get(user,"displayName","")}</strong>
            <br />
            <span className="text">Project Manager</span>
          </span>
          <ArrowDropDown />
        </span>
      </div>
      <div style={{ background: "rgb(237 233 233)", flex: '1 1 auto' }}>
        <Avatar variant="square">
        {_.capitalize(_.get(user,"displayName","X")[0])}
        </Avatar>
        <div className="spacing align-text">
          <strong>{_.get(user,"displayName","")}</strong>
          <br />
          <span className="text">{_.get(user,"phoneNumber","")}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfilePreview;