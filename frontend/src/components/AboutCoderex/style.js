import css from 'styled-jsx/css';
export default css`

    /*.team__work__section { 
        display: grid;
        grid-template-columns: 5fr 7fr;
        grid-gap: 140px;
        margin: 0 75px 0 auto;
        max-width: 1540px;
        padding: 166px 0 180px;
        align-items: center;
        padding-right: 15px;
        padding-left: 15px;
    }*/

    .team__work__section {
        padding: 166px 0 180px;
    }

    .team__work__content__wrapper {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }
    .team__work__content {
        width: 50%;
        padding-right: 120px;
    }

    .team__work__img {
        width: 50%;
    }
    .team__work__img img {
        max-width: 850px;
    }
    .team__work__content h3 { 
        padding-bottom: 25px;
    }
    
    .team__work__content a { 
        margin-top: 50px;
    }

    .team__work__content .explore-team:hover svg rect {
        stroke-dasharray: 117,390;
        stroke-dashoffset: 246;
    }


    @media (max-width: 1700px) {
        .team__work__img img {
            max-width: 100%;
        }
        .team__work__content {
            width: 45%;
            padding-right: 80px;
        }
        .team__work__img {
            width: 55%;
        }
        .team__work__img img {
            max-width: 100%;
        }

    }

    @media (max-width: 1300px) {
        .team__work__section {
            padding: 100px 0;

        }
        .team__work__content {
            padding-right: 50px;
        }

    }

    @media (max-width: 1199px) {
        .team__work__content__wrapper {
            flex-flow: column-reverse;
        }
        .team__work__img {
            width: 100%;
            margin-bottom: 30px;
        }
        .team__work__img img {
            margin: 0 auto;
        }
        .team__work__content {
            padding-right: 0;
            text-align: center;
            width: 100%;
            max-width: 650px;
            margin: 0 auto;
        }

    }

    @media (max-width: 991px) {
        .team__work__content a {
            margin-top: 20px;
        }

    }


    @media (max-width: 575px) { 
        .team__work__content h3 {
            padding-bottom: 16px;
            text-align: center;
        }

        .team__work__content .description p { 
            text-align: center;
        }

        .team__work__section {
            padding: 60px 0;
        }

    }





   



`;
