import css from 'styled-jsx/css';
export default css`

.cr-header {
    position: absolute;
    top: 0;
    right: 50%;
    z-index: 999;
    width: 100%;
    padding: 57px 65px 10px;
    max-width: 1920px;
    transform: translateX(50%);
}
.cr-header .toggle-bar {
    width: 53px;
    height: 53px;
    background: #fff;
    border-radius: 100%;
    padding: 18px 8px;
    cursor: pointer;
}
.cr-header .toggle-bar span {
    background: #000;
    display: block;
    height: 3px;
    width: 22px;
    margin: 0 auto 4px;
}
.cr-header nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}
.contact .cr-header .toggle-bar,
.portfolio .cr-header .toggle-bar {
    box-shadow: 0.156px 0.988px 2px 0px rgba(3, 22, 109, 0.12);
}
img.logo-white {
    display: none;
}
.cr-navigation .navigation-wrapper {
    height: 100vh;
    top: 0;
    width: 100%;
    visibility: hidden;
    background: transparent;
    position: fixed;
    left: 0;
    z-index: 999;
    transition: all 0.8s cubic-bezier(0.58, 0.04, 0.32, 0.93) 0.6s;
}
.cr-navigation .navigation-wrapper.visible {
    height: 100vh;
    visibility: visible;
    transition: all 0.8s cubic-bezier(0.58, 0.04, 0.32, 0.93) 0.2s;
}
.cr-navigation .navigation-wrapper .navigation-header {
    width: 100%;
    max-width: 1920px;
    padding: 57px 80px 10px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
}
.cr-navigation .navigation-wrapper .navigation-header-logo img {
    opacity: 0;
    visibility: hidden;
    transition: all 0.8s ease;
}
.cr-navigation .navigation-wrapper.visible .navigation-header-logo img {
    opacity: 1;
    visibility: visible;
    transition: all 0.8s ease 0.3s;
}

.cr-navigation .navigation-wrapper .cross-bar {
    cursor: pointer;
    height: 44px;
    position: relative;
    width: 44px;
    background: #fff;
    border-radius: 100%;
    padding: 10px 10px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.cr-navigation .navigation-wrapper .cross-bar span {
    background: #444;
    display: block;
    height: 3px;
    position: absolute;
    width: 20px;
    top: 21px;
    left: 12px;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
}
.cr-navigation .navigation-wrapper .cross-bar span:first-child {
    -webkit-transform: rotate(-44deg);
    -moz-transform: rotate(-44deg);
    -ms-transform: rotate(-44deg);
    -o-transform: rotate(-44deg);
    transform: rotate(-44deg);
}
.cr-navigation .navigation-wrapper .cross-bar span:last-child {
    -webkit-transform: rotate(43deg);
    -moz-transform: rotate(43deg);
    -ms-transform: rotate(43deg);
    -o-transform: rotate(43deg);
    transform: rotate(43deg);
}
.cr-navigation .navigation-wrapper.visible .cross-bar {
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.8s ease 0.3s;
    -moz-transition: all 0.8s ease 0.3s;
    -ms-transition: all 0.8s ease 0.3s;
    -o-transition: all 0.8s ease 0.3s;
    transition: all 0.8s ease 0.3s;
}
.cr-navigation .navigation-overlay {
    height: 0;
    top: 0;
    left: 0;
    width: 100%;
    background: #00146b;
    position: fixed;
    z-index: 999;
    transition: all 0.8s cubic-bezier(0.58, 0.04, 0.32, 0.93) 0.9s;
}
.cr-navigation .navigation-overlay.open-overlay {
    height: 100vh;
    transition: all 0.8s cubic-bezier(0.58, 0.04, 0.32, 0.93) 0.2s;
}
.cr-navigation .navigation-item {
    height: 100%;
}
.cr-navigation .navigation-item .navigation-item-wrapper {
    align-items: center;
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    padding: 0 80px;
}
.cr-navigation .navigation-item ul.main-nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
.cr-navigation .navigation-item ul.main-nav > li {
    position: relative;
    display: inline-block;
    margin: 0 30px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
}
.cr-navigation .navigation-item ul.main-nav li a {
    color: #fff;
    display: inline-block;
    font-size: 30px;
    line-height: normal;
    text-transform: capitalize;
    position: relative;
    font-family: CircularStd-Medium;
}
.cr-navigation .navigation-item ul.main-nav li a:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #fff;
    transition: all 0.5s ease;
}
.cr-navigation .navigation-item ul.main-nav li a:hover:before{
    width: 100%;
}

.cr-navigation .navigation-item ul.main-nav li.has-children {
    padding-right: 35px;
}
.cr-navigation .navigation-item ul.main-nav li svg {
    width: 22px;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;
    padding: 5px;
    transform-origin: center center;
    transition: all 0.3s ease;
}
.cr-navigation .navigation-item ul.main-nav li.show svg {
    transform: rotate(180deg);
}
.cr-navigation .navigation-item ul.main-nav li svg path {
    fill: #fff;
}
.cr-navigation .navigation-item ul.main-nav li .dropdown {
    display: none;
    padding-left: 0;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 10px;
    min-width: 180px;
}
.cr-navigation .navigation-item ul.main-nav li .dropdown li a {
    font-size: 20px;
    line-height: 34px;
}
.cr-navigation .navigation-item ul.main-nav li .dropdown li a:before{
    height: 1px;
    bottom: 0;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul.main-nav > li {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);

}
.cr-navigation .navigation-item ul.main-nav li:nth-child(1) {
    transition: 1s ease 0.1s;
}
.cr-navigation .navigation-item ul.main-nav li:nth-child(2) {
    transition: 1s ease 0.2s;
}
.cr-navigation .navigation-item ul.main-nav li:nth-child(3) {
    transition: 1s ease 0.3s;
}
.cr-navigation .navigation-item ul.main-nav li:nth-child(4) {
    transition: 1s ease 0.4s;
}
.cr-navigation .navigation-item ul.main-nav li:nth-child(5) {
    transition: 1s ease 0.5s;
}
.cr-navigation .navigation-item ul.main-nav li:nth-child(6) {
    transition: 1s ease 0.6s;
}

.cr-navigation .navigation-wrapper.visible .navigation-item ul.main-nav > li:nth-child(1) {
    transition: all 0.8s ease 0.6s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul.main-nav > li:nth-child(2) {
    transition: all 0.8s ease 0.7s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul.main-nav > li:nth-child(3) {
    transition: all 0.8s ease 0.8s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul.main-nav > li:nth-child(4) {
    transition: all 0.8s ease 0.9s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul.main-nav > li:nth-child(5) {
    transition: all 0.8s ease 1s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul.main-nav > li:nth-child(6) {
    transition: all 0.8s ease 1.1s;
}


.cr-navigation .navigation-wrapper .navigation-item ul.social-link{
    opacity: 0;
    visibility: hidden;
    transition: all 0.8s ease 0.5s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul.social-link{
    opacity: 1;
    visibility: visible;
    transition: all 0.8s ease 0.8s;
}
.cr-navigation .navigation-wrapper .navigation-item ul.social-link li{
    display: block;
    margin-bottom: 10px;
}
.cr-navigation .navigation-wrapper .navigation-item ul.social-link li:last-child{
    margin-bottom: 0;
}
.cr-navigation .navigation-wrapper .navigation-item ul.social-link li a{
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
}
.cr-navigation .navigation-wrapper .navigation-item ul.social-link li a:hover{
    color: #00b4ff;
}
.cr-navigation .navigation-wrapper .address{
    font-style: normal;
    text-align: center;
    position: absolute;
    bottom: 60px;
    right: 50%;
    transform: translateX(50%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.8s ease;
}
.cr-navigation .navigation-wrapper.visible .address{
    opacity: 1;
    visibility: visible;
    transition: all 0.8s ease 1.2s;
}
.cr-navigation .navigation-wrapper .address span{
    color: #fff;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    font-family: 'Circular Std Bold';
    margin-bottom: 5px;
}
.cr-navigation .navigation-wrapper .address p{
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    max-width: 320px;
    margin: 0 auto;
    width: 100%;
}


@media (max-width: 1700px) {
    .cr-header {
        padding: 35px 36px 10px;
    }
}

@media (max-width: 1500px) {
    .cr-header {
        padding: 35px 0 10px;
    }
    .cr-header .container-fluid {
        max-width: 1280px;
    }
}

@media (max-width: 1300px) {
    .cr-header .container-fluid {
        max-width: 1140px;
    }
}

@media (max-width: 1199px) {
    .cr-header .container-fluid {
        max-width: 960px;
    }

    img.logo-white {
        display: block;
    }
    img.logo-black {
        display: none;
    }
    .cr-navigation .navigation-item ul.main-nav li {
        margin: 0 20px;
    }
    .cr-navigation .navigation-item ul.main-nav li a {
        font-size: 24px;
    }
    .cr-navigation .navigation-item ul.main-nav li .dropdown {
        padding-left: 20px;
    }
    .cr-navigation .navigation-item ul.main-nav li .dropdown li a {
        font-size: 20px;
        line-height: 36px;
    }
    .cr-navigation .navigation-item ul.main-nav li svg {
        top: 5px;
    }

}

@media (max-width: 991px) {
    .cr-header .container-fluid {
        max-width: 720px;
    }
    .cr-navigation .navigation-item ul.main-nav li {
        margin: 0 15px;
    }
    .cr-navigation .navigation-item .navigation-item-wrapper{
        padding: 0;
    }
    .cr-navigation .navigation-item ul.main-nav {
        margin-bottom: 60px;
    }
    .cr-navigation .navigation-wrapper .address {
        bottom: 30px;
    }

}

@media (max-width: 767px) {
    .cr-header .container-fluid {
        max-width: 540px;
    }
    .cr-navigation .navigation-wrapper .navigation-header {
        padding: 35px 15px 10px;
    }
    .cr-navigation .navigation-item .navigation-item-wrapper > ul.main-nav {
        overflow-y: auto;
        min-width: 190px;
        flex-flow: column;
        align-items: flex-start;
        margin-bottom: 0;
    }
    .cr-navigation .navigation-item ul.main-nav li {
        margin: 0 0 10px;
        display: block;
    }
    .cr-navigation .navigation-item ul.main-nav li .dropdown {
        position: relative;
        left: inherit;
        top: inherit;
        min-width: inherit;
        margin-top:0;
    }
    .cr-navigation .navigation-item ul.main-nav li .dropdown li {
        margin-bottom: 0;
    }
    .cr-navigation .navigation-item ul.main-nav li .dropdown li a {
        font-size: 18px;
        line-height: 26px;
    }
    
    .cr-navigation .navigation-wrapper .address {
        display: none;
    }
}

@media (max-width: 575px) {
    .cr-header .container-fluid {
        max-width: 100%;
    }
    .cr-navigation .navigation-item .navigation-item-wrapper {
        padding: 0 15px;
        min-height: 400px;
        justify-content: center;
    }
    .cr-navigation .navigation-wrapper.visible .navigation-item ul.social-link {
        display: none;
    }
    
    .cr-navigation .navigation-wrapper.visible .address{
        opacity: 1;
        visibility: visible;
        transition: all 0.8s ease 1.2s;
        bottom: 100px !important;
    }

}

`;
