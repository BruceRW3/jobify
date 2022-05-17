import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>I'm baby plaid williamsburg tote bag edison bulb, art party hella gentrify. Poke vexillologist before they sold out, bicycle rights raclette schlitz pour-over street art banh mi. Selfies snackwave gentrify, brunch letterpress glossier slow-carb plaid lomo farm-to-table pork belly craft beer forage jean shorts.            
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}
export default Landing