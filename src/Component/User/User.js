import React from 'react';

const User = (props) => {
  const familiar=props.isfamiliar;
  // const greetings=familiar?<p>Welcome, my friend.</p> : <p>Who the hell are you?</p>;
  let greetings;
  if(familiar){
    greetings=<p>Welcome, my friend.</p>;
  }else{
    greetings=<p>Who the hell are you?</p>;
  }
  return (
    <div>
      <h1>Greetings</h1>
      {greetings}
      <br/>
      <h1>Food</h1>
      {
        familiar?
        <p>I will buy Food for you.</p>
        :
        <p>Lets eat his his whose whose?</p>
      }
      <h1>Connection</h1>
      {
        familiar && <p>Let's join my facebook</p>
      }

    </div>
  );
};

export default User;