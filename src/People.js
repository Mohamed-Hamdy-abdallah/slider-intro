
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

export default function People(props) {
    return (
        <div className='section-center'>
        {props.people.map((person , ind)=>{
          let class_name='nextSlide';
          if (ind===props.index)
          {
            class_name='activeSlide';
          }
          if(ind===props.index-1 || (props.index ===0 && ind===props.people.length-1))
          {
            class_name='lastSlide';
          }
          
         
          return(<article className={class_name} key={person.id}>
            <img src={person.image} alt={person.name} className='person-img' />
            <h4>{person.name}</h4>
            <p className='title'>{person.title}</p>
            <p className='text'>{person.quote}</p>
            <FaQuoteRight className='icon'/>
          </article>)
        })}
        <button className='prev' onClick={()=>props.clickleft()}><FiChevronLeft /></button>
        <button className='next' onClick={()=>props.clickright()}><FiChevronRight /></button>
      </div>
    )
}
