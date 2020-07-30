import styled from 'styled-components'

export const Light = styled.div`
cursor: pointer;
height: 78px;
width: 43px;
z-index:2;
position: absolute;
left:20px;
top:56px;
background-size: cover;
background-image: url(https://www.wdhhh.cn/img/lampoff.4ca4d48a.png);
:hover {
  height: 94px;
  width: 43px;
  background: url(https://www.wdhhh.cn/img/lampon.372e8604.png);
  background-size: cover;
}
`
export const Moon = styled.div`
background: url(https://www.wdhhh.cn/img/bg_moon.6d6a040d.png) no-repeat 35% 35%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 1;
z-index: 0;
-webkit-animation: moon-anim 30s linear infinite;
animation: moon-anim 30s linear infinite;
`