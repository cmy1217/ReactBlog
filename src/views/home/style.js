import styled from 'styled-components'

export const HomeAuther = styled.div`
height: 22px;
width:60px;
float: left;
img{
width: 22px;
height: 22px;
border-radius: 50%;s
vertical-align:middle
}
span{
  font-size: 12px;
  display: inline-block;
  line-height: 22px;
  width: 30px;
  margin-left: 4px;
}
`

export const RecomIce = styled.div`
border:1px solid #dcdcdc;
border-radius:3px;
background: #fff;
`
export const RecomItem = styled.div`
background: #fff;
border-bottom: 0.5px solid #dcdcdc;

.right{
  float:right;
  margin: 4px 5px!important;
}


span{
  line-height: 40px;
  font-size: 12px;
  font-weight: 400;
  padding-left: 20px;
  
}
`



export const BackTop = styled.div`
position: fixed;
right: 100px;
bottom: 100px;
width: 60px;
height: 60px;
line-height: 60px;
text-align: center;
border: 1px solid #ccc;
border-radius: 50%;
cursor: pointer;
font-size: 14px;
.iconfont{
  font-size:30px;
}
`