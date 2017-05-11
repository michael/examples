import {
  Configurator, EditorSession, ProseEditorPackage
} from 'substance'

const { ProseEditor } = ProseEditorPackage

import fixture from './fixture'

let cfg = new Configurator()
cfg.import(ProseEditorPackage)

window.onload = function() {
  let doc = cfg.createArticle(fixture)
  let editorSession = new EditorSession(doc, {
    configurator: cfg
  })
  ProseEditor.mount({
    editorSession: editorSession
  }, document.body)
}
