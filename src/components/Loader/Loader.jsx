import './Loader.scss'


function Loader(props) {
 

    return (
      <div className='loader'>
      <h1>Chargement</h1>
      <div className='progress'>
          {props.progress}%
      </div>
    </div>
    );
  }
  
  export default Loader;