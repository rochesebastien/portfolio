import './About.scss'

function Me() {
    return (
    <div className='about page-container'>
        <div className="left">
            <img src="/assets/img/photo.png" alt="" />
        </div>
        <div className="right">
            <p>
            Je m’appelle Sébastien, j’ai 20 ans et je suis en bachelor logiciel et web. M’intéressant aux nouvelles technologies depuis petit, je souhaite devenir développeur web frontend / full-stack.
            <button>Voir mon CV</button>
            </p>
            
        </div>
    </div>
    );
  }
  
  export default Me;