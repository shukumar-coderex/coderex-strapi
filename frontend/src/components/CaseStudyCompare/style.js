import css from 'styled-jsx/css';
export default css`


.case-study-compare {
    padding-top: 143px;
}
.case-study-compare .section-title {
    width: 80%;
    margin-bottom: 60px;
}
.case-study-compare .section-title h4 {
    font-family: 'Circular Std Bold';
    color: #071e3d;
    margin-bottom: 27px;
    line-height: 1.2;
}
.compare-imgs {
    padding-bottom: 150px;
    border-bottom: 1px solid #f5f0f0;
}
.compare-imgs .img-handler{
    background: #00b4ff;
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    text-align: center;
    font-size: 25px;
    line-height: 40px;
    color: #fff;
}


@media (max-width: 1199px) {
    .case-study-compare {
        padding-top: 90px;
    }

    .compare-imgs {
        padding-bottom: 50px;
    }

}

@media (max-width: 767px) {
    .case-study-compare {
        padding-top: 60px;
    }
    .case-study-compare .section-title {
        margin-bottom: 30px;
        width: 100%;
    }

}


`;
