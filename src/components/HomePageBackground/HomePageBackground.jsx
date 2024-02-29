import './HomePageBackground.scss'

function HomePageBackground() {

    return (
        <div className='bg'>
            <section className="bg_animate">
                <div className="wrap">
                    {Array(480).fill().map((_, index) => (
                        <div key={index} className="square"></div>
                    ))}
                </div>
            </section>
        </div>
    );

}

export default HomePageBackground;