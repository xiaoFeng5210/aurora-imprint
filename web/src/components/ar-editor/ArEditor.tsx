import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import { extensions } from './editor-config'
import {MenuBar} from './menu-config'
import './style.scss'

const content = `

	<h2>Getting Started</h2>
	<p>Let's write some code!</p>
	
	
`

export default () => {
	return (
		<EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
	)
}