import css from 'styled-jsx/css';
export default css`

.featured-portfolio {
    padding-bottom: 92px;
    padding-top: 230px;
    overflow: hidden;
}
.featured-portfolio .content-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}
.featured-portfolio .content-wrapper .img-area {
    width: 100%;
    max-width: 588px;
}
.featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
    position: absolute;
    top: 25px;
    left: 50%;
    width: calc(100% - 50px);
    height: 302px;
    overflow: hidden;
    transform: translateX(-50%);
    background-position: center 0%;
    background-size: 100%;
    animation: portProjectMove 20s infinite linear 0.5s;
}
.featured-portfolio .content-wrapper .content-area {
    width: 100%;
    padding-left: 70px;
    position: relative;
    max-width: 640px;
}
.featured-portfolio .content-wrapper .content-area h5 {
    color: #00b4ff;
    position: absolute;
    left: 12px;
    top: 20px;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left;
    -moz-transform-origin: left;
    -ms-transform-origin: left;
    -o-transform-origin: left;
    transform-origin: left;
}

.featured-portfolio .content-wrapper .content-area .description {
    margin-bottom: 43px;
}

.featured-portfolio .content-wrapper .content-area .cr-btn-default {
    -webkit-transition: all 0.8s ease 0.6s;
    -moz-transition: all 0.8s ease 0.6s;
    -ms-transition: all 0.8s ease 0.6s;
    -o-transition: all 0.8s ease 0.6s;
    transition: all 0.8s ease 0.6s;
}

@-webkit-keyframes portProjectMove {
    from {
        background-position: center 0%;
    }

    to {
        background-position: center 100%;
    }
}

@keyframes portProjectMove {
    from {
        background-position: center 0%;
    }

    to {
        background-position: center 100%;
    }
}

@media (max-width: 1700px) {
    .featured-portfolio .content-wrapper {
        justify-content: flex-end;
    }
    .featured-portfolio .content-wrapper .img-area {
        max-width: 638px;
        padding-right: 50px;
    }

}

@media (max-width: 1500px) {
    .featured-portfolio {
        padding-top: 200px;
        padding-bottom: 110px;
    }
    .featured-portfolio .content-wrapper .img-area {
        max-width: 558px;
        padding-right: 0;
    }
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        top: 18px;
        width: calc(100% - 36px);
        height: 298px;
    }
    .featured-portfolio .content-wrapper .content-area h5 {
        left: 41px;
    }
    
}

@media (max-width: 1300px) {
    .featured-portfolio {
        padding-top: 130px;
        padding-bottom: 0;
    }
    .featured-portfolio .content-wrapper {
        display: block;
    }
    .featured-portfolio .content-wrapper .img-area {
        max-width: 588px;
        padding-right: 0;
        margin: 0 auto;
    }
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        height: 315px;
    }
    .featured-portfolio .content-wrapper .content-area {
        max-width: 786px;
        padding-left: 0;
        position: relative;
        text-align: center;
        margin: 130px auto 0;
    }
    .featured-portfolio .content-wrapper .content-area h5 {
        left: inherit;
        position: relative;
        margin-bottom: 30px;
        -webkit-transform: inherit;
        -moz-transform: inherit;
        -ms-transform: inherit;
        -o-transform: inherit;
        transform: inherit;
    }

}

@media (max-width: 991px) {
    .featured-portfolio {
        padding-top: 100px;
    }
}

@media (max-width: 767px) {
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        height: 270px;
    }
    .featured-portfolio .content-wrapper .content-area {
        margin: 40px auto 0;
    }
}

@media (max-width: 575px) {
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        height: calc(100% - 110px);
    }
}





`;
