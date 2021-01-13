const flipCardTemplate = document.createElement('template');
flipCardTemplate.innerHTML = `
<!-- Card Flip 1 https://codepen.io/okz/pen/QZYKZx-->
<div class="card-flip">
    <div class="flip">
        <div class="front">
            <!-- front content -->
            <div class="card">
                <div class="card-front__image">
                    <slot name="card-image-front" class="card-front__image-slot"></slot>
                </div>
                <div class="card-front__block--name">
                    <div class="card-front__title">
                        <slot name="card-title-front"></slot>
                    </div>
                    <img class="card-back__gender" src="images/iconMale.svg">
                </div>
                <div class="card-front__block--details">
                    <div class="card-front__details">
                        <slot name="card-details-front"></slot>
                    </div>
                    <div class="card-front__location">
                        <slot name="card-location-front"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="back">
            <!-- back content -->
            <div class="card">
                <div class="card-back__header">
                    <div class="card-back__image">
                        <slot name="card-image-back" class="card-back__image-slot"></slot>
                    </div>
                    <div class="card-back__title">
                        <slot name="card-subtitle-back"></slot>
                    </div>
                    <img class="card-back__gender" src="images/iconMale.svg">
                </div>
                <div class="card-back__description">
                    <slot name="card-back-description"></slot>
                </div>
                <img class="card-back__divider" src="images/cardSnowDivider.svg" alt="...">
                <div class="card-back__block--1">
                    <div class="card-back__subtitle">About</div>
                    <div class="card-back__subtitle">Good with</div>
                </div>
                <div class="card-back__block--2">
                    <img class="card-back__check" src="images/iconCheckMark.svg">
                    <div class="card-back__text">Vaccinated</div>
                    <img class="card-back__dog" src="images/iconDog.svg">
                    <img class="card-back__children" src="images/iconChildren.svg">
                </div>
                <div class="card-back__block--3">
                    <img class="card-back__check" src="images/iconCheckMark.svg">
                    <div class="card-back__text">
                        <slot name="card-fixed-back"></slot>
                    </div>
                    <div class="card-back__subtitle">Avoid</div>
                </div>
                <div class="card-back__block--4">
                    <img class="card-back__check" src="images/iconCheckMark.svg">
                    <div class="card-back__text">House-trained</div>
                    <img class="card-back__cat" src="images/iconCat.svg">
                </div>
                <div class="card-back__block--5">
                    <img class="card-back__check" src="images/iconCheckMark.svg">
                    <div class="card-back__text">Basic Commands</div>
                </div>
                <div class="card-back__block--6">
                    <a class="card-back__link" href="https://www.petfinder.com/member/us/ca/yucca-valley/luna-siberian-rescue-ca2462/">Petfinder.com</a>
                    <img class="card-back__paw" src="images/iconPaw.svg">
                </div>
                
            </div>
        </div>
    </div>
</div>


<script>
    document.querySelector(".card-flip").classList.toggle("flip");
</script>


<style>
    /* Card Front */
    .card-front__block--name {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 0px 0px 10px;
    }

    .card-front__block--details {
        text-align: center;
    }

    .card-front__image {
        text-align: center;
        padding-top: 40px;
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

    .card-front__details,
    .card-front__location {
        font-family: 'Nunito', sans-serif;
        font-size: 16pt;
        line-height: 150%;
        color: #FDFEFF;
        padding: 0px 16px;
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
        font-weight: bold;
        color: #CEE1F2;
        letter-spacing: 2px;
        padding-right: 8px;
        padding-top: 5px;
    }

    .card-back__gender {
        width: 20px;
    }

    .card-back__description {
        font-family: 'Nunito', sans-serif;
        font-size: 14pt;
        line-height: 150%;
        color: #FDFEFF;
        padding: 0px 16px;
    }

    .card-back__divider {
        width: 255px;
    }

    .card-back__block--1 {
        display: flex;
        padding-left: 16px;
        padding-right: 16px;
        justify-content: space-between;
    }
    .card-back__block--2 {
        display: flex;
        padding-left: 16px;
        padding-right: 16px;
        margin: 6px 0px;
    }
    .card-back__block--3 {
        display: flex;
        padding-left: 16px;
        padding-right: 16px;
    }
    .card-back__block--4 {
        display: flex;
        padding-left: 16px;
        padding-right: 16px;
        margin: 6px 0px;
    }
    .card-back__block--5 {
        display: flex;
        padding-left: 16px;
        padding-right: 16px;
        margin: 12px 0px;
    }
    .card-back__block--6 {
        display: flex;
        justify-content: space-between;
        padding-left: 16px;
        padding-right: 16px;
        margin: 6px 0px;
    }

    .card-back__subtitle {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 18pt;
        font-weight: bold;
        color: #6A747D;
    }

    .card-back__check {
        width: 20px;
        padding-right: 20px;
    }

    .card-back__text {
        flex-grow: 1;
        align-self: center;
    }

    .card-back__dog {
        flex-grow: 2;
    }

    .card-back__children {
        flex-grow: 1;
    }

    .card-back__link {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 14pt;
        color: #56414F;
    }

    /* Card Flip Animation */
    .card-flip {
        perspective: 1000px;
    }

    .card-flip:hover .flip, .card-flip.hover .flip {
        perspective: 1000px;
        transform: rotateY(180deg);
    }
    
    .card-flip,
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
`;

class FlipCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(flipCardTemplate.content.cloneNode(true));
    }
}

customElements.define('flip-card', FlipCard);