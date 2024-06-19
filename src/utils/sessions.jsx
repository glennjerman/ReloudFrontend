import axios from 'axios';
import https from 'https';
import Cookie from "js-cookie";
import React, { useState, useEffect } from "react";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export function signup(email, password) {
  return axios.post("https://192.168.86.77:/api/user/signup/", { email, password }, {
    headers: {
      "Content-Type": "application/json",
    },
    httpsAgent: agent
  });
}

export async function login(email, password) {
  return axios.post("https://192.168.86.77:/api/session/", { email, password }, {
    headers: {
      "Content-Type": "application/json",
    },
    httpsAgent: agent
  })
    .then((response) => {
      if (!response.data.token) {
        return false;
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function logout() {
  return axios.delete("https://192.168.86.77:/api/session/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${Cookie.get("token")}`,
    },
    httpsAgent: agent
  })
    .then((response) => {
      if (response.data.message === "Token deleted") {
        Cookie.remove("token");
        return true;
      }
      return false;
    });
}

export function CheckSession(WrappedComponent) {
  return function WithCheckSession(props) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [isValidSession, setIsValidSession] = useState(false);

    useEffect(() => {
      axios.get("https://192.168.86.77:/api/session/", {
        headers: {
          Authorization: "Token " + Cookie.get("token"),
        },
        httpsAgent: agent
      })
        .then((response) => {
          setIsLoading(false);
          if (response.data.message) {
            setIsValidSession(true);
          } else {
            setIsValidSession(false);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Error:", error);
        });
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    } else if (!isValidSession) {
      if (location.pathname !== '/login') {
        navigate('/login')
        return null;
      }
      return <WrappedComponent {...props} />;
    }
     else if (isValidSession) {
        if (location.pathname === '/login') {
            navigate('/auth/dashboard')
            return null;
        }
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
}