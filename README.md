### Installing

$ npm install react-ultra-drag -save

### Exports

The default export is <UltraDrag>

```
    import UltraDrag from 'react-ultra-drag';
```

### [Demo](https://maixing.github.io/drag/index.html#/)

### Example

```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import UltraDrag from 'react-ultra-drag';
    const backgroundColor = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    };
    class App extends React.Component {
        constructor(props) {
            super(props);
        }
        onChange(rect){
        }
        getResizeIcon(){
            return <div style={{
                width: '20px',
                height: '20px',
                right: '0px',
                bottom: '0px',
                position: 'absolute',
                display: 'inline-block',
                backgroundImage: `url(${require('./ultra/resize3.png')})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20px 20px'
            }}></div>
        }
        render() {
            return (
                <div style={{
                    background: '#3a7bd5',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    backgroundImage: `url(${require('./bg.jpg')})`,
                    transform:'scale(0.5)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        verticalAlign: 'baseline',
                        padding: 10,
                    }}>
                    </div>
                    <UltraDrag
                        style={backgroundColor}
                        bound={{left:20,top:20,height:200,width:200}}
                        onChange={this.onChange}
                        resizeIcon={this.getResizeIcon()} ref={(component) => {
                            this.dragcp = component;
                    }}>
                    </UltraDrag>
                </div>
            );
        }
    }
    ReactDOM.render(<App/>, document.getElementById('main'));
```

### API

```js
//default=1,Scale remains the same as the parent element
scale:number                 
//default=true,Is it allowed to drag and drop     
enableDrag:boolean           
//Position or size change callback function,return currentRect 
onChange:function           
// React Component,define drag icon  
resizeIcon:component        
//is a boundary,{left:0,top:0,width:0,heigh:0}
bound:object                   
//drag icon size default 10   
dragSize:number              
//return currentRect  
getBounder:function          
//update bound
updateBound:function		              
//move callback
onMove:function		                      
//is true,can drag
clicked:boolean                          
//is true,grouped      
groupSeleced:boolean                     

```

### NOTES

    *parent container is fied or relative or absolute