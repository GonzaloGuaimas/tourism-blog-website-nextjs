export async function uploadOne(file: any) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'freetours-uploads')
    const data = await fetch('https://api.cloudinary.com/v1_1/dwh7vwgu4/image/upload',{
        method: 'POST',
        body: formData
      }).then(res => res.json())
    return data.secure_url
}