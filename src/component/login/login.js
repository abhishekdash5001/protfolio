import React, { Component } from 'react';
import '../login/login.scss';
import log from '../../logs'
import Url from '../../URLS/url';
import * as middleLayer from '../../httpCalls/middle-layer';
import LandingPage from '../landingPage/landningPage'

import storage from "../../fireBase/index";
import {Animated} from "react-animated-css";
 



class Login extends React.Component {
    userList = [];
    constructor(props) {
        super(props);
        this.state = {
            userset: false,
            showLoginPage: false,
            userName: '',
            userPassword: '',
            userClicked: '',
            image:''
        }
        this.userClicked = this.userClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
      //  this.uploadImageTwo = this.uploadImageTwo.bind(this);
    }

  /**
   * 
   * @param {Object} user when user clicks on any of the user icon on the first page 
   */
    async userClicked(user) {
       // log.set(user,'userProfile');  
      await  this.fetchUserprofilePic(user.image);    
        this.setState({
            showLoginPage: true,
            userSet: false,
            userClicked: user.name,
            userId:user.id,
        });
       
    }

    /**
     * 
     * @param {*} e 
     * decription uploadtask.on('state_changed',progress,error,complete) three functions are there and it has 
     * one call back function state_changed
     */
     uploadImage(e){
     console.log(e.target.files[0])
     const image  = e.target.files[0];
     this.setState(()=>({image}));
    }

    // uploadImageTwo(){
    //     const {image} = this.state;
    //     debugger;
    //     let a = storage
    //     console.log(a)
    //     var storageRef = a.storage().ref();
    //     const uploadtask =    storageRef.child(`profilePic/${this.state.image.name}`).put(image);
    // //     const uploadtask =storage.ref(`profilePic/${this.state.image.name}`).put(this.state.image);
    // uploadtask.on('state_changed',(snapshot)=>{
    //   // one argumnaent function
    //  },(error)=>{
    //        // one argumnaent function
    //      console.log(error); 
    //  },()=>{
    //        // no argumnaent function

    //        uploadtask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //         console.log('File available at', downloadURL);
    //       });
           
    //  })
    // }
    async handleChange(property, event) {
        await this.setState({
            [property]: event.target.value
        });
        
    }
    loginUser() {
     let url = `Url.subUrl.login${this.state.userId}/${this.state.userName}/${this.state.userPassword}`;
      middleLayer.getDataFromMokable(url)
      .then(res=>res.json())

      .then(res=>{
               console.log(res)
      },rejects=>{
          console.log(rejects)
      })
    }

    async componentDidMount() {
        let response = await middleLayer.getData(Url.subUrl.userList);
        let resJson = await response.json();
        this.userList = resJson.data;
        this.setState({
            userSet: true,
            showLoginPage: false,
        });
       

    }

  async  fetchUserprofilePic(image){
        let fireBase = storage;
        let fetchSrc  = fireBase.storage();
        let pathReference = fetchSrc.ref(image);;
        this.profilePic  =   await pathReference.getDownloadURL();
    }


    render() {

        return (
            <div>
        <LandingPage></LandingPage>
                
                {this.state.userSet && this.userList.map((user) => (
                    <UserDiv key={user.id} user={user} parent={this}></UserDiv>

                ))}
                {this.state.showLoginPage &&
                    <LoginPage parent={this}></LoginPage>

                }
            </div>


        )




    }
}

function UserDiv(props) {
    let user = props.user;
    let this_ = props.parent;
    return <div onClick={this_.userClicked.bind(this_, user)} key={user.name + user.id} className={user.class + " users"} id={user.id}>{user.name}</div>
}


function LoginPage(prop) {
    let this_parent = prop.parent
    return (
        <div className="limiter">
            <div className="container-login100" >
                <div className="wrap-login100 p-t-100 p-b-30">
                   
                        <div className="login100-form-avatar">
                            <img id="userProfilePic" src={this_parent.profilePic} alt="AVATAR" />
                        </div>
                        <span className="login100-form-title p-t-20 p-b-45">
                            Hi...	  {this_parent.state.userClicked}
                        </span>
                        <div className="wrap-input100 validate-input m-b-10" data-validate="Username is required">
                            <input className="input100" type="text" value={this_parent.state.userName} onChange={this_parent.handleChange.bind(this_parent, 'userName')} name="username" placeholder="Username" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-10" data-validate="Password is required">
                            <input className="input100" type="password" value={this_parent.state.userPassword} onChange={this_parent.handleChange.bind(this_parent, 'userPassword')} name="pass" placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <div className="container-login100-form-btn p-t-10">
                            <button onClick={this_parent.loginUser.bind(this_parent)} className="login100-form-btn">
                                Login
						</button>
                        </div>

                        <div className="text-center w-full p-t-25">
                            <a className="txt1">
                                Forgot Username / Password?
						</a>
                        </div>
                        <div className="text-center w-full">
                            <a className="txt1">
                                Create new account
							<i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                 
                </div>
            </div>

        </div>
    )
}
export default Login;

