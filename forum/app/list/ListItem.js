'use client'
import Link from "next/link"
// import DetailLink from "./DetailLink";

export default function ListItem({result}){
    // destructuring: use {result} directely instead of props.result
    return(
        <div>
        {
            result.map((a, i)=>
                <div className="list-item" key={i}>
                    <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
                    <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
                    {/* <DetailLink id={a._id}/> */}
                    <span onClick={(e)=>{

                        // ajax
                        fetch('/api/post/delete', {method : 'DELETE', body : result[i]._id})
                        .then((r) => r.json())
                        .then(() => {
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(()=>{
                                e.target.parentElement.style.display = 'none'
                            }, 1000)
                        })
                        
                        // query string or search parameter
                        // fetch('/api/test?name=malkin&age=20')
                        
                        // url parameter
                        // fetch('/api/abc/pop')
                        
                    }}
                    style={{
                        cursor: 'pointer',    // Changes the cursor to signify a clickable item
                        display: 'inline-block',
                        padding: '5px',
                        borderRadius: '50%',   // Optional: Adds a circular background on hover
                        transition: 'background-color 0.3s',  // Smooth transition for hover effect
                        userSelect: 'none',    // Prevents text selection on double click
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}  // Optional: Changes background color on hover
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} // Reverts the background color when not hovered

                    >🗑️</span>
                    {/* fetch('/URL') makes a GET request */}
                    {/* <form> request always refreshes but ajax request doesn't */}
                    {/* JSON = {name: 'crack'} -> '{"name": "creack"}' = is needed to send array or object to server */}
                    {/* JSON.stringify() and JSON.parse() */}
                    <p>12/23</p>
                </div>
            )
        }
        </div>
    )
}