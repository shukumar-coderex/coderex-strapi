import css from 'styled-jsx/css';
export default css`

.service__clients__content {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    grid-gap: 211px;
    max-width: 1360px;
    margin: 0 0 0 auto;
    padding: 150px 0 108px 0;
}

.service__clients__feature .overlay {
    background: #FFFBF1;
    width: 91%;
    right: 0;
    left: inherit;
}

.service__clients__box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    margin-top: 50px;
    
}

.service__clients__box-img { 
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 3, 67, 0.06);
    border-radius: 6px;
    padding: 25px 22px;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    min-height: 110px;
    justify-content: center;
}


.service__clients__text h4 {
    font-size: 36px;
    padding-bottom: 20px;
    color: #23252dcc;
}

.service__clients__text p {
    font-size: 20px;
    color: rgba(35, 37, 45, 0.7);
    line-height: 1.7;
    padding: 5px 0;
}

.service__clients__text a {
    margin-top: 30px;
}

.service__clients__img img  { 
    margin-top:45px;
}



@media (max-width: 1700px) {
    .service__clients__content {
        padding: 130px 0 85px 0;
    }

}

@media (max-width: 1650px) {
    .service__clients__feature .overlay {
        width: 100%;
    }

}

@media (max-width: 1300px) {
    .service__clients__content {
        padding: 110px 0 75px 0;
        grid-template-columns: 1fr 1.2fr;
        grid-gap: 80px;
    }

}

@media (max-width: 1199px) {

    .service__clients__content {
        padding: 80px 0 55px 0;
        grid-template-columns: 1fr 1fr;
        grid-gap: 60px;
    }

    .service__clients__title h3 {
        padding: 25px 0;
    }

    .service__clients {
        padding: 100px 0 ;
    }

    .service__clients__feature .overlay {
        width: 100%;
    }
 
}

@media (max-width: 991px) {
    .service__clients {
        padding: 80px 0;
    }

    .service__clients__text h4 {
        padding-bottom: 10px;
    }
    
    .service__clients__content {
        display: block;
        grid-gap: 30px;
    }
    .service__clients__text {
        text-align: center;
        margin-bottom: 60px;
    }
    .service__clients__text.service__clients__img {
        margin-bottom: 0;
    }

    .service__clients__box {
        grid-template-columns: 1fr 1fr;
    }
    .service__clients__img img {
        margin: 45px auto 0;
    }
    
   
}

@media (max-width: 767px) {

    .service__clients {
        padding: 60px 0;
    }

    .service__clients__text h4 {
        font-size: 30px;
    }

    .service__clients__content {
        grid-gap: 40px;
        grid-template-columns: 1fr;
    }

    .service__clients__content {
        padding: 60px 0 45px 0;
    }
    
    .service__clients__box {
        margin-top: 30px;
    }

}

@media (max-width: 575px) {

    .service__clients__text h4 {
        font-size: 30px;
        line-height: 1.3;
    }
    .service__clients__box-img {
        padding: 15px;
        min-height: 90px;
    }

}


`;
