import css from 'styled-jsx/css';
export default css`

.cr-jobs {
    padding: 150px 0 160px;
}
.cr-jobs .overlay {
    background-color: #00146B;
    width: 91.5%;
    border-radius: 0 50px 0 0;
}

.cr-jobs .section-title {
    text-align: center;
    max-width: 730px;
    margin: 0 auto 70px;
}
.cr-jobs .section-title h3 {
    margin-bottom: 15px;
    line-height: 1.3;
}

.cr-jobs .no-job-title,
.cr-jobs .single-job {
    background: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 34px 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.cr-jobs .no-job-title,
.cr-jobs .single-job:last-child {
    margin-bottom: 0;
}

.cr-jobs .no-job-title {
    text-align: center;
    max-width: 950px;
    margin: 0 auto;
}

.cr-jobs .no-job-title:before,
.cr-jobs .single-job:before {
    content: "";
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    width: calc(100% - 30px);
    height: 100%;
    position: absolute;
    left: 15px;
    top: 10px;
    z-index: 0;
}

.cr-jobs .single-job .job-left {
    max-width: 430px;
    position: relative;
    z-index: 1;
}
.cr-jobs .single-job .job-center {
    width: 200px;
    text-align: center;
    position: relative;
    z-index: 1;
}
.cr-jobs .single-job .job-right {
    width: 194px;
    position: relative;
    z-index: 1;
}

.cr-jobs .single-job .job-title {
    color: #000;
    line-height: 1.2;
}
.cr-jobs .single-job .job-title .vacancy {
    background: #00B4FF;
    color: #fff;
    font-size: 16px;
    width: 24px;
    height: 24px;
    text-align: center;
    padding: 4px;
    line-height: 1;
    border-radius: 50%;
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -12px;
}

.cr-jobs .single-job .job-type {
    background: #E3E9FF;
    border-radius: 4px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #00146B;
    font-size: 16px;
    padding: 14px 27px 11px;
}

.cr-jobs .single-job .experience {
    color: #00146b99;
    font-size: 16px;
    margin-top: 7px;
}
.cr-jobs .single-job .job-link .view-more:hover svg rect {
    stroke-dasharray: 94,360;
    stroke-dashoffset: 222;
}


@media (max-width: 1600px) {
    .cr-jobs .overlay {
        width: 100%;
        border-radius: 0;
    }
}

@media (max-width: 1199px) {
    .cr-jobs {
        padding: 90px 0 100px;
    }
    .cr-jobs .section-title {
        margin: 0 auto 50px;
    }

    .cr-jobs .single-job .job-left {
        max-width: 100%;
        margin-bottom: 30px;
    }
    .cr-jobs .single-job .job-center {
        width: calc(100% - 194px);
        text-align: left;
    }
    

}

@media (max-width: 767px) {
    .cr-jobs .no-job-title,
    .cr-jobs .single-job {
        padding: 24px 30px;
        text-align: center;
    }
    .cr-jobs .single-job .job-center {
        width: 100%;
        margin-bottom: 15px;
        text-align: center;
    }
    .cr-jobs .single-job .job-right {
        margin: 0 auto;
    }

}

@media (max-width: 575px) {
    .cr-jobs .single-job .job-title {
        font-size: 22px;
    }
    .cr-jobs .single-job .job-title .vacancy {
        top: 0;
    }

}


`;
