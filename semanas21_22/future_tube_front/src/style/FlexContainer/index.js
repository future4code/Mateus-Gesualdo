import styled from 'styled-components'
import loginBG from '../../images/login_bg.png'
import homeBG from '../../images/home_bg.png'

export const FlexContainer = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${loginBG});
`