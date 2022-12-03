    import { useState } from 'react'

    const FilterBySubjectForm = () => {
    const [Subject, setSubject] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const subject ={Subject};
        const response = await fetch('/Filter_By_Subject', {
        method: 'POST',
        body: JSON.stringify(subject),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        const json = await response.json()

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        setError(null)
        setSubject('')
        
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Filter Courses By Subject: </h3>

        <label> Subject:</label>
        <input 
            type="text" 
            onChange={(e) => setSubject(e.target.value)} 
            value={Subject}
        />
        <button>Filter By Subject </button>

        {error && <div className="error">{error}</div>}
        </form>
    )
    }

    export default FilterBySubjectForm