import Cookie from "js-cookie";
import React, { useState, useEffect } from "react";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

export function signup(email, password) {
  return fetch("https://192.168.86.77:/api/user/signup/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export async function login(email, password) {
  return fetch("https://192.168.86.77:/api/session/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json(); // Make sure to return this Promise
    })
    .then((data) => {
      if (!data.token) {
        return false;
      }
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function logout() {
  return fetch("https://192.168.86.77:/api/session/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${Cookie.get("token")}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      return response.json();
    })
    .then((data) => {
      if (data.message === "Token deleted") {
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
      fetch("https://192.168.86.77:/api/session/", {
        method: "GET",
        headers: {
          Authorization: "Token " + Cookie.get("token"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.message) {
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

