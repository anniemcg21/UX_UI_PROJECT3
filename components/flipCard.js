const flipCardTemplate = document.createElement('template');
flipCardTemplate.innerHTML = `
<!-- Card Flip 1 https://codepen.io/okz/pen/QZYKZx-->
<div class="card-flip">
    <div class="flip">
        <div class="front">
            <!-- front content -->
            <div class="card">
            <div class="card-img-front">
                <slot name="card-image-front" class="card-img-top"></slot>
            </div>
            <div class="card-block">
                <h4 class="card-title">
                    <slot name="card-title-front"></slot>
                </h4>
                <p class="card-text">
                    <slot name="card-text-front"></slot>
                </p>
                <p class="card-text">
                    <slot name="card-location-front"></slot>
                </p>
            </div>
            </div>
        </div>
        <div class="back">
            <!-- back content -->
            <div class="card">
            <div class="card-block">
                <h4 class="card-title">Card Flip</h4>
                <h6 class="card-subtitle text-muted">Support card subtitle</h6>
            </div>
            <img data-src="holder.js/100px180/?text=Image" alt="Image [100%x180]"
                style="height: 180px; width: 100%; display: block;">
            <div class="card-block">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
            </div>
        </div>
    </div>
</div>


<script>
    document.querySelector(".card-flip").classList.toggle("flip");
</script>


<style>
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
    }
    
    .front {
        z-index: 2;
        transform: rotateY(0deg);
    }
    
    .back {
        transform: rotateY(180deg);
    }

    .card-img-top::slotted {
        height: 180px;
        width: 100%;
        display: block;
    }
</style>
<!-- End Card Flip 1 -->
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