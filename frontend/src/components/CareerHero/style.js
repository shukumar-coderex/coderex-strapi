import css from 'styled-jsx/css';
export default css`
    
    .career__hero {
        overflow: hidden;
        padding: 160px 0 302px; 
    }

    .career__hero__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .career__hero__title {
        width: 40%;
        position: relative;
        padding: 40px 0 60px;
        
    }

    .career__hero__feature-img {
        width: 60%;
    }
    .career__hero__feature-img img {
        max-width: 912px;
        width: 100%;
    }

    .career__hero__title:before {
        content: "";
        position: absolute;
        left: 99%;
        top: 0;
        height: 100%;
        width: 80px;
        background: #08144b;
        z-index: 0;
        border-radius: 0 15px 15px 0;
    }

    .career__hero__title h1 {
        font-size: 80px;
        line-height: 1.25;
        color: #fff;
        z-index: 1;
        position: relative;
    }

    .career__hero__title p {
        font-size: 24px;
        font-weight: 400;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.8);
        z-index: 1;
        position: relative;
        padding-top: 15px;
    }

    .open-jobs {
        margin-top: 45px;

    }

    .career__hero__content .open-jobs:hover svg rect {
        stroke-dasharray: 87,347;
        stroke-dashoffset: 200;
    }


    

    @media (min-width: 1920px) {
        .career__hero__feature-img img {
            max-width: 1000px;
            width: auto;
        }
    
    }
    
    @media (max-width: 1600px) {
        .career__hero__feature-img img {
            max-width: 100%;
        }
    
    }

    @media (max-width: 1500px) {
        .career__hero__title {
            width: 45%;
        }
        .career__hero__feature-img {
            width: 55%;
        }
    
    }
    
    @media (max-width: 1300px) {
        .career__hero__title {
            width: 40%;
            padding: 40px 0;
        }
        .career__hero__title h1 {
            font-size: 65px;
            line-height: 1.1;
            
        }
        .career__hero__feature-img {
            width: 60%;
        }

        .career__hero__title p {
            padding-right: 10px;
        }
    
    }
    
    @media (max-width: 1199px) {
        .career__hero__title:before {
            width: 50px;
        }
        .career__hero__title h1 {
            font-size: 54px;
        }
        .career__hero__title  {
            position: relative;
            padding: 30px 0;
        }

        .career__hero__btn {
            border-radius: 50px;
            padding: 8px 40px;
            margin-top: 30px;
        }
    }
    
    @media (max-width: 991px) {

        .career__hero {
            padding: 140px 0 260px;
        }

        .career__hero__content {
            display: block;
        }

        .career__hero__title  {
            width: 100%;
            padding: 20px 0 30px;
            transform: none;
            text-align:center;
        }
        .career__hero__feature-img {
            width: 100%;
        }
        .career__hero__title p {
            padding-right: 0;
            font-size: 20px;
        }
        
    }
    
    @media (max-width: 767px) {
        .career__hero__title h1 {
            font-size: 44px;
        }
       
        .open-jobs {
            margin-top: 20px;
        }
    }
    
    @media (max-width: 575px) {
        .career__hero__feature-img img {
            max-width: 290px;
        }
    
    }
    


   



`;
