import css from 'styled-jsx/css';
export default css`

    
.cr-aim {
    background: #00146b;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 140px;
    box-shadow: 0 -2px 0 #00146b;
}

.cr-aim .cr-aim-image {
    position: absolute;
    right: -87px;
    top: calc(50% + 45px);
    overflow: hidden;
    transform: translateY(-50%);
}
.cr-aim .aim-content {
    width: 55%;
    min-height: 633px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    padding: 50px 0 50px 150px;
}
.cr-aim .aim-content h2 {
    font-size: calc(32px + (60 - 32) * ((100vw - 320px) / (1920 - 320)));
}
.cr-aim .aim-content p {
    color: #fff;
    width: 100%;
}
.cr-aim .aim-content .section-title {
    color: #fff;
    width: 100%;
    margin-bottom: 17px;
}
.cr-aim .aim-content .talk-us-btn {
    margin-top: 45px;
}


@media (min-width: 1922px) {
    .cr-aim .aim-content h2 {
        font-size: 60px;
    }

    .illustration-img-wrapper{
        max-width: 1920px;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        right: 50%;
        transform: translateX(50%);
    }
}


@media (max-width: 1700px) {
    .cr-aim {
        padding-bottom: 80px;
    }
    .cr-aim .cr-aim-image {
        top: calc(50% + 30px);
        max-width: 700px;
    }
    .cr-aim .aim-content {
        width: 59%;
        min-height: 533px;
        padding: 50px 0 50px 260px;
    }

}

@media (max-width: 1500px) {
    .cr-aim .cr-aim-image {
        max-width: 710px;
    }
    .cr-aim .aim-content {
        min-height: 460px;
        padding-left: 0;
    }
}

@media (max-width: 1300px) {
    .cr-aim .cr-aim-image {
        max-width: 660px;
    }
    .cr-aim .aim-content {
        min-height: 420px;
    }
}

@media (max-width: 1199px) {
    .cr-aim .cr-aim-image {
        max-width: 570px;
    }
    .cr-aim .aim-content {
        min-height: 380px;
    }
    .cr-aim .aim-content p {
        font-size: 20px;
        line-height: 34px;
    }
}

@media (max-width: 991px) {
    .cr-aim {
        padding-bottom: 90px;
    }
    .cr-aim .cr-aim-image {
        position: relative;
        transform: inherit;
        margin: 0 auto;
        right: inherit;
        top: inherit;
        padding: 0 15px;
    }
    .cr-aim .aim-content {
        min-height: auto;
        width: 100%;
        text-align: center;
        display: block;
        padding-bottom: 0;
    }
}


`;
