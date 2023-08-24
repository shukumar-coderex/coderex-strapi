import css from 'styled-jsx/css';
export default css`


.case-study-banner {
    overflow: visible;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
}

@media (max-width: 1199px) {
    .case-study-banner .cr-col {
        padding-top: 150px;
    }
}
.case-study-banner .banner-content {
    align-items: flex-start;
    text-align: left;
}

@media (max-width: 1199px) {
    .case-study-banner .banner-content {
        align-items: center;
        text-align: center;
        padding: 50px 0 120px;
        height: auto;
    }
}

.case-study-banner .banner-content h1 {
    margin-top: 95px;
    max-width: 640px;
    z-index: 3;
    position:relative;
}

@media (max-width: 1700px) {
    .case-study-banner .banner-content h1 {
        margin-top: 0;
        max-width: 590px;
    }
}

@media (max-width: 1300px) {
    .case-study-banner .banner-content h1 {
        max-width: 500px;
    }
}

.case-study-banner .banner-content p {
    max-width: 480px;
    width: 100%;
    margin-top: 5px;
    line-height: 38px;
    z-index: 3;
    position:relative;
}

@media (max-width: 767px) {
    .case-study-banner .banner-content p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 34px;
    }
}

.case-study-banner .banner-content a {
    color: #fff;
    margin-top: 26px;
    text-transform: capitalize;
    z-index: 3;
    position:relative;
}

.case-study-banner .banner-content a img {
    display: inline-block;
    margin-left: 6px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.case-study-banner .banner-content a:hover img {
    margin-left: 10px;
}

.case-study-banner .ipad-wrapper {
    position: absolute;
    right: -110px;
    top: 220px;
}

@media (max-width: 1700px) {
    .case-study-banner .ipad-wrapper {
        right: 40px;
        top: 140px;
        max-width: 708px;
        width: 100%;
    }
}

@media (max-width: 1500px) {
    .case-study-banner .ipad-wrapper {
        max-width: 600px;
    }
}

@media (max-width: 1300px) {
    .case-study-banner .ipad-wrapper {
        max-width: 510px;
    }
}

@media (max-width: 1199px) {
    .case-study-banner .ipad-wrapper {
        position: relative;
        top: inherit;
        right: inherit;
        margin: 0 auto;
    }
}

@media (max-width: 767px) {
    .case-study-banner .ipad-wrapper {
        max-width: 92%;
    }
}

.case-study-banner .ipad-wrapper .ipad-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    border-radius: 30px;
    box-shadow: -12px 60px 200px 0px rgba(51, 51, 51, 0.35);
    z-index: -1;
}

.case-study-banner .ipad-wrapper .scrolling-img-frame {
    position: absolute;
    top: 50%;
    right: 51%;
    width: calc(100% - 110px);
    height: calc(100% - 70px);
    background: #e8e8e8;
    overflow: hidden;
    -webkit-transform: translate(50%, -50%);
    -moz-transform: translate(50%, -50%);
    -ms-transform: translate(50%, -50%);
    -o-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
}

@media (max-width: 1300px) {
    .case-study-banner .ipad-wrapper .scrolling-img-frame {
        width: calc(100% - 78px);
        height: calc(100% - 50px);
    }
}

@media (max-width: 575px) {
    .case-study-banner .ipad-wrapper .scrolling-img-frame {
        width: calc(100% - 50px);
        height: calc(100% - 30px);
    }
}







`;
