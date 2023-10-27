import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export function UserDetailPage() {

  const {id} =  useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(()=>{
    loadUser();
  }, []);

  const loadUser = async()=>{
    const response = await axios.get('http://localhost:3000/users/'+id);
    setUser(response.data);
  }


  return (
    <div>
      <div>Name: {user.name}</div>
      <div>UserName: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>WEbSite: {user.website}</div>
      <button onClick={()=> navigate(-1)}>GO BACK</button>
    </div>
  )
}
