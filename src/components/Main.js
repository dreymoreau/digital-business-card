export default function Main(){
    return(
        <div className="main--body">
            <section className="main--explain">
                <h1>Drey Moreau</h1>
                <h4 className='move--more'>Fullstack Developer</h4>
            </section>
            <section className="space--apart">
                <button type='button' className='email--button'><a href='mailto:striclyspoken@gmail.com' className="change--font">Email</a></button>
                <button type='button'><a href='https://linkedin.com/in/dreymoreau' className='linkedin--button'>Linkedin</a></button>
            </section>
            <section className="move--left">
                <h2>About</h2>
                <p>I am fullstack developer with a passionate of programming, 
                    art, mental health, nature and climate tech. I am a life
                    long learner.
                </p>
            </section>
            <section className="move--left move--up">
                <h2>Interests</h2>
                <p>Reading novels and non-fiction books. Meditation. Yoga.
                    Being in nature. Cooking. Writing. Painting.
                </p>
            </section>
        </div>
    )
}