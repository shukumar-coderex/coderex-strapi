import css from 'styled-jsx/css';
export default css`

.cr-hire {
    background: #fff;
}
.cr-hire .hire-content {
    max-width: 58%;
    margin-left: auto;
    min-height: 790px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 150px;
    margin-bottom: 80px;
}
.cr-hire .hire-content h2 {
    margin-bottom: 30px;
}
.cr-hire .hire-content .description{
    margin-bottom:45px;
}
.cr-hire .hire-content h2,
.cr-hire .hire-content p,
.cr-hire .hire-content .cr-btn-default {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
}



@media (min-width: 1922px) {
    .cr-hire .hire-illustration-wrapper {
        position: absolute;
        top: 0;
        right: 50%;
        height: 100%;
        width: 100%;
        max-width: 1920px;
        transform: translateX(50%);
    }
}

@media (max-width: 1700px) {
    .cr-hire .hire-illustration {
        max-width: 680px;
        width: 100%;
        left: -50px;
    }
    .cr-hire .hire-content {
        max-width: 50%;
        min-height: 640px;
    }
}

@media (max-width: 1500px) {
    .cr-hire .hire-illustration {
        max-width: 640px;
    }
    .cr-hire .hire-content {
        min-height: 603px;
    }
}

@media (max-width: 1300px) {
    .cr-hire .hire-illustration {
        max-width: 590px;
    }
    .cr-hire .hire-content {
        min-height: 556px;
        margin-top: 100px;
        margin-bottom: 28px;
    }
    
}

@media (max-width: 1199px) {
    .cr-hire .hire-illustration {
        max-width: 490px;
    }
    .cr-hire .hire-content {
        max-width: 52%;
        min-height: 462px;
    }
}

@media (max-width: 991px) {
    .cr-hire {
        padding-top: 100px;
        padding-bottom: 35px;
    }
    .cr-hire .hire-illustration {
        position: relative;
        top: inherit;
        left: inherit;
        display: block;
        margin: 0 auto 60px;
        padding: 0 15px;
        transform: inherit;
    }
    .cr-hire .hire-content {
        max-width: 100%;
        text-align: center;
        min-height: auto;
        margin: 0;
    }
    .cr-hire .hire-content .cr-btn-default {
        margin: 0 auto;
    }
}


@media (max-width: 767px) {
    .cr-hire {
        padding-top: 60px;
    }
}

@media (max-width: 575px) {
    .cr-hire .hire-illustration {
        max-width: 300px;
    }
}
`;
