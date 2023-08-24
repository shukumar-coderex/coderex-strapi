import css from 'styled-jsx/css';
export default css`


.major-service {
    background: #00146b;
    padding-bottom: 60px;
    padding-top: 86px;
    box-shadow: 0 -2px 0 #00146b;
}
.major-service .overlay{
    background: #fff;
    top: inherit;
    bottom: 0;
    height: 300px;
}
.major-service .section-title{
    text-align: center;
    max-width: 730px;
    width: 100%;
    margin: 0 auto 75px;
}
.major-service .section-title p{
    color: #fff;
    margin-top: 32px;
}
.major-service .major-service-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -30px;
}
.major-service .single-service {
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    width: calc(100% / 3 - 30px);
    padding: 60px 50px 50px;
    text-align: center;
    margin-bottom: 30px;
    margin-left: 30px; 
    box-shadow: 0px 11px 40px 0px rgba(87, 95, 131, 0.1);
}
.major-service .single-service.blue-bg {
    background-color: #081d7a;
}
.major-service .single-service .service-icon  {
    display: inlnie-block;
}
.major-service .single-service h5 {
    margin: 44px 0 28px;
    font-size: 22px;
    color: #23252d;
    line-height: 1.2;
}
.major-service .single-service p {
    font-size: 16px;
    line-height: 1.8;
    color: #23252d;
}
.major-service .single-service.blue-bg p,
.major-service .single-service.blue-bg h5{
    color: #fff;
}
.major-service .major-service-btn{
    text-align:center;
    margin-top: 50px;
}

.cr-pricing.jsx-2612711938 .section-title.jsx-2612711938 {
    margin: 0 auto 75px;
    max-width: 640px;
}



@media (min-width: 1922px) {
    .service-illustration-wrapper{
        max-width: 1920px;
        position: absolute;
        top: 0;
        right: 50%;
        width: 100%;
        height: 100%;
        transform: translateX(50%);
    }
}

@media (max-width: 1500px) {
    .major-service {
        padding-top: 46px;
    }
    .major-service .single-service {
        padding: 50px 20px 40px;
    }
    

}

@media (max-width: 1199px) {
    .major-service  {
        padding-top: 0;
    }
    .major-service .single-service {
        width: calc(100% / 2 - 30px);
    }

}

@media (max-width: 991px) {
    .major-service {
        margin-bottom: 0;
    }
    

}

@media (max-width: 767px) {
    
    .major-service {
        padding-top: 40px;
    }
    .major-service .major-service-wrapper{
        margin-left:0;
    }
    .major-service .single-service {
        width: 100%;
        margin-left:0;
    }
    

}





`;
