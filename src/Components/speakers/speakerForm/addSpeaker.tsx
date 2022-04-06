import React from "react"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { useFormik } from "formik"
import { SpeakerModel, createEmptySpeaker } from "./addSpeaker.Model"

export const AddSpeaker = () => {
  const initialValues = createEmptySpeaker()
  const [formData, setFormData] = React.useState<SpeakerModel>(initialValues)

  const speakerForm = useFormik({
    initialValues,
    validate: (data) => {
      const errors = {}

      return errors
    },
    onSubmit: (data) => {
      console.log(data)
      setFormData(data)
      speakerForm.resetForm()
    },
  })
  return (
    <div className="flex justify-content-center">
      <h1>Add Speaker</h1>
      <form onSubmit={speakerForm.handleSubmit}>
        <div className="field">
          <InputText
            id="name"
            name="name"
            value={speakerForm.values.name}
            onChange={speakerForm.handleChange}
          />
        </div>
        <div className="field">
          <InputText
            id="bio"
            name="bio"
            value={speakerForm.values.bio}
            onChange={speakerForm.handleChange}
          />
        </div>
        <div className="field">
          <InputText
            id="webSite"
            name="webSite"
            value={speakerForm.values.webSite}
            onChange={speakerForm.handleChange}
          />
        </div>
        <Button type="submit" label="Submit" className="mt-2" />
      </form>
    </div>
  )
}
