import '../productItem/productItem'
import storage from '../../utils/storage';
import { getProducts } from '../../services/getProductsDta';
import { addObserver, appState, dispatch } from '../../store/store';
import ProductItem,  {Attribute} from "../productItem/productItem";

class ProductList extends HTMLElement  {
	datProducts: any[]=[]
	productItem: ProductItem[] =  [];
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
		addObserver(this)
    }

    static get observedAttributes() {
        return ['container'];
    }

    attributeChangedCallback(propName : string, oldValue: string | undefined, newValue: string | undefined) {
        if (propName === 'form') {
            this.render(); 
          }
    }
    
	async connectedCallback() {
        this.datProducts = await getProducts();
        this.createProductItem();
		this.render();

	
		}
	
		createProductItem ()  {
            this.datProducts.forEach((product: any) => {
                const taskitem = this.ownerDocument.createElement('product-item') as ProductItem;
                taskitem.setAttribute(Attribute.titleproduct, String(product.title));
                taskitem.setAttribute(Attribute.image, String(product.image));
                taskitem.setAttribute(Attribute.category, String(product.category));
                taskitem.setAttribute(Attribute.price, String(product.price));
                taskitem.setAttribute(Attribute.description, String(product.description));
                taskitem.setAttribute(Attribute.state, String(product.state));
                this.productItem.push(taskitem);
             
                });

                
        }

	render() {
		if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        
			<div class="container"></div>
    `;

	this.createProductItem();
	const container = this.shadowRoot?.querySelector('.container');
	this.productItem.forEach((product) => {
		container?.appendChild(product);
	});
	}

}
};

customElements.define('product-list', ProductList);
export default ProductList;