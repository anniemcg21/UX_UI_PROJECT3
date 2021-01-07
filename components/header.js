const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<h1>asd;lfkj</h1>

<style></style>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    }
}

customElements.define('custom-header', Header);