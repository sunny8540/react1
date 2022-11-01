import React from "react";
import List from './List';
import './index.css'

function ListHead(){
    return(
        <>
        <p3>Most popular netflix series</p3>
          <div className="main1">
          <div className="one">
           <List 
                imgs="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdm5qOAFPNr_LeOAVNw9wctCh6eDUYryyICPxBZzgRclfwDHYWTEbH77sTHLr0BgZnaS4uvnSyYkUrsozz1PGR9tbkz9nLnAg5cLwhWSo272UeXu8O2xfBIrEYdj4pJpIiFgeYhjKqpCuZuRQu4zb71LMEFxYUXdFs8aMgRD2D6sBWpPDFSBN3oN_frpBO5X2l9lyzAJwMlS4Wn43luP1nqS2OVefFYuHO17EF6Qsqh213wviaWTnWOZxImbi-X9y_V1VIPWZ1MommR588e5emfzTOTVSUb0wDdfgHOlXBh2R0wdoOx4Bu6hJK3cWpcs3WS4WhqTojQ3HfOgroC7vOHUs0sLXyUvMe57RQQh0-Ui6QJV4XvnVaW_khCjFUzmDmnP97W1TPlDDIBKXpRKInEw3R-VI2_U8BcVE0MtuocNhJY6ITyOGaD1tf_8CFgAlFBeTjSyvWJC1M8R7589GmBgK5ICb3qyQ011h6JJIMMxcHM5FqNACbQ-SB8rlJlyaYU.jpg?r=c94"
                name="Cabinet of curiosities"
                link="https://www.netflix.com/watch/80209229?tctx=1%2C3%2C%2C%2C%2C%2C%2C%2C"
            />
           </div>
            <div className="two">
            <List 
                imgs=" https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABanbbVuRJ2vO6qXLUgeMsoXKj001cJrMmPMJa98WRWOYHULloKi6XcY_DvcnyEQtxbL7Dyo3WMOK2maWe3-gvY0pGA_IMo9cyxE.jpg?r=777"
                name="naruto"
                link=" https://www.netflix.com/watch/70205012?tctx=1%2C4%2C%2C%2C%2C%2C%2C%2C"
            />
            </div>
            <div className="three">
            <List 
                imgs= " https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABarO3vCTC0oAml_to9kGWotPEY0O-8-8rwoIJXL3Fc-hHIBmbTX08ZMhZR0rAA_LM1hgpkK9b1_xAZo5O1jsp8qw6FQd7kFty6Q.jpg?r=fa0"
                name="ANNABELLA "
                link="  https://www.netflix.com/watch/80013775?tctx=4%2C3%2C%2C%2C%2C%2C%2C%2C "
            />
            </div>
           
          </div>
          <div className="main2">
          <div className="four">
            <List 
                imgs="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfe21qJIllaWxMbT3olBGZ6egS7rYqlg5JEkUpCL6IZ4eig_fGkkZIyvCOgFrm0IgTfAdigx57VEG5tc4m02WHnA4SfneNzSkF8.jpg?r=fee "
                name="insidious "
                link=" https://www.netflix.com/watch/80028439?tctx=2%2C0%2C%2C%2C%2C%2C%2C%2C "
            />
            </div>
           <div className="five">
           <List 
                imgs="  https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZx3toNYIVOl2Wn2u7qtXcsaUOp1T2faiKcA-CFeXsoluU5Lr-qwiHFCey7kDz33ZMEdZ7Sxi9QoApgshD2p37ThAfWXoSSM7is.jpg?r=62b"
                name="  OUJIA ORIGIN OF EVIL"
                link="   https://www.netflix.com/watch/80106763?tctx=4%2C1%2C%2C%2C%2C%2C%2C%2C"
            />
           </div>
           <div className="six">
           <List 
                imgs="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfJBmnfuobmjbQdz5sYdh5Ass970FX4zaIYBkJ9-QNFg9jpVel2ZOuz5SWkrnOnW1PQcW2SyLPKNkN0J4eCn6w71j2B_P4N7VPo.jpg?r=fbf"
                name=" the conjuring"
                link=" https://www.netflix.com/watch/70251894?tctx=4%2C2%2C%2C%2C%2C%2C%2C%2C"
            />
           </div>
          </div>
        </>
    )
}
export default ListHead;