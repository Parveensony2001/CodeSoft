import img from './logo192.png'
import { useState ,useEffect } from 'react';
function App() {
  const [text, setText] = useState('');
  const originalText =
    'Hare ram hare ram ram ram hare hare hare krishna hare krishna krishna krishna hare hare jai shree krishna.';
  const delay = 100; // Adjust the delay between characters in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < originalText.length) {
        setText((prevText) => prevText + originalText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(timer); // Stop the timer when the text is fully displayed
      }
    }, delay);

    return () => clearInterval(timer); // Cleanup to prevent memory leaks
  }, []);
  return (
    <div className="App">
      <header className="App-header">
    <nav className="navbar-header">
      <div className="navbar-container">
        <div className="social-media">
          <div style={{ borderLeft: "1px solid red", borderRight: "1px solid red" }}>
          <a href="#"><img src="https://th.bing.com/th?id=ODLS.7d3063c3-cd17-4792-8d4f-4e98c892a389&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2"/></a>
          </div>
          <div style={{ borderRight: "1px solid red" }}>
          <a href="#"><img src="https://th.bing.com/th?id=ODLS.622ceebf-d807-45da-bb82-707dd9e5c357&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2"/></a>
          </div>
          <div>
          <a href="#"><img src="https://th.bing.com/th?id=ODLS.811c55ff-001a-4532-baae-450eeda18ae8&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"/></a>
          </div>
          <div style={{ borderLeft: "1px solid red", borderRight: "1px solid red" }}>
          <a href="#"><img src="https://th.bing.com/th?id=ODLS.fc619bab-a786-4b75-8669-6881202d98da&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2"/></a>

        </div>
        </div>
        <div className="contact-info" >
          <span >📞:+123-456-7890</span>
        </div>
        <div className="contact-info" >
          <span >📧:xyz@gmail.com</span>
        </div>
        <div className="login-section">
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
    
      </header>
      <body className="App-body">
         <div className="body-main">
         <nav className="navbar">
      <div className="navbar-container">
        <div className='logo-main'>
          <img src={img}/>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Services</button>
          <button className="nav-button">Contact</button>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </nav>
         </div>
         <div className='main-pic'>
      <div className='main-container'>
        <span>
          <h4>I AM PREPARED FOR A JOB</h4>
        </span>
        <h3>CREATIVE DIGITAL AGENCY</h3>
        <p >
          {text}
        </p>
        <div className='button-container'>
          <button className='info_button'>MORE INFO.</button>
          <button className='req_button'>REQUEST & CONSULT</button>
        </div>
      </div>
    </div>
    <div className='main-option-container'>
    <div className='option1'>
      <div className='CONTAINER'>
        <img src="https://th.bing.com/th?id=ODLS.fc619bab-a786-4b75-8669-6881202d98da&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2"/>
        <h3>LAUNCH BUSENESS</h3>
        
      </div>
      <p>loram is a best student but peuple not accept this knowlage</p><button class="more-info-button">More Information</button>
    </div>
    <div className='option1'>
      <div className='CONTAINER'>
        <img src="https://th.bing.com/th?id=ODLS.7d3063c3-cd17-4792-8d4f-4e98c892a389&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2" alt='abc'/>
        <h3>LAUNCH BUSENESS</h3>
       
      </div>
      <p>loram is a best student but peuple not accept this knowlage</p> <button class="more-info-button">More Information</button>
    </div>
    <div className='option1'>
      <div className='CONTAINER'>
        <img src="https://th.bing.com/th?id=ODLS.622ceebf-d807-45da-bb82-707dd9e5c357&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2"/>
        <h3>LAUNCH BUSENESS</h3>
      </div>
      <p>loram is a best student but peuple not accept this knowlage</p>
      <button class="more-info-button">More Information</button>
    </div>
    </div>
    <div className='ex-cont'>
    <div className='expirance'>
     <h2 style={{fontFamily: "Courier New", color:"lightblue"}}>ABOUT</h2>
     <h8>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro pariatur ipsum, sit saepe libero eos nihil voluptatibus quaerat, a facilis commodi tempora alias aspernatur aliquam accusamus. Provident, velit? Rerum?..<a href='#'>More Info.</a>
     </h8>
    </div>
    <div className='img-exp'>
    <img src='https://th.bing.com/th?id=OIP.BXj9BqgaPdCJvqMcKokheAHaFW&w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' alt='xyz'/>
    </div>
    </div>

      </body>
      <footer className="App-footer">
      <div>

        Copyright C By Praveen Soni
      </div>
      <div>
        2023 ALL RIGTH RESERVE.
      </div>
      </footer>
    </div>
  );
}

export default App;
