/* eslint-env browser */

const CodeMirror = require('codemirror')
require('codemirror/mode/javascript/javascript.js')
const Y = require('yjs')
const WebsocketProvider = require('y-websocket').WebsocketProvider
const CodemirrorBinding = require('y-codemirror').CodemirrorBinding
const Collaborate = require('./collaborate.js')

window.addEventListener('load', () => {

  CodeMirror.keyMap.live = {
    fallthrough: "default",
    "Ctrl-Enter": function (cm) {
      const obj = getSelectionCodeColumn(cm, false);
      setComp(obj.code);
      flash(cm, obj.selection);

    }
  };



  CodeMirror.keyMap.liveB = {
    fallthrough: "default",
    "Ctrl-Enter": function (cm) {
      console.log("keyMapStillHere")
      const obj = getSelectionCodeColumn(cm, false);
      //eval(obj.code);
      //setCompB(obj.code);
      //Collaborate.setCode(obj.code)
      flash(cm, obj.selection);
    }
  };

  const editorContainer0 = document.createElement('div')
  editorContainer0.setAttribute('id', 'editor0')
  document.body.insertBefore(editorContainer0, null)

  const editor0 = new CodeMirror(editorContainer0, {
    lineNumbers: true,
    autofocus: true,
    mode: "javascript",
    keyMap: "live",
    value: ''
  });

  Collaborate.setupCollaborate(editor0, 'main')

  const editorContainer = document.createElement('div')
  editorContainer.setAttribute('id', 'editor')
  document.body.insertBefore(editorContainer, null)

  const editor = new CodeMirror(editorContainer, {
    lineNumbers: true,
    autofocus: true,
    mode: "javascript",
    keyMap: "live",
    value: ''
  });

  Collaborate.setupCollaborate(editor, 'hiro')

  const editorContainer2 = document.createElement('div')
  editorContainer2.setAttribute('id', 'editor2')
  document.body.insertBefore(editorContainer2, null)

  const editor2 = new CodeMirror(editorContainer2, {
    lineNumbers: true,
    autofocus: true,
    mode: "javascript",
    keyMap: "liveB",
    value: ''
  });

  Collaborate.setupCollaborate(editor2, 'kanji')

  //const binding = new CodemirrorBinding(ytext, editor, provider.awareness)

  function getSelectionCodeColumn(cm, findBlock) {
    let pos = cm.getCursor(),
      text = null;

    if (!findBlock) {
      text = cm.getDoc().getSelection();

      if (text === "") {
        text = cm.getLine(pos.line);
      } else {
        pos = { start: cm.getCursor("start"), end: cm.getCursor("end") };
        //pos = null
      }
    } else {
      let startline = pos.line,
        endline = pos.line,
        pos1,
        pos2,
        sel;

      while (startline > 0 && cm.getLine(startline) !== "") {
        startline--;
      }
      while (endline < cm.lineCount() && cm.getLine(endline) !== "") {
        endline++;
      }

      pos1 = { line: startline, ch: 0 };
      pos2 = { line: endline, ch: 0 };

      text = cm.getRange(pos1, pos2);

      pos = { start: pos1, end: pos2 };
    }

    if (pos.start === undefined) {
      let lineNumber = pos.line,
        start = 0,
        end = text.length;

      pos = {
        start: { line: lineNumber, ch: start },
        end: { line: lineNumber, ch: end }
      };
    }

    return { selection: pos, code: text };
  }

  const flash = function (cm, pos) {
    let sel,
      cb = function () {
        sel.clear();
      };

    if (pos !== null) {
      if (pos.start) {
        // if called from a findBlock keymap
        sel = cm.markText(pos.start, pos.end, {
          className: "CodeMirror-highlight"
        });
      } else {
        // called with single line
        sel = cm.markText(
          { line: pos.line, ch: 0 },
          { line: pos.line, ch: null },
          { className: "CodeMirror-highlight" }
        );
      }
    } else {
      // called with selected block
      sel = cm.markText(cm.getCursor(true), cm.getCursor(false), {
        className: "CodeMirror-highlight"
      });
    }

    window.setTimeout(cb, 250);
  };

  // const com = document.querySelector("#compA")
  // var dataA = {
  //   'height': 1,
  //   'width': 1,
  //   'depth': 1,
  // }
  // com.setAttribute('comp__A', dataA)

  // const comB = document.querySelector("#compB")
  // var dataB = {
    
  //   'height': 1,
  //   'width': 1,
  //   'depth': 1,
  // }
  // comB.setAttribute('comp__B', dataB)

  function setCode(code) {
    Collaborate.setCode(code)
  }
  function setComp(code) {
    alert("Marker:Hiro")

    com.setAttribute('comp__A', eval(code))
  }
  function setCompB(code) {
    alert("Marker:Kanji")
    comB.setAttribute('comp__B', eval(code))
  }


})
