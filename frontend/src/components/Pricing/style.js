import css from 'styled-jsx/css';
export default css`
    
    .cr-pricing {
        background: #f3f7ff;
        padding-top: 200px;
        padding-bottom: 150px;
        position: relative;
    }
    .cr-pricing .overlay {
        overflow: hidden;
        top: -1px;
    }

    .cr-pricing .overlay:before {
        content: "";
        width: 100%;
        height: 0;
        position: absolute;
        top: 0;
        right: 0;
        border-top: 160px solid #ffffff;
        border-right: 2560px solid transparent;
    }
    .cr-pricing .section-title {
        margin-bottom: 75px;
    }
    .cr-pricing .section-title h2 {
        margin-bottom: 15px;
    }
    .cr-pricing .section-title p {
        max-width: 630px;
        width: 100%;
        margin: 0 auto;
    }
    .cr-pricing .pricing-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-left: -40px;
    }
    .cr-pricing .pricing-wrapper.junior-developer {
        display: none;
    }
    .cr-pricing .single-price-plan {
        border: 5px solid #fff;
        border-radius: 10px;
        margin-left: 40px;
        width: calc(100% / 3 - 40px);
        display: flex;
        flex-flow: column;
        align-self: stretch;
        box-shadow: 0px 25px 30px 0px rgba(194, 214, 255, 0.2);
    }
    .cr-pricing .single-price-plan .price-header {
        border-bottom: 1px solid #fff;
        padding: 50px 15px;
    }
    .cr-pricing .single-price-plan .price-header h6 {
        font-size: 18px;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 55px;
    }
    .cr-pricing .single-price-plan .price-header .plan-img{
        height: 200px; 
    }
    .cr-pricing .single-price-plan .price-body {
        padding-top: 51px;
        padding-bottom: 23px;
    }
    .cr-pricing .single-price-plan .price-body h5 {
        text-transform: capitalize;
    }
    .cr-pricing .single-price-plan .price-footer {
        padding-top: 23px;
        padding-bottom: 60px;
        margin-top: auto;
    }
    .cr-pricing .single-price-plan .price-footer h3 span {
        font-size: 15px;
        text-transform: uppercase;
    }
    .cr-pricing .single-price-plan .price-footer .price-btn {
        margin-top: 22px;
        width: 240px;
        padding: 0 30px;
    }
    .cr-pricing .single-price-plan .price-footer .price-btn:hover svg rect {
        stroke-dasharray: 157,536;
    }
    .cr-pricing .single-price-plan.active {
        background: #00146b;
        border-color: #00146b;
    }
    .cr-pricing .single-price-plan.active .price-header {
        border-bottom-color: #192e8e;
    }
    .cr-pricing .single-price-plan.active .price-header h6 {
        color: #fff;
    }
    .cr-pricing .single-price-plan.active .price-body h5 {
        color: #fff;
    }
    .cr-pricing .single-price-plan.active .price-body li {
        color: #fff;
    }
    .cr-pricing .single-price-plan.active .price-footer h3 {
        color: #00b4ff;
    }

    .cr-pricing .single-price-plan .price-footer h3,
    .cr-pricing .single-price-plan .price-body li,
    .cr-pricing .single-price-plan .price-body h5,
    .cr-pricing .single-price-plan .price-header h6,
    .cr-pricing .single-price-plan .price-header,
    .cr-pricing .single-price-plan{
        transition: all 0.3s ease;
    }



    .pricing-switcher {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }
    .pricing-switcher > span {
        font-size: 20px;
        color: #656464;
        text-transform: capitalize;
        transition: all 0.5s ease;
    }
    .pricing-switcher > span.active {
        color: #192e8e;
    }
    .pricing-switcher .switch-input {
        visibility: hidden;
        margin-left: -9999px;
        position: absolute;
        width: auto;
    }
    .pricing-switcher label {
        margin-bottom: 0;
        transition: all 0.3s ease;
    }
    .pricing-switcher .switch-input + label {
        display: block;
        position: relative;
        background: #e6e6e6;
        cursor: pointer;
        outline: none;
        border-radius: 80px;
        height: 19px;
        width: 36px;
        margin: 0 14px;
        top: 2px;
    }
    .pricing-switcher .switch-input:checked + label {
        border-color: #e0e2eb;
    }
    .pricing-switcher .switch-input + label:before, 
    .pricing-switcher .switch-input + label:after {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        left: 1px;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
    }
    .pricing-switcher .switch-input + label:before {
        right: 0px;
        background: transparent;
        border-radius: 75px;
    }
    .pricing-switcher .switch-input + label:after {
        content: "";
        border-radius: 100%;
        width: 13px;
        height: 13px;
        background: #00b4ff;
        top: 3px;
        left: 3px;
    }
    .pricing-switcher .switch-input:checked + label:after {
        left: 20px;
    }
    

    @media (max-width: 1700px) {
        .cr-pricing {
            padding-top: 160px;
        }
    }

    @media (max-width: 1300px) {
        .cr-pricing {
            padding-top: 136px;
            padding-bottom: 100px;
        }

    }

    @media (max-width: 1199px) {
        .cr-pricing {
            padding-top: 130px;
        }
        .cr-pricing .single-price-plan .price-header h6 {
            margin-bottom: 25px;
        }
        .cr-pricing .single-price-plan .price-body {
            padding-top: 30px;
        }
        .cr-pricing .single-price-plan .price-footer {
            padding-bottom: 30px;
        }
    }

    @media (max-width: 991px) {
        .cr-pricing {
            padding-top: 100px;
        }

        .cr-pricing .section-title {
            margin-bottom: 35px;
        }
        .cr-pricing .pricing-wrapper {
            display: block;
            margin-left: 0;
        }
        .cr-pricing .section-title h2 {
            margin-bottom: 5px;
        }
        .cr-pricing .single-price-plan {
            margin-left: 0;
            width: 100%;
            max-width: 450px;
            margin: 0 auto 40px;
        }

        .cr-pricing .single-price-plan:last-child {
            margin-bottom: 0;
        }
        
    }

    @media (max-width: 575px) {
        .cr-pricing {
            padding-top: 100px;
        }
        .cr-pricing .single-price-plan .price-footer .price-btn {
            padding: 0 25px;
            border-radius: 50px;
        }
        .pricing-switcher {
            margin-bottom: 20px;
        }

    }

    @media (max-width: 420px) {
        .pricing-switcher > span {
            font-size: 15px;
        }
    }

    
 
 


`;
