import React, { useEffect, useState, useRef } from 'react'
import apiService from '../apiService'
import QrCode from 'react.qrcode.generator'
import { useParams } from 'react-router-dom'


function QRcode() {

  const [task, setTask]= useState({})

  const { id } = useParams()

  useEffect(() => {
    apiService.findTaskById(id)
    .then(taskFound => setTask(taskFound)); 
  }, [id]);

  console.log(typeof task.taskPoints)
  const { points } = task 
  console.log(typeof points)
  String(points)
  console.log(typeof points)




  return (
    <div> 
    <div>
      <h1>{task.taskName}</h1>
      <h2>{task.taskPoints}</h2>
    </div>
    <QrCode value={`https://a5cd-213-86-144-42.ngrok.io/exectask/?value=${task.taskPoints}`} size='300'/>
    </div>
  )
}

export default QRcode