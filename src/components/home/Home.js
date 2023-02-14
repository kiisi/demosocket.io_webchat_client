import React, { useContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import RoomList from './RoomList'
import io from 'socket.io-client'
let socket;

const Home = () => {
    const ENDPT = 'localhost:5000'

    useEffect(() => {
      socket = io(ENDPT)
    
      return () => {
        socket.disconnect()
        socket.off()
      }
    }, [ENDPT])
    

    const { user, setUser } = useContext(UserContext)

    const [room, setRoom] = useState('')
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        socket.on('room-created', room =>{
            setRooms([...rooms, room])
        })
    },[rooms])

    useEffect(()=>{
        socket.on('output-rooms', rooms =>{
            setRooms(rooms)
        })
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()

        socket.emit('create-room', room)
        console.log(room)
        setRoom('')

    }

    if(!user){
        return <Navigate to='/login'/>
    }

    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Welcome {user ? user.name : ''}</span>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="input-field col s12">
                                            <input id="room" type="text" className="validate"
                                            value={room}
                                            onChange={e => setRoom(e.target.value)}
                                            />
                                                <label htmlFor="room">Enter a room name</label>
                                                
                                        </div>
                                    </div>
                                </div>
                                <button className="btn">Create Room</button>
                            </form>

                        </div>
                    </div>
                </div>

                <div className="col s6 m5 offset-1">
                    <RoomList rooms={rooms}/>
                </div>
            </div>

        </div>
    )
}

export default Home
