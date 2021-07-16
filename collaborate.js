const Y = require('yjs')
const WebsocketProvider = require('y-websocket').WebsocketProvider
const CodemirrorBinding = require('y-codemirror').CodemirrorBinding
const Editor = require('./editor')

const collaborate = {
    initCollaborate(editor, room) {
        const ydoc = new Y.Doc()
        const provider = new WebsocketProvider(
            'wss://demos.yjs.dev',
            room,
            ydoc
        )
        const ytext = ydoc.getText('codemirror')
        const binding = new CodemirrorBinding(ytext, editor, provider.awareness)
        const socket = provider.ws
        //const commands = ydoc.getArray('commands')
        //console.log('log', commands)
        // socket.addEventListener('message',function(event){
        //     const msg = JSON.parse( JSON.stringify(event.data) )
        //     console.log('socket event',ydoc)

        // })
        return { provider, ydoc, ytext, Y, socket, binding }
    },
    setupCollaborate(cm, marker) {
        const { socket, provider, binding, ytext } = collaborate.initCollaborate(cm, marker)
        //collaborate.commands = commands
        window.socket = socket
        window.binding = binding
        window.provider = provider
        window.ytext = ytext
        //window.commands = commands

        ytext.observe(events => {
            console.log('com', ytext.toString())
            this.runCode(marker,ytext.toString())
            // switch (marker) {
            //     case 'main':
            //         console.log('main');
            //         window.comp = document.querySelector("#compA");
            //         window.comp.setAttribute('comp__A', eval(ytext.toString()));
            //         window.comp = document.querySelector("#compB");
            //         window.comp.setAttribute('comp__B', eval(ytext.toString()));
            //         //collaborate.setEntity('markerA', ytext)
            //         break;
            //     case 'hiro':
            //         console.log('hiro');
            //         // window.comp = document.querySelector("#compA");
            //         // window.comp.setAttribute('comp__A', eval(ytext.toString()));
            //         this.runCode(ytext.toString());
            //         //collaborate.setEntity('markerA', ytext)
            //         break;
            //     case 'kanji':
            //         window.comp = document.querySelector("#compB");
            //         window.comp.setAttribute('comp__B', eval(ytext.toString()));
            // }

        })

    },
  
    runCode(marker,codetext){
        if(marker!="main"){
            window.compparent = document.querySelector(marker);
        }
        
        switch (marker) {
            case 'main':
                console.log('main');
                // window.comp = document.querySelector("#compA");
                // window.comp.setAttribute('comp__A', eval(codetext));
                // window.comp = document.querySelector("#compB");
                // window.comp.setAttribute('comp__B', eval(codetext));
                //Editor.curmarker = "main";
                eval(codetext);
                //collaborate.setEntity('markerA', ytext)
                break;
            case 'hiro':
                console.log('hiro');
                Editor.curmarker = "hiro";
                eval(codetext);
                // window.comp = document.querySelector("#compA");
                // window.comp.setAttribute('comp__A', eval(codetext));
                break;
            case 'kanji':
                console.log('kanji');
                Editor.curmarker = "kanji";
                eval(codetext);
                // window.comp = document.querySelector("#compB");
                // window.comp.setAttribute('comp__B', eval(codetext));
        }

        console.log("runcode");
        
    }
    
    
    

}
// function setComp(code){
//     alert("Marker:Hiro")

//     com.setAttribute('comp__A',eval(code))
// }
module.exports = collaborate
