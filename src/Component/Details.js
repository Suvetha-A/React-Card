import React ,{useState} from "react";


const Details=()=>{

    const [currentUser, setCurrentUser] = useState([])
    const [usersData, setUsersData] = useState([
    {
        name: "",
        email: "",
        contact: "",
        url:"",
    }
    ])

    function Changehandle(e) {
        setUsersData({...usersData,[e.target.name]:e.target.value})
    }

    let Name=usersData.name;
    let Email=usersData.email;
    let Contact=usersData.contact;
    let URL=usersData.url;

    function HandleNew(e) {
        e.preventDefault();
        setCurrentUser([...currentUser,{Name,Email,Contact,URL}])
        setUsersData({name:"",email:"",contact:"",url:""})
    }

    
    const Handledelete=(i)=>{
        var setCurrentUser1=currentUser;
        setCurrentUser1.splice(i,1)
        setCurrentUser([...setCurrentUser1])

    }

    
    return(
        <div className="Wrapper">
            <h1>Card Creator</h1>
            <form>
                
                <label>Please Enter Your Name</label><br/>
                <input type="text" name="name" value={Name} onChange={Changehandle} ></input><br/>
                <label>Please Enter Your Email</label><br/>
                <input type="email" name="email" value={Email} onChange={Changehandle} ></input><br/>
                <label>Please Enter Your Contact Number</label><br/>
                <input type="tel" name="contact" value={Contact} onChange={Changehandle} ></input><br/>
                <label>Pate your profile picture URL</label><br/>
                <input type="url" name="url" value={URL} onChange={Changehandle} ></input><br/>
                <button onClick={HandleNew}>Create Card</button>
                                
            </form>

            
            {
                currentUser.map((info,ind)=>{
                    return(
                        <div className="Card">
                            <div className="Header">
                                <div key={ind}>

                                    <div className="Img">
                                        <img src={info.URL} alt="new"/>
                                    </div>

                                    <p>Name:{info.Name}</p>
                                    <p>Email:{info.Email}</p>
                                    <p>Contact:{info.Contact}</p>

                                </div>
                                <button onClick={() => Handledelete(ind)} >Delete</button>
                            </div>
                
                        </div>   
                    )
                }
                )
            }
        </div>
        )
    }
export default Details