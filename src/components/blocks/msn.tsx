
export default function Msn() {
  return (
    <div className="msn-window">
       <div>
          msn top bar
       </div>
       <div className="chat-container">
            <div className="chat">
                <div className="chat-box">
                    <div className="chat-box-header">
                        <span>To :</span>
                        <span>@Username</span>
                    </div>
                    <div className="chat-box-convo">
                        cc cv ?
                    </div>
                </div>
                <div className="chat-actions">
                    <div className="chat-actions-btns">
                        <button>test</button>
                    </div>
                    <div className="chat-actions-input">
                        <input type="text" />
                        <button><span>S</span>end</button>
                    </div>
                    <div className="chat-actions-footer">
                        <button>a</button>
                    </div>
                </div>
            </div>
            <div className="cams">
                <div className="cam">
                    <div className="cam-img-video">
                        <img src="/assets/images/camAvatar.png" />
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.03967 7.51293L11.4448 0.494077L0.634572 0.494078L6.03967 7.51293Z" fill="#3F4A74"/>
                        </svg>
                    </div>
                </div>
                <div className="cam">
                    <div className="cam-img-video">
                        <img src="/assets/images/camAvatar.png" />
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.03967 7.51293L11.4448 0.494077L0.634572 0.494078L6.03967 7.51293Z" fill="#3F4A74"/>
                        </svg>
                    </div>
                </div>
            </div>
       </div>
       <div className="msn-footer">

       </div>
    </div>
  )
}
