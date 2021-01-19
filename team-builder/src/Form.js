import React from 'react';

export default function TeamListing(props) {

    const { values, update, submit } = props

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        update(name, value);
    }

    const onSubmit = e=> {
        e.preventDefault();
        submit();
    }

    return(
        <form className='container' onSubmit={onSubmit}>
            <div className='dataInput'>

                <label>Username 
                    <input 
                        name='username'
                        type='text'
                        placeholder='Enter Username Here'
                        maxLength='16'
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <label>Email  
                    <input 
                        name='email'
                        type='email'
                        placeholder='Enter Email Address'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>

                <label>Role 
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''> Select Role </option>
                        <option value='Junior Developer'>Junior Developer</option>
                        <option value='UI/UX Designer'>UI/UX Designer</option>
                        <option value='Business Analyst'>Business Analyst</option>
                        <option value='Cat Zoomiez Director'>Cat Zoomiez Director</option>
                    </select>                   
                </label>

                <div className='submit'>
                    <button>
                        Submit
                    </button>
                </div>

            </div>
        </form>
    )
}


