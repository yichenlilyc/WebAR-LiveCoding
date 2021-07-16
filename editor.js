
const Collaborate = require("./collaborate");

const editor = {
    curmarker :"",
    set cmarker(cmarker){
        this.curmarker = cmarker;
    },

    createEntities(marker = "null") {
        if (marker==="null") {
            marker = this.curmarker;
            console.log(marker);
        }
        if (marker === "all"){
            var sceneEl = document.querySelector('#hiro'); 
            for (var i = 0; i < 50; i++) {
                var boxEl = document.createElement('a-box');
                boxEl.setAttribute('material', {color: '#EF2D5E'});
                boxEl.setAttribute('position', {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, z: Math.random() * 20 - 10});
                boxEl.setAttribute('scale', {x: Math.random() / 2, y: Math.random() / 2, z: Math.random() / 2});
                sceneEl.appendChild(boxEl);
            }
            var sceneEl = document.querySelector('#kanji'); 
            for (var i = 0; i < 50; i++) {
                var boxEl = document.createElement('a-box');
                boxEl.setAttribute('material', {color: '#EF2D5E'});
                boxEl.setAttribute('position', {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, z: Math.random() * 20 - 10});
                boxEl.setAttribute('scale', {x: Math.random() / 2, y: Math.random() / 2, z: Math.random() / 2});
                sceneEl.appendChild(boxEl);
            }
        }else{
            var sceneEl = document.querySelector('#'+marker); 
            for (var i = 0; i < 50; i++) {
                var boxEl = document.createElement('a-box');
                boxEl.setAttribute('material', {color: '#EF2D5E'});
                boxEl.setAttribute('position', {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, z: Math.random() * 20 - 10});
                boxEl.setAttribute('scale', {x: Math.random() / 2, y: Math.random() / 2, z: Math.random() / 2});
                sceneEl.appendChild(boxEl);
            }
        }
        
    },
    createBox(id, marker = "null"){
        if (marker==="null") {
            marker = this.curmarker;
            console.log(marker);
        }
        if(marker === "all"){
            var sceneEl = document.querySelector('#hiro'); 
            var boxEl = document.createElement('a-box');    
            boxEl.setAttribute('material', {color: 'blue'});
            boxEl.setAttribute('position', {x: 0, y: 0, z: 0});
            boxEl.setAttribute('scale', {x: 1, y: 1, z: 1});
            sceneEl.appendChild(boxEl);
            var sceneEl = document.querySelector('#kanji'); 
            var boxEl = document.createElement('a-box');    
            boxEl.setAttribute('material', {color: 'blue'});
            boxEl.setAttribute('position', {x: 0, y: 0, z: 0});
            boxEl.setAttribute('scale', {x: 1, y: 1, z: 1});
            sceneEl.appendChild(boxEl);
        }else{
            var sceneEl = document.querySelector('#'+marker); 
            var boxEl = document.createElement('a-box');    
            boxEl.setAttribute('id',id);
            boxEl.setAttribute('material', {color: 'blue'});
            boxEl.setAttribute('position', {x: 0, y: 0, z: 0});
            boxEl.setAttribute('scale', {x: 1, y: 1, z: 1});
            sceneEl.appendChild(boxEl);
        }
        
        
    },
    createSphere(marker = "null"){
        if (marker==="null") {
            marker = this.curmarker;
            console.log(marker);
        }
        if(marker === "all"){
            var sceneEl = document.querySelector('#hiro'); 
            var sphereEl = document.createElement('a-sphere');
            sphereEl.setAttribute('material',{color:'#FFC65D'});
            sphereEl.setAttribute('radius',0.5);
            sphereEl.setAttribute('position',{x:0,y:0,z:1})
            sceneEl.appendChild(sphereEl);
            var sceneEl = document.querySelector('#kanji'); 
            var sphereEl = document.createElement('a-sphere');
            sphereEl.setAttribute('material',{color:'#FFC65D'});
            sphereEl.setAttribute('radius',0.5);
            sphereEl.setAttribute('position',{x:0,y:0,z:1})
            sceneEl.appendChild(sphereEl);
        }else{
            var sceneEl = document.querySelector('#'+marker); 
            var sphereEl = document.createElement('a-sphere');
            sphereEl.setAttribute('material',{color:'#FFC65D'});
            sphereEl.setAttribute('radius',0.5);
            sphereEl.setAttribute('position',{x:0,y:0,z:1})
            sceneEl.appendChild(sphereEl);
        }
        
    },

    createBoxComp(id,marker = "null"){
        if (marker==="null") {
            marker = this.curmarker;
            console.log(marker);
        }
        if(marker === "all"){

        }else{
            var sceneEl = document.querySelector('#'+marker); 
            var boxCompEl = document.createElement('a-entity');
            boxCompEl.setAttribute('id',id);
            boxCompEl.setAttribute('comp'+'__'+id,{});
            sceneEl.appendChild(boxCompEl);
        }

    },

    changeBox(id,color = "blue",scale={x: 1, y: 1, z: 1},position = {x:0,y:0,z:0}){
        var boxEl = document.querySelector('#'+id);
        boxEl.setAttribute('material',{color:color});
        boxEl.setAttribute('scale',scale);
        boxEl.setAttribute('position',position);
    },

    changeBoxComp(id, color = "blue",height = 1,width = 1, depth = 1){
        var boxCompEl = document.querySelector('#'+id);
        boxCompEl.setAttribute('comp'+'__'+id,data = {'width':width,'height':height,'depth':depth,'color':color});
    }
}

module.exports = editor;

