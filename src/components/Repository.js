import React from 'react'
import '../css/Repository.css';
import DrillDown from "./DrillDown";
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Typography from "@mui/material/Typography"
import moment from "moment/moment";

const Repos=({getItem})=>{
    return (<div className="container">
            <div className='img-container'>
              <img src={getItem.owner.avatar_url}
                alt='avatar' />
            </div>
            <div className="userDetails">
              <p className="userName">{getItem.name}</p>
              <p className="userDiscription">{getItem.description}</p>
              <div className="inner-container">
                <div className="star">
                  <div className="starIcon"><StarOutlineIcon fontSize="small" /></div>
                  <div className="starNo"> Star {getItem.stargazers_count}</div>
                </div>
                <div className="star">
                <div className="starIcon"><ModeStandbyIcon fontSize="small" /></div>
                  <div className="starNo"> Issues {getItem.open_issues}</div>
                </div>
                <div className="lastUpdate">
                  <Typography
                  color='black'
                  inline>
                  Pushed at { moment(getItem.created_at).format('DD-MM-YY') } by { getItem.owner.login }
                </Typography>
                </div>
              </div>
            </div>
            <div className="drillDown">
             <DrillDown setUser={getItem}/>
            </div>
          

            
            </div>
        )
}


export default Repos;
