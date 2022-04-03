import { useState } from "react";
import axios from "axios";


const LoginForm = ()=> {

   const [username, setUsername] = useState('');
   const [password, setpassword] = useState('');
   const [error, setError] = useState('');
  
  //authentification
   const handleSubmit = (e) => {
     e.preventDefault();
     const auth ={'project-ID':"6ca81b28-91fa-48a1-9697-3224c511db42",'User-name':username, 'User-Secret':password};
try {
    axios.get('https://api.chatengine.io/chats',{headers: auth});
    localStorage.setItem('username',username);
    localStorage.setItem('password',password);
    window.location.reload();

}catch(error){
    console.log("error");
    setError('invalide...')
}

   }
   return (
       <div className="wrapper">
           <div className="form">
               <h1 className="title">Chat application :)</h1>
               <form onSubmit={handleSubmit}>
                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required
                   />
                   <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder="password" required
                   />
                   <div align="center"> 
                   <button type="submit" className="button">
                       <span>Start chatting</span>
                   </button>

                   </div>
                   <h2 className="error">{error}</h2>
               </form>
           </div>
       </div>
   )


};


export default LoginForm;