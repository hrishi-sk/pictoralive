import React, {useState, useEffect} from 'react'
import '../css/Feed.css'
import Question from './Question'
import db from '../firebase'
function IT() {

    const[posts, setPost]= useState([]);

    useEffect(() => {
        db.collection('question').where('utag','==','it').onSnapshot(snapshot => setPost(snapshot.docs.map((doc)=>(({
            id: doc.id,
            question:doc.data()
        })))));
      
    }, [])
    return (
        <div className="feed">
            {
                posts.map(({id,question})=>(
                    <Question
                     key={id}
                     Id={id}
                     question={question.question}
                     quser={question.user}
                    />
                ))
            }
        </div>
    )
}

export default IT
