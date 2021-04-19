import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {

    const handleAddService = (serviceDetails) => {
        fetch('http://localhost:5005/addService', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceDetails)
        })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);


    const onSubmit = data => {
        const serviceDetails = {
            name: data.name,
            price: data.price,
            imageUrl: imageUrl
        }

        handleAddService(serviceDetails);
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2c3160fba839fdff9755670b28ae5350');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' name="name" {...register("name")} />
                <hr />
                <input placeholder='price' name="price" {...register("price")} />
                <hr />
                <input name="" type="file" onChange={handleImageUpload} />
                <hr />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;