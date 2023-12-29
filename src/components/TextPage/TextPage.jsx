
import azamat11 from "../images/azamat11.jpg";
import azamat22 from "../images/azamat22.jpg";
import azamat88 from "../images/azamat88.jpg";
import razdelitel2 from "../images/razdelitel2.png"
import './TextPage.css'

function TextPage() {
  return (
    <div>
      <div className=" homePage">
      <img className='razdelitel1' src={razdelitel2} alt="" />
    
      <img src={azamat11} alt="" />
      <h1 className='pozhelanie'>Уважаемый Азамат Рыспаевич,извольте поздравить вас с Днем рождения.</h1>
      <img className='razdelitel' src={razdelitel2} alt="" />
      <img src={azamat22} alt="" />
      <h1 className='pozhelanie-1'>Пожелать вам,чтобы ваш дух никогда не истощался , <br />будьте всегда блестящим примером для подражания.</h1>
      <img className='razdelitel' src={razdelitel2} alt="" />
      <img src={azamat88} alt="" />
      <h1> Ловите каждый счастливый момент в вашей жизни и наслаждайтесь им .</h1>
      <img className='razdelitel' src={razdelitel2} alt="" />
      
      </div>
    </div>
  );
}

export default TextPage;