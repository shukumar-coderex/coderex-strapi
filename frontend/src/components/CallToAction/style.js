import css from 'styled-jsx/css';
export default css`


.cr-cta {
    padding: 100px 0;
    background: #fff;
    position: relative;
    z-index: 3;
}
.cr-cta .overlay {
    height: 506px;
    max-width: 595px;
    background: #f3f7ff;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: 85px;
}
.cr-cta .cta-content-wrapper {
    display: flex;
    flex-flow: row-reverse wrap;
    align-items: center;
    justify-content: space-between;
}
.cr-cta .cta-img-area {
    width: calc(100% - 710px);
    min-height: 726px;

}
.cr-cta .cta-content {
    width: 100%;
    padding-left: 115px;
    z-index: 1;
    position: relative;
    max-width: 650px;
}
.cr-cta .cta-content h2 {
    margin-bottom: 42px;
}


@media (min-width: 1922px) {
    .cr-cta .overlay {
        max-width: 800px;
        // padding-left: 365px;
    }
}

@media (max-width: 1700px) {
    .cr-cta .overlay {
        padding-left: 85px;
    }
    .cr-cta .cta-img-area {
        width: calc(100% - 830px);
        min-height: 599px;
    }
    .cr-cta .cta-content {
        padding-left: 265px;
        max-width: 730px;
    }
}

@media (max-width: 1500px) {
    .cr-cta .overlay {
        padding-left: 45px;
    }
    .cr-cta .cta-img-area {
        width: calc(100% - 740px);
        min-height: 536px;
    }
}

@media (max-width: 1300px) {
    .cr-cta .cta-content {
        padding-left: 165px;
        max-width: 590px;
    }
    .cr-cta .cta-img-area {
        width: calc(100% - 640px);
        min-height: 494px;
    }
}

@media (max-width: 1199px) {
    .cr-cta .overlay .cta-mug-img {
        display: none;
    }
}

@media (max-width: 991px) {
    .cr-cta {
        padding: 80px 15px;
    }
    .cr-cta .cta-content-wrapper{
        display:block;
    }
    .cr-cta .cta-img-area {
        width: 100%;
        min-height: auto;
    }
    .cr-cta .cta-content {
        padding-left: 0;
        text-align: center;
        padding-top: 40px;
        min-height: auto;
        max-width: 100%;
    }
    .cr-cta .cta-content h2 {
        margin: 0 auto 42px;
    }
}

`;


