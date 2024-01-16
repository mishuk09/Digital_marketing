import { useForm } from "react-hook-form"

const AddBlogs = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const url = `http://localhost:5000/blogs`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className=" text-white " placeholder="Name"{...register("name", { required: true, maxLength: 20 })} /> <br />
            <input className=" text-white " placeholder="Description"{...register("description", { pattern: /^[A-Za-z]+$/i })} /> <br />
            <input className=" text-white " placeholder="Date"  {...register("date", { min: 18, max: 99 })} /> <br />
            <input className=" text-white bg-blue-500" type="submit" />
        </form>
    );
};

export default AddBlogs;