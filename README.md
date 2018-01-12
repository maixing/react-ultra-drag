### Installing

$ npm install react-ultra-drag -save

### Exports

The default export is <UltraDrag>

```
    import UltraDrag from 'react-ultra-drag';
```

### Demo source

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
        onResize(rect,prerect){
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
                        onResize={this.onResize}
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

```
   scale:number             //default=1,Scale remains the same as the parent element
   enableDrag:boolean       //default=true,Is it allowed to drag and drop
   onMove:function          //Position change callback function,return currentRect and preRect
   onResize:function        //width or height change callback function,return currentRect and preRect
   resizeIcon:component     // React Component,define drag icon
   bound:object             //is a boundary,{left:0,top:0,width:0,heigh:0}
   dragSize:number          //drag icon size default 10
   getBounder:function      //return currentRect
```

### NOTES

    *parent container is fied or relative or absolute