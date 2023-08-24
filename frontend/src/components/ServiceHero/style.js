import css from 'styled-jsx/css';
export default css`

.service-banner {
    overflow: visible;
}

.service-banner .banner-content h1 {
    max-width: 830px;
    -webkit-transform: translateY(-50px);
    -moz-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    -o-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
    visibility: hidden;
}
.service-banner .banner-content h1.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.8s ease 0s;
    -moz-transition: all 0.8s ease 0s;
    -ms-transition: all 0.8s ease 0s;
    -o-transition: all 0.8s ease 0s;
    transition: all 0.8s ease 0s;
    opacity: 1;
    visibility: visible;
}



@media (min-width: 1922px) {
    .service-banner-img-wrapper{
        max-width: 1920px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 50%;
        height: 100%;
        transform: translateX(50%);
    }
}

@media (max-width: 1300px) {
    .service-banner .banner-content {
        align-items: flex-start;
        text-align: left;
    }
    .service-banner .banner-content h1 {
        max-width: 720px;
    }
}

@media (max-width: 1199px) {
    .service-banner .banner-content h1 {
        max-width: 630px;
    }
}

@media (max-width: 991px) {
    .service-banner .banner-content h1 {
        max-width: 520px;
    }
}

@media (max-width: 767px) {
    .service-banner .cr-social-link {
        text-align: center;
    }
    .service-banner .banner-content {
        align-items: center;
        text-align: center;
    }

}



`;
