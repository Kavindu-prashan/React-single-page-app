import React, {useEffect, useState } from "react";
import NameListItem from "./NameListItem";


function NameList(){

    const[loadData, setLoadData] = useState(new Date());
    const[nameList, setNameList] = useState([ {
        id:1,
        name: {title: "Miss",first: "Jennie",last: "Nichols"},
        location: {city: "Billings"},
        email: "jennie.nichols@example.com",
        dob: {date: "1992-03-08T15:13:16.688Z",age: 30},
        picture: {medium: "https://randomuser.me/api/portraits/med/men/75.jpg"},
    },
    {
        id:2,
        name: {title: "Miss",first: "Steve",last: "Ford"},
        location: {city: "Denver"},
        email: "steve.ford@example.com",
        dob: {date: "2008-05-20T17:35:09.798Z","age":14},
        picture: {medium: "https://randomuser.me/api/portraits/med/men/67.jpg"},
    },
    {
        id:3,
        name: {title: "Miss",first: "Anaisha",last: "Shenoy"},
        location: {city: "Silchar"},
        email: "anaisha.shenoy@example.com",
        dob: {date: "1948-03-27T15:13:05.275Z","age":75},
        picture: {medium: "https://randomuser.me/api/portraits/med/women/40.jpg"},
    },
    
]);

    useEffect(() => {
        fetch("https://randomuser.me/api")
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            setNameList((nameList) => [...nameList,responseData.results[0]]);
        });
    },[loadData]);


    const nameListComponent = () =>{
        
            return(
                nameList.map(aName=> {
                    return( 
                        <NameListItem 
                        key={aName.id}
                        name={`${aName.name.first} ${aName.name.last}`}
                        city={aName.location.city}
                        email ={aName.email}
                        birthday ={aName.dob.date}
                        avatar={aName.picture.medium}
                        /> 
                    );
                }) 
            )
   
    };

    const addUserHandler = () => {
        setLoadData(new Date());
    };
    

    return(
        <React.Fragment>
            <div className="container mt-4">
                <button  class="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
                <ul className="list-group">{nameListComponent()}</ul>
            </div>
            
        </React.Fragment>
    );
};
export default NameList;