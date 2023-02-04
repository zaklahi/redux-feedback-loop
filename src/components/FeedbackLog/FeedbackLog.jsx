import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityItem from './ActivityItem.jsx';

function ActivityLog() {
    let [FeedbackList, setFeedbackList] = useState([]);

    // On Load, fetch activity data from the server
    useEffect(() => {
        console.log('in useEffect')
        getActivities();
    }, []);

    const getActivities = () => {
        axios({
            method: 'GET',
            url: '/activity'
        }).then((response) => {
            setActivityList(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    };

    return (
        <div>
            {
                activityList.map(item => (
                    <ActivityItem key={item.id} activity={item} />
                ))
            }
        </div>
    );
    
}

export default ActivityLog;