import React, { useEffect } from "react";
import { setTodos } from "../../redux/actions";
import TodoWrapper from "./TodoWrapper";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
}

const Todo = () => {

    const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);

    const [list, setList] = React.useState(useSelector(state => state.todos));

    const dispatch = useDispatch();

    const onDragStart = (event) => {
        const initialPosition = Number(event.currentTarget.dataset.position);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: list
        });

        event.dataTransfer.setData("text/html", '');
    }

    const onDragOver = (event) => {

        event.preventDefault();

        let newList = dragAndDrop.originalOrder;

        const draggedFrom = dragAndDrop.draggedFrom;

        const draggedTo = Number(event.currentTarget.dataset.position);

        const itemDragged = newList[draggedFrom];
        const remainingItems = newList.filter((item, index) => index !== draggedFrom);

        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];

        if (draggedTo !== dragAndDrop.draggedTo) {
            setDragAndDrop({
                ...dragAndDrop,
                updatedOrder: newList,
                draggedTo: draggedTo
            })
        }

    }

    const onDrop = (event) => {

        setList(dragAndDrop.updatedOrder);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }


    const onDragLeave = () => {
        setDragAndDrop({
            ...dragAndDrop,
            draggedTo: null
        });

    }

    useEffect(() => {
        setTodos(dispatch);
    }, [list])

    const title = (text) => {
        let newStr = text[0].toUpperCase() + text.slice(1)
        return newStr;
    }

    console.log(list);
    return (
        <TodoWrapper>
            <div className="container py-5">
                <div className="row">
                    <div className="col-6 offset-3">
                        <h1>ToDos</h1>
                        <ul className="bg-white p-4 m-0 shadow rounded">
                            {list.map((item, index) => {
                                return (
                                    <li
                                        key={index}

                                        data-position={index}
                                        draggable

                                        onDragStart={onDragStart}
                                        onDragOver={onDragOver}
                                        onDrop={onDrop}

                                        onDragLeave={onDragLeave}

                                        className={`p-4 my-3 ${dragAndDrop && dragAndDrop.draggedTo === Number(index) ? "dropArea" : ""}`}>
                                        <div className="todoBox d-flex align-items-center justify-content-between">
                                            <h6 className="m-0 fw-bold" style={item.completed && { textDecoration: "line-through" } || {}}>{index} {title(item.title)}</h6>
                                            <div>
                                                <button className="btn"><FontAwesomeIcon icon={faEdit} /></button>
                                                <button className="btn"><FontAwesomeIcon icon={faTrash} /></button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </TodoWrapper>
    )
};

export default Todo