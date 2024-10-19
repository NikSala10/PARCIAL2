import { dispatch } from "../../store/store";
import { addListTaskItem } from "../../store/actions";
class   ProductForm extends HTMLElement  {
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'})
    }

    static get observedAttributes() {
        return ['form'];
    }

    attributeChangedCallback(propName : string, oldValue: string | undefined, newValue: string | undefined) {
        if (propName === 'form') {
            this.render(); 
          }
    }
    connectedCallback() { 
        this.render();

    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
             <h1>ADD PRODUCT</h1>
    		<form action="">
				<input id="title" type="text" placeholder="titulo">
				<input id="description" type="text" placeholder="escribe la descripcion">
				<input id="price" type="number" placeholder="price">
				<input id="category" type="text" placeholder="category">
				<input id="image" type="text" placeholder="image">
				<input id="submitSend" type="submit" value="añadir">
    		</form>
            `;

            
        const buttonsubmit = this.shadowRoot?.querySelector('form');
        const title = this.shadowRoot?.querySelector('#title') as HTMLInputElement;
        const price = this.shadowRoot?.querySelector('#price') as HTMLInputElement;
        const category = this.shadowRoot?.querySelector('#category') as HTMLInputElement;
        const image = this.shadowRoot?.querySelector('#image') as HTMLInputElement;
        const description = this.shadowRoot?.querySelector('#description') as HTMLInputElement;
        buttonsubmit?.addEventListener('submit',() =>  {
            dispatch(addListTaskItem(
                 {
                    title: title ? title.value : 'No title',
                    description: description ? description.value : 'No description',
                    image: image ? image.value : 'No title',
                    price: price ? price.value : 'No title',
                    category: category ? category.value : 'No description',
                    state: false,
                 }
            ))
        });

        }
    }

}

customElements.define('product-form',ProductForm);
export default ProductForm;