
import './App.css';
import firstMobile from './assets/firstMobile.png'
import secondMobile from './assets/second.png'
import therdMobile from './assets/therd.png'


//https://www.binance.com/es-LA/support/faq/360002673851

function App() {
  return (
    <>
      <header >
      
      </header>

    <main className='main'>
    
      <section className='section_first'>
      <h3>How the app works</h3>
       
        {/* <div className='section_first-back'>

          <div className='section_first-gadget'>
           <h3>Find your Gadget</h3>
           
            <img className='section_first-image' src={man}></img>
            <div className='section_first-blurred'>
            <button className='section_first-button'>Get started</button>
            </div>
             
          </div>

        </div> */}
                    
            <div className='section_first-description'>
              <h4>Create an account</h4>
          
                 <h2>Discover original products</h2>
            <p>There are more than 950 categories updated daily based on 
              trending websites reviews an users rating.</p>      
                
           </div>
           <img className='section_first-image' src={firstMobile} alt='first phone'></img>
                
       
           <section className='section_second'>
        <div className='section_second-description'>
                 <h2>Experience products in AR</h2>
              <p>Have you tried Augmented Reality? Stop
                       looking at boring galleries and start
                          experiences each item
                  </p>
                  <div className='circle'> 
                  <img className='section_second-image' src={secondMobile} alt='second phone'></img>
        
                  </div>
                  
        </div>
      </section >

      <section className='section_therd'>
      <div className='section_therd-description'>
              <h4>Original platform</h4>
          
                 <h2>Hottest deals around the web</h2>
            <p>Find the perfect gift or everyday goods right at your fingertips</p>      
            <img className='section_therd-image' src={therdMobile} alt='first phone'></img>
              
 
           </div>
           

      </section>
          
       
      </section>

    

    </main>
    
      <footer>
        
      </footer>
    </>
  );
}

export default App;
