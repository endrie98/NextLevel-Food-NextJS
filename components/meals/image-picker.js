"use client"

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null)
    const inputRef = useRef()

    function handlePickClick() {
        inputRef.current.click()
    }

    function handleImageChange(event) {
        const file = event.target.files[0]

        if (!file) {
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage ? <p>No image picked yet.</p> : <Image src={pickedImage} alt="The image selected by the user" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>
                <input required onChange={handleImageChange} ref={inputRef} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} />
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}