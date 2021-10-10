import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Style.css';
import { useState ,useEffect} from 'react';

const Result=()=> {
    const [osactive, setOSactive] = useState()
    const [osactivate, setOSactivate] = useState()

    const [ramactive, setRAMactive] = useState()
    const [ramactivate, setRAMactivate] = useState()

    const [cpuactive, setCPUactive] = useState()
    const [cpuactivate, setCPUactivate] = useState()

    const [gcactive, setGCactive] = useState()
    const [gcactivate, setGCactivate] = useState()

    if(sessionStorage.valuetobeChecked){
        var data=JSON.parse(sessionStorage.valuetobeChecked)
        //console.log(data)
        var score=JSON.parse(sessionStorage.valuetoget)
    }
   

     useEffect(() => {
        
        if(score.user.userramscore>=score.system.ramscore){
            setRAMactive(true)
            setRAMactivate(true)
        }else{
            setRAMactive(false)
            setRAMactivate(false)
        }

        if(score.user.userosscore>=score.system.osscore){
            setOSactive(true)
            setOSactivate(true)
        }else{
            setOSactive(false)
            setOSactivate(false)
        }

        if(score.user.usercpuscore>=score.system.cpuscore){
            setCPUactive(true)
            setCPUactivate(true)
        }else{
            setCPUactive(false)
            setCPUactivate(false)
        }

        if(score.user.userGCscore>=score.system.GCscore){
            setGCactive(true)
            setGCactivate(true)
        }else{
            setGCactive(false)
            setGCactivate(false)
        }
     },[score.user.userramscore, score.user.userosscore, score.user.usercpuscore, score.user.userGCscore, score.system.ramscore, score.system.osscore, score.system.cpuscore, score.system.GCscore])
    
     console.log(score.user.userGCscore, score.system.GCscore)
    const percentage =100-(((score.user.userGCscore-score.system.GCscore)/score.user.userGCscore)*100);
    
    return (<>
        <div className='hall-of-fame'>
            <div className="selected">
                <h2>OPERATING SYSTEM</h2>
                <div className={`${osactivate? "passed":"failed"}`}  >{`${osactive? "Passed":"Failed"}`}</div>
                <input className="required-data" type="text" value={data.system.os} placeholder="Required-Operating System" readOnly />
                <input className="user-data" type="text" value={data.user.usertext1} placeholder="User-Operating System" readOnly />
            </div>
            <div className="selected">
                <h2>RAM</h2>
                <div className={`${ramactivate? "passed":"failed"}`} > {`${ramactive? "Passed":"Failed"}`}</div>
                <input className="required-data" type="text" value={data.system.ram} placeholder="Required-Operating System" readOnly />
                <input className="user-data" type="text" value={data.user.usertext3} placeholder="User-Operating System" readOnly />
            </div>
            <div className="selected">
                <h2>PROCESSOR</h2>
                <div className={`${cpuactivate? "passed":"failed"}`}>{`${cpuactive? "Passed":"Failed"}`}</div>
                <input className="required-data" type="text" value={data.system.cpu} placeholder="Required-Operating System" readOnly />
                <input className="user-data" type="text" value={data.user.usertext2} placeholder="User-Operating System" readOnly />
            </div>
            <div className="selected">
                <h2>GRAPHIC CARD</h2>
                <div className={`${gcactivate? "passed":"failed"}`}> {`${gcactive? "Passed":"Failed"}`}</div>
                <input className="required-data" type="text" value={data.system.GC} placeholder="Required-Operating System" readOnly />
                <input className="user-data" type="text" value={data.user.usertext4} placeholder="User-Operating System" readOnly />
            </div>
        </div>
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbarWithChildren value={percentage}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
            <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>{percentage}%</strong> mate
            </div>
        </CircularProgressbarWithChildren>;
        </div>
        </>
    )
}
export default Result;
