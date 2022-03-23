import React, {useState} from 'react';
import style from './form.module.css'
const Form = () => {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    
    const [user, setUser] = useState({name:'', emai:'', password:''})
    const {name, email, password} = user;

    // const handleNameChange = (e) => {
    //     // console.log(e.target.value);
    //     setUser({name: e.target.value, email, password})
    // }

    // const handleEmailChange = (e) => {
    //     // console.log(e.target.value);
    //     setUser({name, email: e.target.value, password})
    // }
    
    // const handlePasswordChange = (e) => {
    //     // console.log(e.target.value);
    //     setUser({name, email, password: e.target.value})
    // }
    const handleChange = (e) => {

        const fileName = e.target.id;

        // const name = e.target.name;
        // const email = e.target.email;
        // const password = e.target.password;

        if(fileName === 'name') {
            setUser({name: e.target.value, email, password});
        }

        if(fileName === 'email') {
            setUser({name, email: e.target.value, password});
        }

        if(fileName === 'password') {
            setUser({name, email, password: e.target.value});
        }
    }
    const handleSubmit = (e) => {
        console.log("Form is submitted");
        let userInfo = {
            name: name,
            email: email,
            password: password
        }
        console.log(userInfo)
        e.preventDefault(); 
    }
    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name </label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={name} required></input>
                </div>
                
                <div  className={style.formGroup}>    
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={email} required ></input>
                </div>


                <div className={style.formGroup}>    
                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={password} required ></input>
                </div >

                <div className={style.formGroup}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
