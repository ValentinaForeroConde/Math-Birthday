import React, { useState, useEffect } from 'react';

const Index = () => {

    const [name, setName] = useState("");
    const [date, setDate] = useState();
    const dateNow = new Date();
    const [nextBirthday, setNextBirthday] = useState();
    
    function addDays(date) {
        var result = new Date(date);
        for(var i = 0; dateNow > result ; i++){
            var days = Math.pow(10,i);
            result.setDate(result.getDate() + days);
        }
        setNextBirthday([result, i]);
    };
    useEffect(() => {  
        console.log(nextBirthday)
      }, [nextBirthday]);
    

    return (
        <div className="container">
            <div className="info">
                <i className="icon fas fa-birthday-cake"></i>
                <h1>Math Birthday</h1>
                <h2>Calculate your Math Birthday</h2>
                <h3>and celebrate it</h3>
            </div>
            <div className="form-container">
                <form>
                    <div className="input-container">
                        <div >
                            <label className="label">Name: </label>
                            <input className="input" type="text" placeholder="Name"  onChange={e => setName(e.target.value)} required="required" />
                        </div>
                        <div>
                            <label className="label">Birth date: </label>
                            <input className="input" type="date" onChange={ev => setDate(ev.target.value)} required="required" />
                        </div>
                    </div>
                    <div className="container-button">
                        <button type="button" className="button" onClick ={() =>{ addDays(date)}}>
                            Calculate
                        </button>
                    </div>
                    {nextBirthday === undefined?(
                        null
                    ):(   
                        <p>{name}, your next math Birthday is your {nextBirthday[1]}-day-old birthday on {nextBirthday[0].toDateString()} !</p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Index;
