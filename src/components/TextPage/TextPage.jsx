
import azamat1 from "../images/azamat1.jpeg";
import azamat2 from "../images/azamat2.jpeg";
import azamat8 from "../images/azamat8.jpg";
import razdelitel2 from "../images/razdelitel2.png"
import './TextPage.css'

function TextPage() {
  return (
    <div>
      <div className=" homePage">
      <img className='razdelitel1' src={razdelitel2} alt="" />
      <h1>C Днём Рождения Азамат </h1>
      <img src={azamat1} alt="" />
      <h1 className='pozhelanie'>Уважаемый Азамат Рыспаевич,извольте поздравить вас с днем рождения</h1>
      <img className='razdelitel' src={razdelitel2} alt="" />
      <img src={azamat2} alt="" />
      <h1 className='pozhelanie-1'>пожелать вам,чтобы ваш дух никогда не истощался , <br />будьте всегда блестящим примером для подражания</h1>
      <img className='razdelitel' src={razdelitel2} alt="" />
      <img src={azamat8} alt="" />
      <h1> Ловите каждый счастливый момент в вашей жизни и наслаждайтесь им .</h1>
      <img className='razdelitel' src={razdelitel2} alt="" />
      hfhfhf
      </div>
    </div>
  );
}

export default TextPage;