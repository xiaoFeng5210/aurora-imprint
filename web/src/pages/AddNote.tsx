import { type FC } from 'react'
import TinyMceEditor from '@/components/tiny-editor'

const AddNote: FC = () => {
  return (
    <div className='tw-w-full tw-h-full'>
      <TinyMceEditor />
    </div>
  )
}
export default AddNote
