import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../contex/Auth';
import Header from '../../header/Header';


const LoginCard = styled.div`
background: #FFFFFF;
text-align: center;
`;
const LoginDiv = styled.div`
Width:316px;
Height:250px;
margin-top:205px;
margin-left:500px;
`;
const Row = styled.div`
display:flex;
flex-direction: column;
`;
const Title = styled.h2`
font-family: Roboto;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: center;
color: rgba(0, 0, 0, 0.87);
`;

const Button =styled.button`
display:block;
margin:20px 0;
margin-left:auto;
margin-right:auto;
`
function Registrition() {

    const [, setToken] = useContext(Context);
    const usenameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleLogin = (evt) => {
        evt.preventDefault();
        const data = {
            username: usenameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,

        };
        console.log(data);
        fetch(`https://top-link-app.herokuapp.com/api/docs//api/auth/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setToken(data.token);
                    console.log(data.setToken)

                }
                else alert(data.message)
                // else  alert("Client Error")
            });
    };

    return (
        <div className="">
            <LoginCard>
                <Header/>
                <LoginDiv>
                    <Row>
                        <Title>Ro'yhatdan o'tish</Title>
                        <form onSubmit={handleLogin} >
                            <input
                                defaultValue="Watmore"
                                type='text'
                                placeholder='Foydalanuvchi nomi'
                                ref={usenameRef}
                                required />
                            <input
                                className='input'
                                defaultValue='jason@example.com'
                                placeholder='Electron pochta'
                                ref={emailRef}
                                required
                            />
                            <input
                                defaultValue='pass123'
                                className='input'
                                type="password"
                                placeholder='Password'
                                ref={passwordRef}
                                required />



                            <Button id='btn'
                                className='button'
                                type="submit"  > Ro'yhatdan o'tish
                            </Button>
                          
                        </form>
                   
                    </Row>
                </LoginDiv>
            </LoginCard>
         

        </div>
    );
}

export default Registrition;
