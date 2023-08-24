import css from 'styled-jsx/css';
export default css`
    
    .cr-work-approach {
        padding: 160px 0;
    }
    .cr-work-approach .overlay {
        background-color: #05155E;
        width: 91%;
        left: inherit;
        right: 0;
    }
    .cr-work-approach .single-approach {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 150px;
    }
    .cr-work-approach .single-approach:last-child {
        margin-bottom: 0;
    }
    .cr-work-approach .single-approach:nth-child(odd) {
        flex-flow: row-reverse;
    }
    .cr-work-approach .single-approach .approach-img {
        width: 40%;
    }
    .cr-work-approach .single-approach .approach-content {
        width: 60%;
        padding-left: 180px;
        padding-right: 0;
    }
    .cr-work-approach .single-approach:nth-child(odd) .approach-content {
        padding-right: 180px;
        padding-left: 0;
    }

    .cr-work-approach .single-approach .approach-content h5 {
        max-width: 360px;
        width: 100%;
    }
    .cr-work-approach .single-approach .approach-content .description {
        max-width: 490px;
        width: 100%;
        color: rgba(255,255,255,0.7);
        margin-top: 27px;
    }

    
    @media (max-width: 1650px) {
        .cr-work-approach .overlay {
            border-radius: 0;
            width: 100%;
        }
    }


    @media (max-width: 1199px) {
        .cr-work-approach {
            padding: 100px 0;
        }
        .cr-work-approach .single-approach {
            margin-bottom: 80px;
        }
        .cr-work-approach .single-approach:nth-child(odd) .approach-content {
            padding-right: 20px;
            width: 50%;
        }
        .cr-work-approach .single-approach .approach-img {
            width: 50%;
        }

        .cr-work-approach .single-approach .approach-content {
            width: 50%;
            padding-left: 20px;
            padding-right: 0;
        }
    }

    @media (max-width: 991px) {
        .cr-work-approach .single-approach {
            margin-bottom: 60px;
            display: block;
        }
        .cr-work-approach .single-approach .approach-img {
            width: 100%;
            text-align: center;
            margin-bottom: 30px;
        }
        .cr-work-approach .single-approach .approach-img img {
            margin: 0 auto;
        }
        .cr-work-approach .single-approach:nth-child(odd) .approach-content {
            padding-right: 0;
            width: 100%;
            text-align: center;
        }
        .cr-work-approach .single-approach .approach-content h5 {
            max-width: 100%;
            width: 100%;
        }
        .cr-work-approach .single-approach .approach-content .description {
            max-width: 100%;
            width: 100%;
        }
        .cr-work-approach .single-approach .approach-content {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            text-align: center;
        }


    }
    


   



`;
