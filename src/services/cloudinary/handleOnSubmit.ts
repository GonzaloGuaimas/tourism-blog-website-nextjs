export async function handleOnSubmit(event: any) {
    event.preventDefault()
    const form = event.currentTarget
    const fileInput: any = Array.from(form.elements).find((element: any) => {
      return element.name === 'file'
    })
    const formData = new FormData()
    for( const file of fileInput.files) {
      formData.append('file', file)
    }
    formData.append('upload_preset', 'freetours-uploads')
    const data = await fetch('https://api.cloudinary.com/v1_1/dwh7vwgu4/image/upload',{
        method: 'POST',
        body: formData
      }).then(res => res.json())
    return data.secure_url
}