import css from 'styled-jsx/css';
export default css`

.cr-perks-benefits {
    padding: 144px 0 143px;
}

.cr-perks-benefits .overlay {
    background: #FFFFFF;
    border-radius: 0 0 0 50px;
    width: 91%;
    left: inherit;
    right: 0;
}
.cr-perks-benefits .section-title {
    text-align: center;
    max-width: 663px;
    margin: 0 auto 55px;
}
.cr-perks-benefits .section-title h5 {
    font-size: 36px;
    margin-bottom: 15px;
    color: #23252dcc;
}
.cr-perks-benefits .section-title .description {
    color: rgba(35, 37, 45, 0.8);
}

.cr-perks-benefits .benefit-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.cr-perks-benefits .benefit-wrapper .single-benefit {
    box-shadow: 0px 1px 2px #D6E3FA;
    border-radius: 15px;
    padding: 16px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 17px;
    width: calc(100% / 4 - 34px);
}
.cr-perks-benefits .benefit-wrapper .single-benefit .icon {
    width: 76px;
    height: 76px;
    background: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0px 10px 50px rgba(22, 85, 112, 0.1);
}
.cr-perks-benefits .benefit-wrapper .single-benefit .benefit-title {
    width: calc(100% - 76px);
    padding-left: 25px;
    line-height: 1.3;
}


@media (max-width: 1650px) {
    .cr-perks-benefits .overlay {
        border-radius: 0;
        width: 100%;
    }
}

@media (max-width: 1300px) {
    .cr-perks-benefits .benefit-wrapper .single-benefit {
        margin: 12px;
        width: calc(100% / 4 - 24px);
    }

    .cr-perks-benefits .benefit-wrapper .single-benefit .benefit-title {
        padding-left: 15px;
        line-height: 1.3;
    }
}

@media (max-width: 1199px) {
    .cr-perks-benefits {
        padding: 94px 0 82px;
    }
    .cr-perks-benefits .section-title {
        margin: 0 auto 35px;
    }
    .cr-perks-benefits .benefit-wrapper .single-benefit {
        width: calc(100% / 3 - 24px);
    }

}

@media (max-width: 991px) {
    .cr-perks-benefits .benefit-wrapper .single-benefit {
        width: calc(100% / 2 - 24px);
    }

}

@media (max-width: 767px) {
    .cr-perks-benefits .benefit-wrapper .single-benefit {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }

    .cr-perks-benefits .section-title h5 {
        font-size: 28px;
        line-height: 1.3;
    }

}



`;
