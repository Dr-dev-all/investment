'use client';
import { useForm } from 'react-hook-form';
import pop from 'popups';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function AdminEditUser() {
  const content = (
    <section>
      <article>
        <Popup trigger={<button className='button'> open modal</button>}>
          <span>man is a rational being </span>
        </Popup>
      </article>
    </section>
  );

  return content;
}
