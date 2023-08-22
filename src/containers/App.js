import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Home from '../components/Home/Home';
import HomeVideo from '../components/Video/Video';
import './App.css';
import React , {useState , useEffect} from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [route, setRoute] = useState('home')

  const routeChange = (route) => {
    setRoute(route)
  }

  const scroll = () => {
    if (window.pageYOffset > 1) {
      setHidden(true);
      setScrolled(true);

    } else {
      setHidden(false);
      setScrolled(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scroll);
    
    return function cleanup() {
      window.removeEventListener('scroll', scroll);
    }
  }, [])

/*   useEffect(() => {
    if (scrolled) {
      setHidden(true)
    } else if (!scrolled) {
      setHidden(false)
    }
  }, [scrolled]) */

  const showMenu = () => {
    setHidden(false);
  }

  const hideMenu = () => {
    setHidden(true);
  }

  useEffect(() => {
    let nav = document.querySelector('nav');

    if (hidden) {
      nav.classList.add('hidden')
    } else {
      nav.classList.remove('hidden')
    }
  }, [hidden])

  useEffect(() => {
    let button = document.querySelector('#button');

    if (hidden) {
      button.addEventListener('click', showMenu)
    }

    return function cleanup() {
      button.removeEventListener('click', showMenu)
    }
  }, [hidden])

  useEffect(() => {
    let button = document.querySelector('#button');
    
    if (!hidden) {
      button.addEventListener('click', hideMenu)
    }
    return function cleanup() {
      button.removeEventListener('click', hideMenu)
    }
  })

 /*  useEffect (() => {
    document.querySelector('.button').addEventListener('click', hideMenu)
  }, []) */

  useEffect(() => {
    let nav = document.querySelector('nav');

    if (scrolled) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }, [scrolled])
  
  return (
    <div className="App">
      <Navigation routeChange={routeChange} hidden={hidden}/>
        {
          route==='home'
            ?<HomeVideo/>  
            : (route==='about'
                ?<About/>
                : (route === 'projects'
                    ?<Projects/>
                    :<main className='test'>not about</main>  
                  )
              )          
        }
    </div>
  );
}

export default App;
