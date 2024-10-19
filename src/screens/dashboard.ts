import '../components/productItem/productItem'
import '../components/productList/productList'
import '../components/productForm/productForm'
import { getProducts } from '../services/getProductsDta';
import { appState } from '../store/store';
import  {addObserver} from '../store/store';
import ProductItem,  {Attribute} from '../components/productItem/productItem';

class Dashboard extends HTMLElement {

    products: ProductItem[]=[]
    dataProducts: any[]=[]
        constructor()  {
            super();
            this.attachShadow( {mode: 'open'});
            addObserver(this);
           
        }
    
        async connectedCallback() {
            this.dataProducts = await getProducts();
            this.createCardsProduct();
            this.render();
            
        }

        createCardsProduct ()  {
            this.dataProducts.forEach(productData => {
                const product = this.ownerDocument.createElement('product-list') as ProductItem;
                product.setAttribute(Attribute.image, productData.image);
                product.setAttribute(Attribute.titleproduct, productData.title);
                product.setAttribute(Attribute.description, productData.description);
                product.setAttribute(Attribute.category, productData.category);
                product.setAttribute(Attribute.price, productData.price);
    
                this.products.push(product);
             
                });

                
        }
       
        render()  {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
              
           <h1>PRODUCTS</h1>
           <product-form></product-form>
                <div class="container-products"></div>
        
                <hr>
               
                `;
                const container = this.shadowRoot?.querySelector('.container-products');
                this.products.forEach((product) => {
                    container?.appendChild(product);
                });
               
				
            };
            
        }
    
    }

customElements.define('app-dashboard', Dashboard);