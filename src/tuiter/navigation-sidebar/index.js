import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const floatLeft = {
        "float": "left"
    }
 return (
   <div className="list-group">
     <a className="list-group-item"><i className="fab fa-twitter fa-2x"></i></a>
     <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-home"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Home
            </div>
        </div>
     </div>
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-hashtag"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Explore
            </div>
        </div>
     </div>
     </Link>
     <Link to="/" className="list-group-item">
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-flask"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Labs
            </div>
        </div>
     </div>
     </Link>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-bell"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Notifications
            </div>
        </div>
     </div>
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Messages
            </div>
        </div>
     </div>
     </a>         
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-bookmark"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Bookmarks
            </div>
        </div>
     </div>
     </a> 
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-list"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Lists
            </div>
        </div>
     </div>
     </a> 
     <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-hashtag"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                Profile
            </div>
        </div>
     </div>
     </Link>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
     <div className="grid">
        <div className="row">                    
            <div className="col col-md-1" style={floatLeft}>
                <i className="fa-solid fa-message"></i>
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style={floatLeft}>
                More
            </div>
        </div>
     </div>
     </a>
   </div>
 );
};
export default NavigationSidebar;