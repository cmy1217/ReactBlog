import styled from 'styled-components'
export const LoginWrapper = styled.div`
z-index: 0;
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 56px;
margin: 60px auto 0;
padding: 50px 50px 30px;
background: #eee;
`
export const LoginA = styled.a`
font-weight: 700;
color: #ea6f5a;
margin: 0 auto;
display: block;
width: 46px;
text-align: center;
border-bottom: 2px solid #ea6f5a;
line-height: 50px;
margin-bottom: 50px;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 400px;
  margin: 50px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`
export const Input = styled.input`
 width: 200px;
 height: 30px;
 line-height: 30px;
 left: 50%;
 display:block;
 transform: translateX(50%);
 color: #777;
 margin-bottom: 0;
 padding: 4px 12px 4px 35px;
 border: 1px solid #c8c8c8;
 border-radius: 4px;
 background-color: hsla(0,0%,71%,.1);

`
export const Button = styled.div`
width: 220px;
height: 30px;
line-height: 30px;
color: #fff;
background: #3194d0;
border-radius: 15px;
margin: 30px auto;
text-align: center;
`
