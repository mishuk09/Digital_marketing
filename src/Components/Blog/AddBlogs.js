// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const AddBlogs = () => {
//     const { register, handleSubmit } = useForm();
//     const [value, setValue] = useState('');
//     const [formData, setFormData] = useState({
//         name: '',
//         date: '',
//         file: null
//     });

//     const modules = {
//         toolbar: [
//             [{ 'header': [1, 2, false] }],
//             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//             [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//             ['link', 'image'],
//             ['clean']
//         ],
//     };
//     const formats = [
//         'header',
//         'bold', 'italic', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image'
//     ];

//     const onSubmit = (data) => {
//         const url = `http://localhost:5000/blogs`;

//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 console.log(result);
//             });
//     };

//     const handleEditorChange = (val) => {
//         setValue(val);
//         setFormData({
//             ...formData,

//             name: val
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input {...register("name")} className="text-white" type="text" placeholder="Title" />

//             <ReactQuill theme="snow" formats={formats} modules={modules} value={value} onChange={handleEditorChange} />

//             <input className="text-white" type="date" {...register("date", { required: true })} />
//             <input className="text-white" type="file" {...register("file", { required: true })} />
//             <input type="submit" value='Submit' />
//         </form>
//     );
// };

// export default AddBlogs;






import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";


const AddBlogs = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        file: null
    });
    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        // const response = await fetch('http://localhost:5000/blogs', {
        //     method: 'POST',
        //     body: data,
        //     credentials: 'include',
        // });
        // if (response.ok) {
        //     setRedirect(true);
        // }


        const url = `http://localhost:5000/blogs`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    };
    if (redirect) {
        return <Navigate to={'/'} />
    }



    return (
        <form onSubmit={createNewPost}>
            <input type="title"
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)} />
            <input type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)} />
            <input type="file"
                onChange={ev => setFiles(ev.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: '5px' }}>Create post</button>
        </form>
    );
};
export default AddBlogs;
