import React, {useState} from 'react';
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";

const actionCodeSettings = {
  url: 'http://localhost:3000/member',
  handleCodeInApp: true
}
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const auth = getAuth()
  const dispatch = useDispatch()

  const accountRef = React.createRef()
  const passwordRef = React.createRef()
  const passwordConfirmRef = React.createRef()

  const signUpHandler = () => {
    if (isSignUp && passwordConfirmRef.current.value === passwordRef.current.value) {
      dispatch({
        type: 'userSignUp',
        payload: {
          account: `s${accountRef.current.value}@gm.ntpu.edu.tw`,
          password: passwordRef.current.value
        }
      })
    }
  }

  const signInHandler = () => {
    dispatch({
      type: 'userLogin',
      payload: {
        account: `s${accountRef.current.value}@gm.ntpu.edu.tw`,
        password: passwordRef.current.value
      }
    })
  }

  if (localStorage.user) {
    return (
        <Navigate to={'/'} />
    )

  } else {
    return (
        <div className={'w-full h-screen flex justify-center items-center'}>
          <div className={'h-2/3 flex flex-col justify-center items-center space-y-2'}>
            <TextInput dataName={'Student ID'} dataType={'text'} dataRef={accountRef} />
            <TextInput dataName={'Password'} dataType={'password'} dataRef={passwordRef} />
            {
                isSignUp && <TextInput dataName={'Password Confirm'} dataType={'password'} dataRef={passwordConfirmRef} />
            }
            <div className={'flex w-full justify-around'}>
              {
                isSignUp ?
                    <Button btnText={'登入'} clickHandler={() => setIsSignUp(false)} />
                    :
                    <Button btnText={'登入'} clickHandler={signInHandler} />
              }

              {
                !isSignUp ?
                    <Button btnText={'註冊'} clickHandler={() => setIsSignUp(true)}/>
                    :
                    <Button btnText={'註冊'} clickHandler={signUpHandler}/>
              }

            </div>
          </div>
        </div>
    );
  }

};

export default Login;
