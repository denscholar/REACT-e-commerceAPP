import './previewCollection.css';
import CollectionItem from '../collectionItem/collectionItem';

const PreviewCollection = ({title, items}) => {
    return ( 
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, index) => index < 4 ).map(({id, name, price, imageUrl})=>(
                    // <div key={item.id}>{item.name}</div>
                    <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl}/>
                ))}

            </div>
        </div>

     );
}
 
export default PreviewCollection;