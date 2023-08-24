import css from 'styled-jsx/css';
export default css`
    
    .family-area { 
        padding-top: 150px;
        background-color:#F3F7FF;
    }
    .family-area .family-area-content { 
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
    }
    .family-area .family-area-content .section-title { 
        width: 100%;
        max-width: 705px;
        margin: 0 auto 70px;
        text-align: center;
    }
    .family-area .family-area-content .section-title h3 { 
        margin-bottom: 35px;
        line-height: 1.3;
    }
    .family-area .family-area-content .section-title .description { 
        color: rgba(35, 37, 45, 0.8);
    }


    @media (max-width: 1199px) {
        .family-area {
            padding-top: 90px;
        }
        .family-area .family-area-content .section-title {
            margin: 0 auto 50px;
        }
        .family-area .family-area-content .section-title h3 {
            margin-bottom: 20px;
        }
    }

    


   



`;
