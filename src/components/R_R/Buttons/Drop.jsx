import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './Drop.css'

const Drop = props => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  })
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop})

  var filesArray = [];

  const files = acceptedFiles.map((file) => {
      filesArray.push(file.path)
      console.log('array', filesArray)
      console.log('photo', file)
      return (
        file.path
      )
  })

  if(JSON.stringify(filesArray) !== JSON.stringify(props.state)){
      props.handlePhotos(filesArray)
  }
  
  function showFiles() {
    return files.map((file) =>{
        return (
        <a href={file}>
            <img className="drop-images" src={file} />
        </a>
        )
    })
  }
  
  console.log('files',files)

  return (
    <section className="dropzone-section">
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()}/>
            {(filesArray[0]) ? (showFiles()) : (<div className="dropzone-text">Upload photos by click and selecting or drag and drop</div>)}
        </div>
    </section>
  )
}

export default Drop