import css from 'styled-jsx/css';
export default css`

.join__feature { 
    background-color:#F3F7FF;
    padding: 104px 0 100px 0;
}

.join__feature .overlay {
    background-color: #FFFFFF;
    width: 91%;
    border-radius: 50px 0px 0 0px;
    right: 0;
    left: inherit;
}

.join__feature__content {
    padding-top: 61px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    grid-gap: 80px;
    max-width: 1360px;
    margin: 0 0 0 auto;
}

.join__feature__img img {
    margin-left: auto;
}

.join__feature__text h4 {
    font-size: 36px;
    line-height: 1.3;
    padding-bottom: 20px;
    color: #23252dcc;
 }

.join__feature__text p {
    font-size: 20px;
    color: rgba(35,37,45,0.8);
    line-height: 1.2;
    padding: 5px 0;
 }

.join__feature__text a {
    margin-top: 30px;
}

.join__feature__text .apply-now:hover svg rect {
    stroke-dasharray: 94,360;
    stroke-dashoffset: 217;
}



@media (max-width: 1650px) {
    .join__feature .overlay {
        width: 100%;
        border-radius: 0;
    }

}

@media (max-width: 1300px) {
    .join__feature__content{
        padding-top: 50px;
    }

}

@media (max-width: 1199px) {
    .join__feature__title h3 {
        padding: 25px 0;
    }

    .join__feature {
        padding: 100px 0 ;
    }

    .join__feature__content {
        padding-top: 60px;
        grid-template-columns: 1fr 1.5fr;
        grid-gap: 20px;
    }
 
}

@media (max-width: 991px) {
    .join__feature {
        padding: 80px 0;
    }

    .join__feature__text {
        text-align: center;
    }

    .join__feature__content {
        padding-top: 40px;
        grid-gap: 30px;
        display: flex;
        flex-flow: column-reverse;
    }
    
   
}

@media (max-width: 767px) {

    .join__feature {
        padding: 60px 0;
    }

    .join__feature__text h4 {
        font-size: 30px;
        padding-bottom: 10px;
    }

    .join__feature__content {
        padding-top: 30px;
        grid-gap: 30px;
        grid-template-columns: 1fr;
    }
}

@media (max-width: 575px) {
    .join__feature__title h3 {
        padding: 25px 0 14px;
    }
    .join__feature__text h4 {
        font-size: 24px;
    }

}

`;
