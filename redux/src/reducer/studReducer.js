const initArr = {
    students: [
      {
        rollno:1,name:"aaa",marks:10
      },
      {
        rollno:2,name:"bbb",marks:20
      }
    ],
  };
  
  //define the reducer logic
  const studReducer = (state = initArr, action) => {       /*initarr is object*/
    switch (action.type) {
  
      case "students/addStudent":
        return {
          ...state,
          students: [...state.students, action.payload],
        };

  //logic to delete a todo
      case "students/deleteStudent":
        return {
          ...state, //returns whole obj
          students: state.students.filter((stud) => stud.rollno !== action.payload.rollno),
        };

  //logic to edit a todo
  case "students/editStudent":
    return {
      ...state, 
      students: state.students.map((stud) =>{
        if(stud.rollno === action.payload.rollno){
          stud.marks = action.payload.marks;
        }
        return stud;
      }),
    };

  // logic to complete a todo
  // logic to search a single student on rollno
      case "students/searchStudent":
        return {
          ...state,
          students: state.students.map((stud) => {
            if (stud.rollno === action.payload) {
              return {
                ...stud
              };
            } else {
              return stud;
            }
          }),
        };
      default:
        return state;
    }
  };
  
  export default studReducer;
  