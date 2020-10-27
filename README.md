# Customizable Modal 

Are you tired of the "custom modal" that dont let you modify the styles of that component? You are in the right place:

## Dependencies

-----------------------

## Installation



```bash
npm install customizable-modal-react

```

## Usage

```javascript
import CustomizableModalReact from 'customizable-modal-react';
 <CustomModal
            isVisible={isVisibleModal}
            contentStyle={{border: '1px solid red', display: 'flex', flexDirection: 'column'}}
            content={
                <div>
                    <div style={{fontSize: '1.3rem'}}>Example content</div>
                    <div style={{position: 'absolute', bottom: '0', right: '0'}}><button>button 1</button> <button onClick={()=>{setIsVisibleModal(false)}}>button 2</button></div>
                </div>
            }
        />
```

## Props 


**isVisible** bool, is visible modal


**content** element, the content of the modal


**contentStyle** object, the styles if you want to change




## License
[MIT](https://choosealicense.com/licenses/mit/)