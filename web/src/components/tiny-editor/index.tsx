import { forwardRef, type FC } from 'react'
import { Editor } from '@tinymce/tinymce-react'

interface TinyMceEditorProps {
  onInit?: () => void
}

const TinyMceEditor: FC = forwardRef<TinyMceEditorProps, any>(({ onInit }, ref) => {
  const getCursorLocation = (editor: any) => {
    const cursorPos = editor.selection.getRng()
  }

  return (
    <Editor
      apiKey='8py6yu9o93scou0cje5pztqemt1voia60506ix4yc39am4o0'
      onInit={(evt, editor) => {
        const editorDom = document.querySelector('.tox-tinymce') as HTMLDivElement
        if (editorDom) {
          editorDom.style.border = 'none'
        }
        onInit && onInit()
        getCursorLocation(editor)
        editor.focus()
      }}
      initialValue="<h3>新建小记...</h3>"
      init={{
        statusbar: false,
        height: '100%',
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'codesample'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter codesample' +
          'alignright alignjustify | bullist numlist outdent indent | ',
        // 'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
      }}
    />
  )
})
export default TinyMceEditor
