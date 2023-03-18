import { useState, useRef, useEffect } from 'react'
export async function getServerSideProps(){
  const res =  await fetch('http://localhost:4000/todo')
  const data = await res.json()
  return {
    props : {data}
  }
}

const Todo = (props:any) => {
  const fetchUrl = 'http://localhost:4000/todo'
  const [data, setData] = useState(props.data)
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()
  const [isFetching, setIsFetching] = useState(false)
  
  const inputRef1 = useRef() as React.MutableRefObject<HTMLInputElement>;
  const inputRef2 = useRef() as React.MutableRefObject<HTMLInputElement>;;
  
  useEffect(() => {
    if(isFetching === true) getData()
    setIsFetching(false)
  }, [isFetching]);

  const addItem = async () => {
    console.log('additem 함수발동');
    const Body = {title, contents}
    try{
      await fetch(fetchUrl,{
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Body),
      });
    }
    catch{console.log('post 실패')}
    setIsFetching(true)
  }

  const getData = async () => {
    const res =  await fetch('http://localhost:4000/todo')
    const data = await res.json()
    setData(data)
  }

  const deleteList = async (id:number) => {
    console.log('deleteList 함수발동');
    console.log('id', id);
    const deleteUrl = fetchUrl + `/${id}`
    try{
      await fetch(deleteUrl,{
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
    }
    catch{console.log('deleteList 실패')}
    setIsFetching(true)
  }


  const onChangeInput = (e:any) => {
    console.log('onChangeInput 함수발동');
    const inputId = e.target.id
    if(inputId == '제목'){
      setTitle(e.target.value)
    }
    else if(inputId == '내용'){
      setContents(e.target.value)
    }
  };

  return ( <>
    <h1>TODO</h1>
    <div>
      <input  
        id='제목'
        placeholder='제목'
        ref={inputRef1}
        onChange={onChangeInput}
      />
      <input  
        id='내용'
        placeholder='내용'
        ref={inputRef2}
        onChange={onChangeInput}
      />
      <button onClick={addItem}>추가</button>
    </div>

    {data && <>
      {data.map((ele:any, idx:any)=> <div key={idx}>
        <span>{ele.title}</span> | <span>{ele.contents}</span>
        <button onClick={()=>{deleteList(ele.id)}}>삭제</button>
      </div>)} 
    </>}
  </> );
}
export default Todo;