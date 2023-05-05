import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
  MDBScrollbar,
} from "mdb-react-ui-kit";
import './style.css'
import axios from 'axios'


export default function App() {
    const [messages, setMessages] = useState('');
    const [conversations, setConversation] = useState([])

    useEffect(()=>{

    }, [])
  
  const onSend = () => { 
    setConversation(conversations=>[...conversations, {user:"user", text: messages, time:new Date()}])
    setTimeout(async() => {
      let { data } = await axios.post('http://10.129.2.165:54312/api/v1/chatbot', { input_seq: messages})
      data = data.data
      setConversation(conversations => [...conversations, { user: "bot", intent: data.intent, slot: data.slot, time: new Date() }])
      setMessages('')
     }, 1000)
  };

  // console.log(conversations)

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="6">
          <MDBCard id="chat2" style={{ borderRadius: "15px" }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat Assistant</h5>
              <MDBBtn onClick={() => {
                setConversation([])
                setMessages('')
              }} color="primary" size="sm" rippleColor="dark">
                Reset
              </MDBBtn>
            </MDBCardHeader>



            <div id="perfectScroll"
            >
              <MDBCardBody  
              >

                <div className="divider d-flex align-items-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                  >
                    Today
                  </p>
                </div>

                <div  className="d-flex flex-row justify-content-end mb-4">
                  <img
                    src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6LMXdieGbhD7vt0AfpHG0WmLeguqVJ1udqEVQLQpyw&usqp=CAU&ec=48665698"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div>
                     <p
                      className={"mall p-2 me-3 mb-1 text-white rounded-3 bg-primary"}
                    >
                      Hi I am your chat assistant, how can I help you?
                    </p> 
                </div>
                </div>

                {conversations.map((item, i)=>{
                    return (
                        <div key={i} className={item.user !=='bot' ? "d-flex flex-row justify-content-start mb-4" : "d-flex flex-row justify-content-end mb-4"}>
                        <img
                          src={item.user !== 'bot' ? 
                          "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                        :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6LMXdieGbhD7vt0AfpHG0WmLeguqVJ1udqEVQLQpyw&usqp=CAU&ec=48665698"
                        }
                          alt="avatar 1"
                          style={{ width: "45px", height: "100%" }}
                        />
                        <div>
                          {item.user !== 'bot' ? <p
                            className={"small p-2 ms-3 mb-1 rounded-3"}
                            style={{ backgroundColor: "#f5f6f7" }}
                          >
                            {item.text}
                          </p>:
                            <div className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                <span>Intent: {item.intent}</span><br/>
                                {item?.slot?.map((slot,idx)=><><span key={idx}>{slot.name+": "+slot.value}</span><br/></>)}
                            </div>}
                          <p className="small ms-3 mb-3 rounded-3 text-muted">
                            {item.time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    )
                })}
              </MDBCardBody>
            </div>





            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3 z-100">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 3"
                style={{ width: "45px", height: "100%" }}
              />
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
                value={messages}
                onChange={(e)=>setMessages(e.target.value)}
              ></input>
              <div style={{cursor:"pointer"}} className="ms-3" onClick={()=>onSend()}>
                <MDBIcon fas icon="paper-plane" />
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}