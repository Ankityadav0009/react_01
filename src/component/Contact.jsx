import react from 'react'

function Contact() {
    return (
        <div className='contact'>
            <main>

                <h1>Contact</h1>
                <form >
                    <div>
                        <label >Name</label>
                        <input type="text" required placeholder='Name' />
                    </div>

                    <div>
                        <label >Email</label>
                        <input type="email" required placeholder='Email' />
                    </div>
                    <div>
                        <label >Message</label>
                        
                        <input type="text" required placeholder='enter your query' />
                    </div>
                    <div>
                        <label >Mobile</label>
                        <input type="number" required placeholder='1232' />
                    </div>

                    <button type='submit'>Send</button>
                </form>

            </main>
        </div>
    )
}
export default Contact;