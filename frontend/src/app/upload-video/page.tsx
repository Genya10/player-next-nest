'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { IFormInput } from './types'
import { useState } from 'react'

export default function UploadVideoPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setIsLoading(true)
        const formData = new FormData()
        formData.append('video', data.video[0])

        try {
            const response = await fetch('http://localhost:4200/api/upload', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                console.log('Video upload successfully')
            } else {
                console.error('Failed to upload video')
            }
        } catch (error) {
            console.log('Error uploading video:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='max-w-md mx-auto p-6 bg-gray-800 rounded shadow mt-20'
        >
            <div className='mb-5'>
                <label>
                    <span className='mb-2 block font-semibold'>Upload video:</span>
                    <input type='file' accept='video/*' {...register('video', {
                        required: 'Please select a video'
                    })} />
                </label>
                {errors.video && (
                    <span className='text-red-500'>
                        {errors.video.message}
                    </span>
                )}
            </div>
            <button className='bg-primary p-5 py-2 rounded-xl' disabled={isLoading}>
                {isLoading ? 'Uploading...' : 'Upload'}
            </button>
        </form>
    )
}