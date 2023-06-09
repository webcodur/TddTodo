import { useState, useRef, useEffect } from "react";
import TodoLayout from './common/EachTodoListStyle';
interface Props {
  data: any;
  setIsFetching: any;
}
const EachTodoList = (props: Props) => {
  const fetchUrl = "http://localhost:4000/todo";
  const ele = props.data;
  const [isEditing, setIsEditing] = useState(false);
  const editValue1 = useRef() as React.MutableRefObject<HTMLInputElement>;
  const editValue2 = useRef() as React.MutableRefObject<HTMLInputElement>;
  
  useEffect(() => {
    if (isEditing) {
      editValue1.current.value = ele.title;
      editValue2.current.value = ele.contents;
    }
  }, [isEditing]);

  const updateItem = async (id: number) => {
    console.log("activate updateItem");
    const updateUrl = fetchUrl + `/${id}`;
    const updateBody = {
      title: editValue1.current.value,
      contents: editValue2.current.value,
    };
    try {
      await fetch(updateUrl, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateBody),
      });
    } catch {
      console.log("update 실패");
    }
    props.setIsFetching(true);
    setIsEditing(false);
  };

  const deleteItem = async (id: number) => {
    console.log("activate deleteItem");
    const deleteUrl = fetchUrl + `/${id}`;
    try {
      await fetch(deleteUrl, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
    } catch {
      console.log("delete 실패");
    }
    props.setIsFetching(true);
  };

  const activateUpdate = (id: number) => {
    setIsEditing(true);
    console.log("activate updateItem");
  };

  return (
    <TodoLayout>
      <div className='NoBorder'>
        {!isEditing && (
          <div className="showBox">
            <div>{ele.title}</div>
            <div>{ele.contents}</div>
            <button onClick={() => {activateUpdate(ele.id)}}>수정</button>
            <button onClick={() => {deleteItem(ele.id);}}>삭제</button>
            <br/>
          </div>
        )}

        {isEditing && (
          <div className="updateBox">
            <div><input id="제목수정" placeholder="제목수정" ref={editValue1} /></div>
            <div><input id="내용수정" placeholder="내용수정" ref={editValue2} /></div>
            <button onClick={() => {updateItem(ele.id);}}>완료</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
            <br />
          </div>
        )}
      </div>
    </TodoLayout>
  );
};

export default EachTodoList;
