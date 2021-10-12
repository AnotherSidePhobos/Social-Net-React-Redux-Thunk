import React from 'react';
import Loading from '../../Loading/Loading';
import s from './ProfileInfo.module.css';
import Status from './../../Status/Status';


export const ProfileInfo = ({profileInfo, status, updateStatus}) => {
    if (!profileInfo) {
        return(
            <Loading/>
        )
    }else{
        return (

            <div className={s.profileInfo}>
                <div>
                    {profileInfo.fullName}
                </div>
                <div>
                    {
                        profileInfo.photos.large 
                        ? 
                        <img className={s.pic} src={profileInfo.photos.large} alt=''/>
                        :
                        <img className={s.pic} src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' alt=''/>
                    }
                </div>
                <div>
                    contacts: {profileInfo.contacts.vk}
                </div>
                <Status status={status} updateStatus={updateStatus}/>
            </div>
        )
    }
}
