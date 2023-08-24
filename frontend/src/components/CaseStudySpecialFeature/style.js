import css from 'styled-jsx/css';
export default css`

.special-feature {
    padding-top: 145px;
    padding-bottom: 135px;
}
.special-feature .special-feature-content {
    width: 100%;
    max-width: 1130px;
}

.special-feature .special-feature-content h4 {
    font-family: 'Circular Std Bold';
    color: #071e3d;
    margin-bottom: 27px;
    line-height: 1.2;
}

@media (max-width: 1199px) {
    .special-feature {
        padding-top: 90px;
        padding-bottom: 85px;
    }
}

@media (max-width: 767px) {
    .special-feature {
        padding-top: 60px;
        padding-bottom: 55px;
    }
}


`;
