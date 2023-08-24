import css from 'styled-jsx/css';
export default css`


.cr-service {
    overflow: hidden;
    padding-bottom: 282px;
}
.cr-service .shape {
    background: #00146b;
    position: absolute;
    height: 260px;
    width: 120%;
    left: -40px;
    bottom: -125px;
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
}
.cr-service .single-service {
    position: relative;
    padding-top: 60px;
    margin-bottom: 150px;
    overflow: hidden;
}
.cr-service .single-service .overlay {
    background: #f3f7ff;
    width: 740px;
    height: 390px;
}
.cr-service .service-2 .overlay {
    width: 440px;
}
.cr-service .service-3 .overlay {
    width: 345px;
    left: 200px;
}
.cr-service .service-4 .overlay {
    width: 448px;
}
.cr-service .service-5 .overlay {
    width: 772px;
}
.cr-service .service-6 .overlay {
    width: 448px;
}

.cr-service .content-wrapper {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
}
.cr-service .content-wrapper .content-image {
    background: #00146b;
    width: 550px;
    height: 565px;
    position: relative;
}
.cr-service .content-wrapper .content {
    max-width: 685px;
    width: 100%;
    padding-left: 70px;
    padding-right: 100px;
}
.cr-service .content-wrapper .content .count {
    font-size: 20px;
    line-height: 30px;
    position: relative;
    display: inline-block;
    color: #00b4ff;
    margin-bottom: 13px;
}
.cr-service .content-wrapper .content .count:before {
    content: "";
    width: 50px;
    height: 2px;
    background: #00b4ff;
    right: 44px;
    top: 13px;
    position: absolute;
}
.cr-service .content-wrapper .content h3 {
    margin-bottom: 25px;
}
.cr-service .content-wrapper .content .description {
    text-align: justify;
}
.cr-service .content-wrapper .content .cr-srvice-btn {
    margin-top: 40px;
}
.cr-service .content-wrapper .content .lets-talk-btn {
    color: #23252d;
    font-size: 20px;
    font-family: Circular Std Bold;
    text-transform: capitalize;
    display: inline-block;
    margin-left: 20px;
}
.cr-service .content-wrapper .content .lets-talk-btn img {
    display: inline-block;
    width: 18px;
    margin-left: 2px;
    position: relative;
    top: -1px;
    transition: all 0.3s ease;
}
.cr-service .content-wrapper .content .lets-talk-btn:hover {
    text-decoration: underline;
}
.cr-service .content-wrapper .content .lets-talk-btn:hover img {
    margin-left: 7px;
}
.cr-service .single-service:nth-child(even) .content-wrapper {
    flex-flow: row-reverse;
}
.cr-service .single-service:nth-child(even) .content-wrapper .content-image:before {
    left: 0;
}
.cr-service .single-service:nth-child(even) .overlay {
    left: inherit;
    right: 0;
}


.cr-service .single-service .content-image .icon-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.cr-service .service-1 .content-image .icon-wrapper {
    width: 515px;
    height: 298px;
    left: 146px;
}
.cr-service .service-2 .content-image .icon-wrapper {
    width: 497px;
    height: 374px;
    left: -161px;
}
.cr-service .service-3 .content-image .icon-wrapper {
    max-width: 393px;
    width: 100%;
    right: -91px;
}
.cr-service .service-4 .content-image .icon-wrapper {
    width: 337px;
    left: -108px;
}
.cr-service .service-5 .content-image .icon-wrapper {
    width: 417px;
    right: -115px;
}
.cr-service .service-6 .content-image .icon-wrapper {
    left: -110px;
}



@media (min-width: 1922px) {
    .cr-service .service-2 .overlay {
        width: 700px;
    }
    .cr-service .service-3 .overlay {
        width: 735px;
        left: 0;
    }
    .cr-service .service-4 .overlay {
        width: 698px;
    }
    .cr-service .service-6 .overlay {
        width: 740px;
    }

}

@media (max-width: 1500px) {
    .cr-service {
        padding-bottom: 250px;
    }
    .cr-service .single-service .overlay {
        height: 240px;
    }
    .cr-service .service-1 .overlay {
        width: 630px;
    }
    .cr-service .service-1 .content-image .icon-wrapper {
        left: 116px;
    }
    .cr-service .service-2 .overlay {
        height: 265px;
    }
    .cr-service .service-4 .overlay {
        height: 270px;
    }
    .cr-service .service-5 .overlay {
        height: 240px;
        width: 670px;
    }
    .cr-service .service-6 .overlay {
        height: 270px;
    }
    .cr-service .content-wrapper .content-image {
        width: 520px;
        height: 535px;
    }
    .cr-service .content-wrapper .content {
        padding-left: 170px;
        padding-right: 10px;
    }
    .cr-service .single-service:nth-child(even) .content-wrapper .content {
        padding-left: 70px;
        padding-right: 140px;
    }
    

}

@media (max-width: 1300px) {
    .cr-service .content-wrapper .content-image {
        width: 500px;
        height: 500px;
    }
    .cr-service .content-wrapper .content {
        padding-left: 140px;
        padding-right: 10px;
        max-width: 590px;
    }
    .cr-service .single-service:nth-child(even) .content-wrapper .content {
        padding-left: 40px;
        padding-right: 140px;
    }
    .cr-service .service-1 .content-image .icon-wrapper {
        left: 96px;
    }
    .cr-service .service-2 .content-image .icon-wrapper {
        width: 390px;
        left: -126px;
    }
    .cr-service .service-3 .content-image .icon-wrapper{
        max-width: 330px;
        right: -76px;
    }
    .cr-service .service-3 .overlay {
        width: 345px;
    }
    .cr-service .service-5 .overlay {
        width: 400px;
    }

}

@media (max-width: 1199px) {
    .cr-service .single-service {
        padding-top: 0;
        margin-bottom: 100px;
    }
    .cr-service .single-service .overlay {
        display: none;
    }
    .cr-service .content-wrapper {
        display: block;
    }
    .cr-service .content-wrapper .content-image {
        margin: 0 auto;
    }
    .cr-service .content-wrapper .content {
        padding-left: 0;
        padding-right: 0;
        max-width: 500px;
        margin: 40px auto 0;
    }
    .cr-service .content-wrapper .content .count {
        margin-bottom: 30px;
    }
    .cr-service .content-wrapper .content .count:before {
        left: 35px;
        top: 13px;
    }
    .cr-service .single-service:nth-child(even) .content-wrapper .content {
        padding-left: 0;
        padding-right: 0;
    }
    .cr-service .service-1 .content-image .icon-wrapper {
        bottom: 100px;
    }

}

@media (max-width: 767px) {
    .cr-service {
        padding-bottom: 150px;
    }
    .cr-service .shape {
        bottom: -135px;
        height: 200px;
    }
    .cr-service .single-service:last-child{
        margin-bottom: 0;
    }
    .cr-service .content-wrapper .content {
        text-align: center;
    }
    .cr-service .content-wrapper .content .count {
        margin-bottom: 40px;
    }
    .cr-service .content-wrapper .content .count:before {
        left: -14px;
        top: 42px;
    }
    .cr-service .content-wrapper .content .description {
        text-align: center;
    }
    .cr-service .service-1 .content-image .icon-wrapper {
        bottom: inherit;
        left: 50%;
        top: 50%;
        width: 430px;
        height: 288px;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .cr-service .service-2 .content-image .icon-wrapper {
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-54%, -44%);
        -moz-transform: translate(-54%, -44%);
        -ms-transform: translate(-54%, -44%);
        -o-transform: translate(-54%, -44%);
        transform: translate(-54%, -44%);
    }
    
    .cr-service .service-3 .content-image .icon-wrapper {
        right: 50%;
        transform: translate(55%, -50%);
    }
    .cr-service .service-4 .content-image .icon-wrapper {
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-52%,-50%);
        -moz-transform: translate(-52%,-50%);
        -ms-transform: translate(-52%,-50%);
        -o-transform: translate(-52%,-50%);
        transform: translate(-52%,-50%);
    }
    .cr-service .service-5 .content-image .icon-wrapper {
        right: 50%;
        transform: translate(56%, -50%);
        width: 290px;
    }
    .cr-service .service-6 .content-image .icon-wrapper {
        margin-left: 0;
        padding-top: 0;
        position: absolute;
        max-width: 347px;
        width: 100%;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .cr-service .service-6 .content-image .icon-wrapper:before {
        display: none;
    }


}

@media (max-width: 575px) {
    .cr-service .content-wrapper .content-image {
        width: 100%;
        height: 350px;
    }
    .cr-service .service-1 .content-image .icon-wrapper {
        width: 100%;
        height: auto;
    }
    .cr-service .service-2 .content-image .icon-wrapper {
        width: 230px;
        height: auto;
    }
    .cr-service .service-3 .content-image .icon-wrapper {
        max-width: 220px;
    }
    .cr-service .service-4 .content-image .icon-wrapper {
        width: 174px;
        height: auto;
        position: relative;
    }
    .cr-service .service-5 .content-image .icon-wrapper {
        width: 215px;
        height: 215px;
    }
    .cr-service .service-6 .content-image .icon-wrapper {
        max-width: 220px;
    }

}






`;
