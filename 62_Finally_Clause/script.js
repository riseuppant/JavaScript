const f = () => {
  try {
    let a = 0;
    console.log(program);
    console.log("Program run Successfully");
  } catch (error) {
    console.log("This is an error");
    // console.log(promptify)
  } finally {
    //Used for file closing
    //for cleanups
    //for exiting loops
    console.log("Iam good boy");//will this run when the function is returned??
  }
};
f()