import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile}
    from "../profile/profile-reducer";
import {Link} from "react-router-dom";
const profilePic = {
    width:'130px',
    height:'130px',
    padding:'10px',
    borderColor: 'black',
    borderWidth:'20px',
    float:'top'}
const EditProfileItem = () => {
    const todos
        = useSelector(state => state.profile);
    const [profileChange, setProfileChange] = useState(
        {
            name: todos.name,
            tuitNums: todos.tuitNums,
            handle:todos.handle,
            profilePicture: todos.profilePicture,
            bannerPicture: todos.bannerPicture,
            bio: todos.bio,
            website: todos.website,
            location: todos.location,
            dateOfBirth: todos.dateOfBirth,
            followersCount: todos.followersCount,
            dateJoined: todos.dateJoined,
            followingCount: todos.followingCount
        }
    );
    const dispatch = useDispatch();
    const todoChangeLastName = (event) => {
        const newName = event.target.value;
        const newProfile = {
            ...profileChange,
            name: newName
        };
        setProfileChange(newProfile);
    }
    const todoChangeBio = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            bio: name
        };
        setProfileChange(newProfile);
    }
    const todoChangeLocation = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            location: name
        };
        setProfileChange(newProfile);
    }
    const todoChangeDOB = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            dateOfBirth: name
        };
        setProfileChange(newProfile);
    }
    const todoChangeWebsite = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            website: name
        };
        setProfileChange(newProfile);
    }
    const assertChanges = (event) => {
        dispatch({type: 'change-profile', profileChange})
    }
    return(
        <>
            <div className="pos-relative" >
            <span className="text-start float-start " >
                <Link to="/tuiter/profile">
                     <i  className="fas fa-times me-3"></i>
                </Link>
                    <span >Edit Profile</span>
            </span>
                <span>
                <Link to="/tuiter/profile">
                    <button className="btn btn-primary-white rounded-pill float-end mt-3 " onClick={assertChanges}>
                        Save
                    </button>
                </Link>
            </span>
                <div className="row">
                    <img src={require(`../images/${todos.bannerPicture}`)} alt="spaceX"/>
                </div>
                <div className="row">
                    <img src={require(`../images/${todos.profilePicture}`)} alt="spaceX"/>
                </div>
            </div>
            <div className="row-2" style={{height:"23%"}}>
                <Link to="/tuiter/edit-profile">
                    <button className="btn btn-primary-black rounded-pill float-end mt-3 wd-button-border">
                        Edit Profile
                    </button>
                </Link>
            </div>
            <div className="pos-relative float-left mt-5" align="left" style={{margintop:"10px"}}>
                <h4>Name</h4>
                <input value={profileChange.name} onChange={todoChangeLastName} className="form-control"/>
                <br/>
                <h4>Bio</h4>
                <input value={profileChange.bio} onChange={todoChangeBio} className="form-control"/>
                <br/>
                <h4>Location</h4>
                <input value={profileChange.location} onChange={todoChangeLocation} className="form-control"/>

                <br/>
                <h4>Date of Birth</h4>
                <input value={profileChange.dateOfBirth} onChange={todoChangeDOB} className="form-control"/>

                <br/>
                <h4>Location</h4>
                <input value={profileChange.website} onChange={todoChangeWebsite} className="form-control"/>

                <div className="float-left mt-2 " align="left">
                    <span className="wd-text-gray"><i className="fas fa-map-marker-alt"></i></span>
                    <span className="ms-2 wd-text-gray">{todos.location}</span>
                    <span className="ms-5 wd-text-gray"><i className="fas fa-birthday-cake"></i> </span>
                    <span className="ms-2 wd-text-gray">{todos.dateOfBirth}</span>
                    <span className="ms-5 wd-text-gray"><i className="fas fa-calendar-alt"></i> </span>
                    <span className="ms-2 wd-text-gray">{todos.dateJoined}</span>

                </div>
                <div className="text-start mt-3">
                    <span >{todos.followingCount}</span>
                    <span className="ms-2 wd-text-gray">Following</span>
                    <span className="ms-5">{todos.followersCount}</span>
                    <span className="ms-2 wd-text-gray">Followers</span>
                </div>
            </div>
        </>
    );
}

export default EditProfileItem;