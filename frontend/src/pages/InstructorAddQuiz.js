const { useState } = require("react")

const InstructorAddQuiz = () => {
    const [QNumber, setQNumber] = useState('');
    const [Q, setQ] = useState('');
    const [Answer1, setAnswer1] = useState('');
    const [Answer2, setAnswer2] = useState('');
    const [Answer3, setAnswer3] = useState('');
    const [Answer4, setAnswer4] = useState('');
    const [correctAnswer, setcorrectAnswer] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = async(e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const courseId = queryParams.get('CourseId');
        const quiz = {QNumber,Q,Answer1,Answer2,Answer3,Answer4,correctAnswer}
        const response = await fetch(`/addQ/?CourseId=${courseId}`, {
            method: 'POST',
            body: JSON.stringify(quiz),
            headers: {
                'Content-Type': 'application/json'
            }
            })
    
            const json = await response.json()
            console.log(response)
    
            if (!response.ok) {
            setError(json.error)
            }
            if (response.ok) {
            setError(null)
            setQNumber('')
            setQ('')
            setAnswer1('')
            setAnswer2('')
            setAnswer3('')
            setAnswer4('')
            setcorrectAnswer('')
            
            
            console.log('Question Defined:', json)
            }
    
        }
    

    return (
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Create your course exam</h3>
  
        <label>Question Number:</label>
        <input 
          type="number" 
          onChange={(e) => setQNumber(e.target.value)} 
          value={QNumber}
        />

<label>Question:</label>
        <input 
          type="text" 
          onChange={(e) => setQ(e.target.value)} 
          value={Q}
        />

<label>Option 1:</label>
        <input 
          type="text" 
          onChange={(e) => setAnswer1(e.target.value)} 
          value={Answer1}
        />


<label>Option 2:</label>
        <input 
          type="text" 
          onChange={(e) => setAnswer2(e.target.value)} 
          value={Answer2}
        />


<label>Option 3:</label>
        <input 
          type="text" 
          onChange={(e) => setAnswer3(e.target.value)} 
          value={Answer3}
        />

<label>Option 4:</label>
        <input 
          type="text" 
          onChange={(e) => setAnswer4(e.target.value)} 
          value={Answer4}
        />

<label>Correct answer:</label>
        <input 
          type="number" 
          onChange={(e) => setcorrectAnswer(e.target.value)} 
          value={correctAnswer}
        />


<button>Add Question</button>
      {error && <div className="error">{error}</div>}
        </form>
    )

    }

export default InstructorAddQuiz;