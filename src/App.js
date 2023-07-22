import { useState } from 'react';
import './index.css';

export const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div className="">
      <Accordion data={faqs}/>
    </div>
  );
}

export function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className='flex justify-center'>
      <ul className='flex flex-col  space-y-12 mt-[10vh]'>
        {data.map((i, n) => 
        <Items curOpen={curOpen} onOpen={setCurOpen} title={i.title} listNum={n} key={n}>{i.text}</Items>
        )}
        <Items curOpen={curOpen} onOpen={setCurOpen} key="test 1" title="Test 1" listNum={Number(32)}>
          <h1>Allows React developers to:</h1>
          <ul className='list-disc ml-5'>
            <li>Break up UI into components</li>
            <li>Make components reusable</li>
            <li>Place state efficiently</li>
          </ul>
        </Items>
      </ul>
    </div>
  );
}

export function Items({ title, listNum, children, onOpen, curOpen }) {
  const isOpen = listNum === curOpen;

  function open() {
    console.log(curOpen);
    onOpen(isOpen ? null : listNum);    
  }

  return (
    <li
      className={`${isOpen ? "border-t-4 border-[#087f5b] " : ""}  flex flex-row w-[40rem] justify-between shadow-2xl p-5 rounded-lg cursor-pointer`}
      onClick={() => open()}
    >
      <div className="flex flex-row">
        <div className={`${isOpen ? "text-[#087f5b]" : ""} text-[25px] font-[500] mr-4 text-gray-300`}>{listNum > 9 ? listNum + 1 : `0${listNum + 1}`}</div>
        <div>
          <p className={`${isOpen ? "text-[#087f5b]" : ""} text-[25px] font-[500]`}>{title}</p> 
          <p className={`${isOpen ? "" : "hidden "} font-sm tracking-wide my-6`}>{children}</p>
        </div>
      </div>
      <div className='text-right place-self-start text-[24px] font-[500]'>
        {isOpen ? "-" : "+"}
      </div>
    </li>
  );
}



