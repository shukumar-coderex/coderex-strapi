import css from 'styled-jsx/css';
export default css`


    .service-list-section {
        padding-top: 143px;
        padding-bottom: 150px;
        margin-bottom: 150px;
        background: #00146b;
    }
    .service-list-section .overlay {
        width: 150px;
        background: #fff;
        box-shadow: 0 0px 0px 2px #fff;
    }
    .service-list-section .section-title {
        width: 28%;
    }
    .service-list-section .service-content {
        display: flex;
        flex-flow: row wrap;
    }
    .service-list-section .section-title h2 {
        color: #fff;
    }
    .service-list-section .service-list {
        width: 72%;
        padding-left: 60px;
    }
    .service-list-section .service-list .sub-heading {
        font-size: 15px;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 0.5px;
        margin-bottom: 20px;
    }
    .service-list-section .service-list .bottom-text {
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        letter-spacing: 0.5px;
        font-family: inherit;
        margin-top: 20px;
    }
    .service-list-section .service-list ul {
        display: flex;
        flex-flow: row wrap;
    }
    .service-list-section .service-list ul li {
        width: calc(50% - 25px);
        padding-right: 30px;
        padding-left: 25px;
        margin-bottom: 26px;
        font-size: 20px;
        line-height: 28px;
        display: inline-block;
        color: #fff;
        position: relative;
        font-family: 'CircularStd-Medium';
        transition: all 0.3s ease;
    }
    .service-list-section .service-list ul li:before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: #00b4ff;
        left: 0;
        top: 10px;
    }
    .service-list-section .service-list ul li:hover {
        color: #00b4ff;
    }
    .service-list-section .service-list .schedule-call {
        margin-top: 50px;
    }
    


    @media (max-width: 1700px) {
        .service-list-section .overlay {
            width: 80px;
        }
        .service-list-section .service-content {
            padding-left: 80px;
        }
    }

    @media (max-width: 1500px) {
        .service-list-section {
            margin-top: 0;
        }
        .service-list-section .overlay {
            display: none;
        }
        .service-list-section .service-content {
            padding-left: 0;
        }
    }

    @media (max-width: 1300px) {
        
        .service-list-section {
            padding-top: 93px;
            padding-bottom:100px;
            margin-bottom: 130px;
        }
        .service-list-section .service-content {
            display: block;
        }
        .service-list-section .section-title {
            width: 100%;
            margin-bottom: 50px;
        }
        .service-list-section .service-list {
            width: 100%;
            padding-left: 0;
        }
        .service-list-section .service-list ul li:before {
            top: 10px;
        }
    }

    @media (max-width: 991px) {
        .service-list-section {
            padding-top: 73px;
            padding-bottom: 80px;
            margin-bottom: 90px;
        }
        .service-list-section .service-list .bottom-text {
            margin-top: 0;
        }
        
    }

    @media (max-width: 767px) {
        .service-list-section .service-list ul li {
            width: 100%;
            padding-right: 0;
        }
        .service-list-section .service-list .schedule-call {
            margin-top: 20px;
        }
        
    }


    
    







`;
