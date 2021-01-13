const flipCardFaqTemplate = document.createElement('template');
flipCardFaqTemplate.innerHTML = `
<div class="card-flip-faq">
    <div class="flip">
        <div class="front">
            <!-- front content -->
            <div class="card">
                <div class="card-front__image">
                    <slot name="card-image-front" class="card-front__image-slot"></slot>
                </div>
                <div class="card-front__block--details">
                    <div class="card-front__details">
                        <slot name="card-details-front"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="back">
            <!-- back content -->
            <d class="card">
                <div class="card-back__header">
                    <div class="card-back__image">
                        <slot name="card-image-back" class="card-back__image-slot"></slot>
                    </div>
                    <div class="card-back__title">
                        <slot name="card-subtitle-back"></slot>
                    </div>
                </div>
                <div class="card-back__description">
                    <slot name="card-back-description"></slot>
                </div>
                <img class="card-back__divider" src="images/cardSnowDivider.svg" alt="...">
                <div class="card-back__block">
                    <slot name="card-text-back" class="card-back__text">About</slot>
                </div> 
                <div class="card-back__paw">
                    <img src="images/iconPaw.svg">
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    document.querySelector(".card-flip-faq").classList.toggle("flip");
</script>


<style>
    /* Card Front */
    .card-front__block--details {
        text-align: center;
    }
    .card-front__image {
        text-align: center;
        padding-top: 40px;
    }
    .card-front__details {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 24pt;
        font-weight: bold;
        line-height: 150%;
        letter-spacing: 2px;
        color: #FDFEFF;
        padding: 24px 16px;
    }
    .card-front__image-slot::slotted {
        height: 180px;
        width: 100%;
        display: block;
    }
    .card-front__title {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 24pt;
        font-weight: bold;
        color: #CEE1F2;
        letter-spacing: 2px;
        padding-right: 8px;
        padding-top: 5px;
    }


    /* Card Back */
    .card-back__header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 16px;
    }

    .card-back__image {
        padding-right: 16px;
    }

    .card-back__title {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 14pt;
        font-weight: 400;
        color: #FDFEFF;
        padding-right: 8px;
        padding-top: 5px;
    }

    .card-back__description {
        font-family: 'Nunito', sans-serif;
        font-size: 14pt;
        line-height: 150%;
        color: #FDFEFF;
        padding: 0px 16px;
        margin-top: 1rem;
    }

    .card-back__divider {
        width: 255px;
    }

    .card-back__block {
        padding-left: 16px;
        padding-right: 16px;
        margin-top: 1rem;
    }

    .card-back__text {
        flex-grow: 1;
        align-self: center;
        font-family: 'Nunito', sans-serif;
        font-size: 14pt;
        line-height: 150%;
        color: #6A747D;
        padding: 0px 16px;
    }
    .card-back__paw {
        display: flex;
        justify-content: flex-end;
        padding-right: 16px;
        margin-top: 3rem;
    }

    /* Card Flip Animation */
    .card-flip-faq {
        perspective: 1000px;
    }

    .card-flip-faq:hover .flip, .card-flip-faq.hover .flip {
        perspective: 1000px;
        transform: rotateY(180deg);
    }
    
    .card-flip-faq,
    .front,
    .back {
        width: 100%;
        height: 480px;
    }
    
    .flip {
        transition: 0.6s;
        transform-style: preserve-3d;
        position: relative;
    }
    
    .front,
    .back {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0; 
        border-radius: 20px;
        box-shadow: 0 4px 4px  rgba(0,0,0,.5);
    }
    
    .front {
        z-index: 2;
        transform: rotateY(0deg);
        background-color: #6A747D;
    }
    
    .back {
        transform: rotateY(180deg);
        background-image: linear-gradient(to bottom, #6A747D, #6A747D 45%, #FDFEFF 45%);
    }
</style>
<!-- End Card Flip 1 -->
`;

class FlipCardFAQ extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(flipCardFaqTemplate.content.cloneNode(true));
    }
}

customElements.define('flip-card-faq', FlipCardFAQ);