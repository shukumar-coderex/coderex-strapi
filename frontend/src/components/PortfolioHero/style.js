import css from 'styled-jsx/css';
export default css`


.portfolio-banner {
    background: #00146b;
    background: -moz-linear-gradient(69deg, #00146b 66%, #fff 50%);
    background: -webkit-linear-gradient(69deg, #00146b 66%, #fff 50%);
    background: linear-gradient(20deg, #00146b 66%, #fff 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=$secondary-color, endColorstr='#fff', GradientType=1);
    overflow: visible;
}
.portfolio-banner .ipad-img {
    position: absolute;
    max-width: 860px;
    right: -53px;
    bottom: -100px;
    width: 100%;
}
.portfolio-banner .banner-content {
    align-items: flex-start;
    text-align: left;
}
.portfolio-banner .banner-content .description {
    max-width: 480px;
    width: 100%;
    margin-top: 5px;
}

@media (max-width: 1700px) {
    .portfolio-banner {
        background: -moz-linear-gradient(65deg, #00146b 67%, #fff 50%);
        background: -webkit-linear-gradient(65deg, #00146b 67%, #fff 50%);
        background: linear-gradient(25deg, #00146b 67%, #fff 50%);
    }
    .portfolio-banner .ipad-img {
        right: 20px;
        max-width: 770px;
    }
}

@media (max-width: 1500px) {
    .portfolio-banner .ipad-img {
        right: 50px;
        max-width: 680px;
    }
    .portfolio-banner .banner-content {
        height: 555px;
    }
}

@media (max-width: 1300px) {
    .portfolio-banner .ipad-img {
        max-width: 590px;
        bottom: 20px;
    }
    .portfolio-banner .banner-content {
        height: 520px;
    }
}

@media (max-width: 1199px) {
    .portfolio-banner .ipad-img {
        max-width: 440px;
        bottom: 20px;
        right: 20px;
    }
    .portfolio-banner .banner-content {
        height: 480px;
    }
}

@media (max-width: 991px) {
    .portfolio-banner {
        background: -moz-linear-gradient(70deg, #00146b 84%, #fff 50%);
        background: -webkit-linear-gradient(70deg, #00146b 84%, #fff 50%);
        background: linear-gradient(20deg, #00146b 84%, #fff 50%);
    }
    .portfolio-banner .ipad-img {
        max-width: 550px;
        bottom: inherit;
        right: inherit;
        position: relative;
        padding-top: 240px;
        margin: 0 auto;
    }
    .portfolio-banner .banner-content {
        height: auto;
        padding: 60px 0 120px 0;
        text-align: center;
        display: block;
    }
    .portfolio-banner .banner-content .description{
        margin: 5px auto 0;
    }
}

@media (max-width: 767px) {
    .portfolio-banner {
        background: -moz-linear-gradient(58deg, #00146b 83%, #fff 50%);
        background: -webkit-linear-gradient(58deg, #00146b 83%, #fff 50%);
        background: linear-gradient(32deg, #00146b 83%, #fff 50%);
    }
}

@media (max-width: 575px) {
    .portfolio-banner {
        background: #00146b;
    }
}


`;
