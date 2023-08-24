import css from 'styled-jsx/css';
export default css`
    
    .career__numberic-factor { 
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 40px;
        padding: 50px 40px 35px;
        border-radius: 20px;
        background-color:#fff;
        max-width: 1304px;
        margin: -160px auto 0;
        box-shadow: 0px 20px 100px rgba(0, 13, 67, 0.15);
    }

    .career__numberic-content { 
        text-align: center;
    }

    .career__numberic-content img { 
        height: 120px;
        margin: 0 auto 10px; 
    }
    .family-area-feature-img .facts-img {
        margin: 0 auto;
    }

    .career__numberic-content h2 { 
       font-size: 50px;
       color:#00146B;
    }

    .career__numberic-content h2 span { 
        font-size: 70px;
    }

    .career__numberic-content p { 
        font-size: 18px;
        line-height: 1.3;
        color: rgba(0, 20, 107, 0.6);
    }

    
    @media (max-width: 1300px) {
        .career__numberic-factor {
            grid-gap: 50px;
            padding: 40px 30px 35px;
        }
        .career__numberic-content h2 span {
            font-size: 50px;
        }
    
    }
    
    @media (max-width: 1199px) {
        .career__numberic-content h2 span {
            font-size: 45px;
        }

        .career__numberic-factor {
            grid-gap: 30px;
        }

        
    }
    
    @media (max-width: 991px) {

        .career__numberic-factor {
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
            padding: 40px 30px 35px;
        }
        .career__numberic-content img {
            height: 90px;
        }
    }


    @media (max-width: 575px) {

        .career__numberic-factor {
            grid-template-columns: 1fr;
            grid-gap: 40px;
            padding: 40px 20px 35px;
        }
        .career__numberic-content h2 {
            font-size: 34px;
        }
    }
    
    


   



`;
