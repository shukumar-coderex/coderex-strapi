import css from 'styled-jsx/css';
export default css`

.laptop-view {
    background: #f6f6f6;
    padding-top: 60px;
    min-height: 270px;
}

.laptop-view .overlay {
    background: #09254e;
    height: 370px;
    top: inherit;
    bottom: 0;
}

@media (max-width: 991px) {
    .laptop-view .overlay {
        height: 220px;
    }
}

@media (max-width: 575px) {
    .laptop-view .overlay {
        height: 120px;
    }
}



`;
